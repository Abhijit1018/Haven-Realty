'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Upload, FileText, TrendingUp, Users, Shield, Star, ArrowRight, Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export default function SellPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', propertyType: '', location: '', area: '', expectedPrice: '', description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your valuation request has been submitted. Our team will contact you within 24 hours.');
    };

    const steps = [
        { icon: <FileText size={28} />, title: 'Submit Details', desc: 'Fill out a quick form with your property details and we\'ll get started.' },
        { icon: <TrendingUp size={28} />, title: 'Free Valuation', desc: 'Our experts will assess your property and provide a competitive market valuation.' },
        { icon: <Users size={28} />, title: 'Find Buyers', desc: 'We market your property to our network of 10,000+ verified buyers.' },
    ];

    const benefits = [
        { icon: <Shield size={16} />, text: 'Verified buyer network of 10,000+ prospects' },
        { icon: <Star size={16} />, text: 'Professional photography & virtual tours' },
        { icon: <TrendingUp size={16} />, text: 'Data-driven pricing for maximum returns' },
        { icon: <Users size={16} />, text: 'Dedicated relationship manager' },
        { icon: <FileText size={16} />, text: 'Complete legal & documentation support' },
        { icon: <Check size={16} />, text: 'Zero upfront costs — pay only on success' },
    ];

    return (
        <>
            <section className={styles.hero}>
                <Image src="/images/townhouse-row.png" alt="Sell your property" fill className={styles.heroBg} sizes="100vw" />
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.heroLabel}>Sell With Confidence</span>
                    <h1>Get the Best Value<br />for Your Property</h1>
                    <p>Free valuation, professional marketing, and a trusted buyer network to help you sell faster.</p>
                    <a href="#valuation-form" className="btn btn-accent btn-lg">
                        Request Free Valuation <ArrowRight size={16} />
                    </a>
                </div>
            </section>

            {/* How It Works */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="subtitle">Simple Process</span>
                            <h2>How It Works</h2>
                            <p>Three simple steps to sell your property at the best price</p>
                        </div>
                    </ScrollReveal>
                    <div className={styles.stepsGrid}>
                        {steps.map((step, i) => (
                            <ScrollReveal key={i} delay={i * 150}>
                                <div className={styles.stepCard}>
                                    <div className={styles.stepNumber}>{i + 1}</div>
                                    <div className={styles.stepIcon}>{step.icon}</div>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valuation Form + Benefits */}
            <section className={`section ${styles.formSection}`} id="valuation-form">
                <div className="container">
                    <div className={styles.formGrid}>
                        <ScrollReveal>
                            <div className={styles.benefitsCol}>
                                <span className="subtitle">Why Sell With Us</span>
                                <h2>We Make Selling Simple</h2>
                                <p>Join 500+ homeowners who trusted Haven Realty to sell their properties at premium prices.</p>
                                <ul className={styles.benefitsList}>
                                    {benefits.map((b, i) => (
                                        <li key={i}>
                                            <span className={styles.benefitIcon}>{b.icon}</span>
                                            {b.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className={styles.formCard}>
                                <h3>Request Property Valuation</h3>
                                <p>Fill in your details and our team will provide a free valuation within 24 hours.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.formRow}>
                                        <div className="form-group">
                                            <label className="form-label">Full Name</label>
                                            <input type="text" className="form-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Phone</label>
                                            <input type="tel" className="form-input" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                    </div>
                                    <div className={styles.formRow}>
                                        <div className="form-group">
                                            <label className="form-label">Property Type</label>
                                            <select className="form-select" value={formData.propertyType} onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })} required>
                                                <option value="">Select</option>
                                                <option value="Apartment">Apartment</option>
                                                <option value="Villa">Villa</option>
                                                <option value="Plot">Plot</option>
                                                <option value="Commercial">Commercial</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Area (sq.ft)</label>
                                            <input type="number" className="form-input" value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Property Location</label>
                                        <input type="text" className="form-input" placeholder="City, Locality" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Expected Price (optional)</label>
                                        <input type="text" className="form-input" placeholder="₹" value={formData.expectedPrice} onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Additional Details</label>
                                        <textarea className="form-textarea" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                                        <Upload size={18} /> Submit for Valuation
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    );
}
