'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MapPin, BedDouble, Bath, Maximize, Car, Compass, Calendar, Home, Phone, Mail, User, Send, ArrowLeft, Heart, Share2, Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import styles from './page.module.css';

export default function PropertyDetailPage() {
    const params = useParams();
    const property = properties.find(p => p.id === Number(params.id));
    const [activeImage, setActiveImage] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    if (!property) {
        return (
            <div style={{ padding: '10rem 2rem', textAlign: 'center' }}>
                <h2>Property Not Found</h2>
                <Link href="/listings" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Back to Listings
                </Link>
            </div>
        );
    }

    const similarProperties = properties
        .filter(p => p.id !== property.id && p.type === property.type)
        .slice(0, 3);

    const specs = [
        { icon: <BedDouble size={18} />, label: 'Bedrooms', value: property.bhk > 0 ? `${property.bhk} BHK` : 'N/A' },
        { icon: <Bath size={18} />, label: 'Bathrooms', value: property.bathrooms > 0 ? property.bathrooms : 'N/A' },
        { icon: <Maximize size={18} />, label: 'Area', value: `${property.sqft} sq.ft` },
        { icon: <Car size={18} />, label: 'Furnishing', value: property.furnished },
        { icon: <Home size={18} />, label: 'Floor', value: property.floor },
        { icon: <Compass size={18} />, label: 'Facing', value: property.facing },
        { icon: <Calendar size={18} />, label: 'Property Age', value: property.age },
    ];

    return (
        <>
            <section className={styles.breadcrumb}>
                <div className="container">
                    <Link href="/listings" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Listings
                    </Link>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <div className="container">
                    <div className={styles.gallery}>
                        <div className={styles.mainImage}>
                            <Image
                                src={property.images[activeImage]}
                                alt={property.title}
                                fill
                                className={styles.galleryImg}
                                sizes="(max-width: 768px) 100vw, 60vw"
                                priority
                            />
                            <div className={styles.imageActions}>
                                <button className={styles.actionBtn}><Heart size={18} /> Save</button>
                                <button className={styles.actionBtn}><Share2 size={18} /> Share</button>
                            </div>
                        </div>
                        <div className={styles.thumbs}>
                            {property.images.map((img, i) => (
                                <button
                                    key={i}
                                    className={`${styles.thumb} ${i === activeImage ? styles.thumbActive : ''}`}
                                    onClick={() => setActiveImage(i)}
                                >
                                    <Image src={img} alt={`View ${i + 1}`} fill sizes="120px" className={styles.thumbImg} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.detailSection}>
                <div className="container">
                    <div className={styles.detailGrid}>
                        {/* Main Content */}
                        <div className={styles.mainContent}>
                            <ScrollReveal>
                                <div className={styles.titleRow}>
                                    <div>
                                        <span className={`badge ${property.status === 'For Rent' ? 'badge-rent' : 'badge-sale'}`}>
                                            {property.status}
                                        </span>
                                        <h1 className={styles.propertyTitle}>{property.title}</h1>
                                        <p className={styles.propertyLocation}>
                                            <MapPin size={16} /> {property.location}
                                        </p>
                                    </div>
                                    <div className={styles.priceBox}>
                                        <span className={styles.price}>{property.priceFormatted}</span>
                                        <span className={styles.priceNote}>Negotiable</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={100}>
                                <div className={styles.specsGrid}>
                                    {specs.map((spec, i) => (
                                        <div key={i} className={styles.specItem}>
                                            <div className={styles.specIcon}>{spec.icon}</div>
                                            <div>
                                                <span className={styles.specLabel}>{spec.label}</span>
                                                <strong className={styles.specValue}>{spec.value}</strong>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={200}>
                                <div className={styles.section}>
                                    <h3>Description</h3>
                                    <p className={styles.description}>{property.description}</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={300}>
                                <div className={styles.section}>
                                    <h3>Amenities</h3>
                                    <div className={styles.amenitiesGrid}>
                                        {property.amenities.map((amenity, i) => (
                                            <div key={i} className={styles.amenityItem}>
                                                <Check size={16} />
                                                <span>{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={400}>
                                <div className={styles.section}>
                                    <h3>Location & Nearby</h3>
                                    <div className={styles.mapEmbed}>
                                        <iframe
                                            src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&z=15&output=embed`}
                                            width="100%"
                                            height="400"
                                            style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Property Location"
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Inquiry Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.inquiryCard}>
                                <h3>Interested in this property?</h3>
                                <p className={styles.agentInfo}>
                                    <User size={16} /> {property.agent}
                                </p>
                                <a href={`tel:${property.agentPhone}`} className={styles.agentPhone}>
                                    <Phone size={16} /> {property.agentPhone}
                                </a>
                                <div className={styles.divider} />
                                <form className={styles.inquiryForm} onSubmit={(e) => { e.preventDefault(); alert('Inquiry submitted! Our agent will contact you shortly.'); }}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            className="form-input"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-textarea"
                                            placeholder={`I'm interested in ${property.title}. Please contact me with more details.`}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={3}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                        <Send size={16} /> Send Inquiry
                                    </button>
                                </form>
                                <Link href="/mortgage-calculator" className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
                                    Calculate EMI
                                </Link>
                            </div>
                        </aside>
                    </div>

                    {/* Similar Properties */}
                    {similarProperties.length > 0 && (
                        <div className={styles.similar}>
                            <ScrollReveal>
                                <h2>Similar Properties</h2>
                            </ScrollReveal>
                            <div className={styles.similarGrid}>
                                {similarProperties.map((p, i) => (
                                    <ScrollReveal key={p.id} delay={i * 100}>
                                        <PropertyCard property={p} />
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
