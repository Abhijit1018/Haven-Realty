import { Star, Quote, Users, Award, ThumbsUp } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { testimonials } from '@/data/testimonials';
import styles from './page.module.css';

export default function TestimonialsPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Client Testimonials</h1>
                    <p>Real stories from families and investors who trusted us with their most important decisions</p>
                </div>
            </section>

            {/* Stats Banner */}
            <section className={styles.statsBanner}>
                <div className="container">
                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <ThumbsUp size={24} />
                            <div><strong>98%</strong><span>Client Satisfaction</span></div>
                        </div>
                        <div className={styles.statItem}>
                            <Star size={24} />
                            <div><strong>4.9/5</strong><span>Average Rating</span></div>
                        </div>
                        <div className={styles.statItem}>
                            <Users size={24} />
                            <div><strong>1,800+</strong><span>Happy Families</span></div>
                        </div>
                        <div className={styles.statItem}>
                            <Award size={24} />
                            <div><strong>12</strong><span>Industry Awards</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {testimonials.map((t, i) => (
                            <ScrollReveal key={t.id} delay={i * 100}>
                                <div className={styles.card}>
                                    <Quote size={28} className={styles.quoteIcon} />
                                    <div className={styles.stars}>
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} size={16} fill="#C8973E" color="#C8973E" />
                                        ))}
                                    </div>
                                    <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
                                    <div className={styles.author}>
                                        <div className={styles.avatar}>{t.avatar}</div>
                                        <div>
                                            <strong>{t.name}</strong>
                                            <span>{t.role} • {t.location}</span>
                                        </div>
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
