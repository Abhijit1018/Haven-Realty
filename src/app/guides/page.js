import Image from 'next/image';
import Link from 'next/link';
import { MapPin, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { guides } from '@/data/guides';
import styles from './page.module.css';

export default function GuidesPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1>City & Neighborhood Guides</h1>
                    <p>Discover the lifestyle, market trends, and real estate opportunities in India&rsquo;s top cities</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.guidesGrid}>
                        {guides.map((guide, i) => (
                            <ScrollReveal key={guide.id} delay={i * 120}>
                                <div className={styles.guideCard}>
                                    <div className={styles.guideImage}>
                                        <Image src={guide.image} alt={guide.city} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                                        <div className={styles.guideImgOverlay}>
                                            <h2>{guide.city}</h2>
                                            <span>{guide.tagline}</span>
                                        </div>
                                    </div>
                                    <div className={styles.guideContent}>
                                        <p className={styles.guideDesc}>{guide.description}</p>

                                        <div className={styles.guideStats}>
                                            <div className={styles.guideStat}>
                                                <TrendingUp size={16} />
                                                <div>
                                                    <strong>{guide.avgPrice}</strong>
                                                    <span>Avg. Price</span>
                                                </div>
                                            </div>
                                            <div className={styles.guideStat}>
                                                <Sparkles size={16} />
                                                <div>
                                                    <strong>{guide.growth}</strong>
                                                    <span>Growth</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.guideSection}>
                                            <h4><Sparkles size={16} /> The Vibe</h4>
                                            <p>{guide.vibe}</p>
                                        </div>

                                        <div className={styles.guideSection}>
                                            <h4><MapPin size={16} /> Hot Spots</h4>
                                            <div className={styles.hotspots}>
                                                {guide.hotspots.map((spot, j) => (
                                                    <span key={j} className={styles.hotspot}>{spot}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={styles.guideSection}>
                                            <h4>🏡 Lifestyle</h4>
                                            <p>{guide.lifestyle}</p>
                                        </div>

                                        <Link href="/listings" className="btn btn-outline btn-sm">
                                            View Properties in {guide.city} <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
