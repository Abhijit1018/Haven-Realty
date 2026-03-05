'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you within 24 hours.');
    };

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Have a question or ready to start your property journey? We&rsquo;d love to hear from you.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Contact Info */}
                        <ScrollReveal>
                            <div className={styles.infoCol}>
                                <h2>Get in Touch</h2>
                                <p className={styles.infoParagraph}>
                                    Whether you&rsquo;re buying, selling, or just exploring — our team of experts is here to help you every step of the way.
                                </p>

                                <div className={styles.infoCards}>
                                    <div className={styles.infoCard}>
                                        <div className={styles.infoIcon}><MapPin size={20} /></div>
                                        <div>
                                            <h4>Office Address</h4>
                                            <p>42, Brigade Road, MG Road Area,<br />Bangalore, Karnataka 560025</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoCard}>
                                        <div className={styles.infoIcon}><Phone size={20} /></div>
                                        <div>
                                            <h4>Phone</h4>
                                            <p>+91 98765 43210<br />+91 80 4567 8901</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoCard}>
                                        <div className={styles.infoIcon}><Mail size={20} /></div>
                                        <div>
                                            <h4>Email</h4>
                                            <p>hello@havenrealty.in<br />support@havenrealty.in</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoCard}>
                                        <div className={styles.infoIcon}><Clock size={20} /></div>
                                        <div>
                                            <h4>Office Hours</h4>
                                            <p>Mon – Sat: 9:00 AM – 7:00 PM<br />Sun: 10:00 AM – 4:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className={styles.mapWrap}>
                                    <iframe
                                        src="https://www.google.com/maps?q=12.9716,77.5946&z=15&output=embed"
                                        width="100%"
                                        height="280"
                                        style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                                        allowFullScreen
                                        loading="lazy"
                                        title="Office Location"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal delay={200}>
                            <div className={styles.formCard}>
                                <h3>Send Us a Message</h3>
                                <p>Fill in the form below and our team will respond within 24 hours.</p>
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
                                    <div className="form-group">
                                        <label className="form-label">Subject</label>
                                        <select className="form-select" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required>
                                            <option value="">Select a topic</option>
                                            <option value="buy">Buying a Property</option>
                                            <option value="sell">Selling a Property</option>
                                            <option value="rent">Renting</option>
                                            <option value="invest">Investment Advice</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message</label>
                                        <textarea className="form-textarea" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                                        <Send size={18} /> Send Message
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
