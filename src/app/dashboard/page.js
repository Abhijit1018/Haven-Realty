'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, MessageSquare, User, Settings, Trash2, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { properties } from '@/data/properties';
import styles from './page.module.css';

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('favorites');

    const mockFavorites = properties.slice(0, 4);
    const mockInquiries = [
        { id: 1, property: 'Sunset Villa Estate', date: '2025-03-01', status: 'contacted', agent: 'Priya Sharma' },
        { id: 2, property: 'Skyline Luxury Apartments', date: '2025-02-28', status: 'in-review', agent: 'Rahul Mehta' },
        { id: 3, property: 'Green Valley Townhouse', date: '2025-02-25', status: 'submitted', agent: 'Aisha Khan' },
    ];

    const tabs = [
        { key: 'favorites', icon: <Heart size={18} />, label: 'Saved Properties' },
        { key: 'inquiries', icon: <MessageSquare size={18} />, label: 'My Inquiries' },
        { key: 'profile', icon: <User size={18} />, label: 'Profile' },
    ];

    const statusConfig = {
        submitted: { label: 'Submitted', icon: <Clock size={14} />, className: styles.statusSubmitted },
        'in-review': { label: 'In Review', icon: <AlertCircle size={14} />, className: styles.statusReview },
        contacted: { label: 'Contacted', icon: <CheckCircle size={14} />, className: styles.statusContacted },
    };

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1>My Dashboard</h1>
                    <p>Manage your saved properties and track your inquiries</p>
                </div>
            </section>

            <section className={`section ${styles.dashSection}`}>
                <div className="container">
                    <div className={styles.dashGrid}>
                        {/* Sidebar Tabs */}
                        <aside className={styles.sidebar}>
                            <div className={styles.userCard}>
                                <div className={styles.userAvatar}>JD</div>
                                <h4>John Doe</h4>
                                <p>john@example.com</p>
                            </div>
                            <nav className={styles.tabNav}>
                                {tabs.map(tab => (
                                    <button
                                        key={tab.key}
                                        className={`${styles.tabBtn} ${activeTab === tab.key ? styles.tabActive : ''}`}
                                        onClick={() => setActiveTab(tab.key)}
                                    >
                                        {tab.icon}
                                        <span>{tab.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </aside>

                        {/* Content */}
                        <div className={styles.content}>
                            {activeTab === 'favorites' && (
                                <div>
                                    <h2>Saved Properties <span className={styles.count}>({mockFavorites.length})</span></h2>
                                    <div className={styles.favGrid}>
                                        {mockFavorites.map(property => (
                                            <div key={property.id} className={styles.favCard}>
                                                <div className={styles.favImage}>
                                                    <Image src={property.image} alt={property.title} fill sizes="200px" style={{ objectFit: 'cover' }} />
                                                </div>
                                                <div className={styles.favInfo}>
                                                    <h4>{property.title}</h4>
                                                    <p><MapPin size={14} /> {property.location}</p>
                                                    <span className={styles.favPrice}>{property.priceFormatted}</span>
                                                </div>
                                                <div className={styles.favActions}>
                                                    <Link href={`/listings/${property.id}`} className="btn btn-sm btn-primary">View</Link>
                                                    <button className={styles.removeBtn}><Trash2 size={16} /></button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'inquiries' && (
                                <div>
                                    <h2>My Inquiries <span className={styles.count}>({mockInquiries.length})</span></h2>
                                    <div className={styles.inquiryList}>
                                        {mockInquiries.map(inq => {
                                            const status = statusConfig[inq.status];
                                            return (
                                                <div key={inq.id} className={styles.inquiryCard}>
                                                    <div className={styles.inquiryInfo}>
                                                        <h4>{inq.property}</h4>
                                                        <p>Agent: {inq.agent} • Submitted: {inq.date}</p>
                                                    </div>
                                                    <div className={`${styles.statusBadge} ${status.className}`}>
                                                        {status.icon}
                                                        {status.label}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* Status Timeline */}
                                    <div className={styles.timeline}>
                                        <h3>Inquiry Status Flow</h3>
                                        <div className={styles.timelineSteps}>
                                            <div className={`${styles.timelineStep} ${styles.timelineActive}`}>
                                                <div className={styles.timelineDot} /><span>Submitted</span>
                                            </div>
                                            <div className={styles.timelineLine} />
                                            <div className={`${styles.timelineStep} ${styles.timelineActive}`}>
                                                <div className={styles.timelineDot} /><span>In Review</span>
                                            </div>
                                            <div className={styles.timelineLine} />
                                            <div className={styles.timelineStep}>
                                                <div className={styles.timelineDot} /><span>Contacted</span>
                                            </div>
                                            <div className={styles.timelineLine} />
                                            <div className={styles.timelineStep}>
                                                <div className={styles.timelineDot} /><span>Site Visit</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'profile' && (
                                <div>
                                    <h2>Profile Settings</h2>
                                    <div className={styles.profileForm}>
                                        <div className={styles.formRow}>
                                            <div className="form-group">
                                                <label className="form-label">Full Name</label>
                                                <input type="text" className="form-input" defaultValue="John Doe" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Phone</label>
                                                <input type="tel" className="form-input" defaultValue="+91 98765 12345" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-input" defaultValue="john@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Preferred Locations</label>
                                            <input type="text" className="form-input" defaultValue="Bangalore, Mumbai" />
                                        </div>
                                        <button className="btn btn-primary" onClick={() => alert('Profile updated!')}>
                                            <Settings size={16} /> Save Changes
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
