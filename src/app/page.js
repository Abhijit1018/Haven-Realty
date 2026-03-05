'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, Home, BedDouble, TrendingUp, Users, Award, Building, ArrowRight, Star, ChevronRight, Shield, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { testimonials } from '@/data/testimonials';
import styles from './page.module.css';

export default function HomePage() {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const featuredProperties = properties.filter(p => p.featured).slice(0, 6);

  const stats = [
    { icon: <Building size={28} />, number: '2,500+', label: 'Properties Listed' },
    { icon: <Users size={28} />, number: '1,800+', label: 'Happy Families' },
    { icon: <Award size={28} />, number: '15+', label: 'Years Experience' },
    { icon: <TrendingUp size={28} />, number: '₹3,200 Cr', label: 'Worth Transacted' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <Image
          src="/images/hero-villa.png"
          alt="Luxury property"
          fill
          priority
          className={styles.heroBg}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.heroLabel}>Welcome to Haven Realty</span>
            <h1 className={styles.heroTitle}>
              Discover Your <br />
              <span className={styles.heroHighlight}>Perfect Home</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Premium properties across India&rsquo;s finest neighbourhoods.
              Your journey to the perfect home starts here.
            </p>
          </div>

          {/* Search Bar */}
          <div className={styles.searchBar}>
            <div className={styles.searchGroup}>
              <label>Location</label>
              <div className={styles.searchInput}>
                <MapPin size={16} />
                <input
                  type="text"
                  placeholder="City, neighbourhood..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.searchGroup}>
              <label>Property Type</label>
              <div className={styles.searchInput}>
                <Home size={16} />
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                  <option value="">All Types</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div>
            <div className={styles.searchGroup}>
              <label>Budget</label>
              <div className={styles.searchInput}>
                <TrendingUp size={16} />
                <select>
                  <option value="">Any Price</option>
                  <option value="50">Under ₹50L</option>
                  <option value="100">₹50L – ₹1Cr</option>
                  <option value="200">₹1Cr – ₹2Cr</option>
                  <option value="500">₹2Cr – ₹5Cr</option>
                  <option value="999">₹5Cr+</option>
                </select>
              </div>
            </div>
            <Link href="/listings" className={`btn btn-primary btn-lg ${styles.searchBtn}`}>
              <Search size={18} /> Search
            </Link>
          </div>

          <div className={styles.heroTrust}>
            <span>Trusted by 1,800+ families</span>
            <div className={styles.heroStars}>
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#E4BE76" color="#E4BE76" />)}
              <span>4.9/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <h3 className={styles.statNumber}>{stat.number}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED LISTINGS ===== */}
      <section className={`section ${styles.featured}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="subtitle">Curated Collection</span>
              <h2>Featured Properties</h2>
              <p>Hand-picked premium properties that represent the finest in luxury living</p>
            </div>
          </ScrollReveal>
          <div className={styles.featuredGrid}>
            {featuredProperties.map((property, index) => (
              <ScrollReveal key={property.id} delay={index * 80}>
                <PropertyCard property={property} index={index} />
              </ScrollReveal>
            ))}
          </div>
          <div className={styles.featuredCTA}>
            <Link href="/listings" className="btn btn-outline btn-lg">
              View All Properties <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={`section ${styles.whyUs}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="subtitle">Why Haven Realty</span>
              <h2>Your Trusted Real Estate Partner</h2>
              <p>We go beyond transactions to build lasting relationships</p>
            </div>
          </ScrollReveal>
          <div className={styles.whyGrid}>
            {[
              { icon: <Shield size={32} />, title: 'Verified Properties', desc: 'Every listing is personally verified with legal documentation checks and site inspections.' },
              { icon: <TrendingUp size={32} />, title: 'Market Expertise', desc: 'Data-driven insights and 15+ years of market knowledge to help you make the best investment.' },
              { icon: <Users size={32} />, title: 'Dedicated Agents', desc: 'A personal relationship manager who understands your needs and finds your perfect match.' },
              { icon: <Clock size={32} />, title: 'End-to-End Support', desc: 'From site visits to registration, we handle every step so you can focus on what matters.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="subtitle">Client Stories</span>
              <h2>What Our Clients Say</h2>
              <p>Real stories from real people who found their dream homes with us</p>
            </div>
          </ScrollReveal>
          <div className={styles.testimonialsGrid}>
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 100}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialStars}>
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="#C8973E" color="#C8973E" />)}
                  </div>
                  <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>{t.avatar}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role} • {t.location}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className={styles.featuredCTA}>
            <Link href="/testimonials" className="btn btn-outline">
              Read All Reviews <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner}>
        <Image src="/images/luxury-apartment.png" alt="Properties" fill className={styles.ctaBg} sizes="100vw" />
        <div className={styles.ctaOverlay} />
        <div className={`container ${styles.ctaContent}`}>
          <ScrollReveal>
            <h2>Ready to Find Your Dream Home?</h2>
            <p>Let our experts guide you to the perfect property. Schedule a free consultation today.</p>
            <div className={styles.ctaButtons}>
              <Link href="/listings" className="btn btn-white btn-lg">Browse Properties</Link>
              <Link href="/contact" className="btn btn-accent btn-lg">Contact Us <ArrowRight size={16} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
