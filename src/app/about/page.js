import Image from 'next/image';
import { Users, Target, Eye, Award, Clock, Building, TrendingUp, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export default function AboutPage() {
    const team = [
        { name: 'Priya Sharma', role: 'Founder & CEO', avatar: 'PS', desc: '15+ years in luxury real estate. Former VP at Knight Frank India.' },
        { name: 'Rahul Mehta', role: 'Head of Sales', avatar: 'RM', desc: '12 years of experience closing high-value residential and commercial deals across Mumbai.' },
        { name: 'Aisha Khan', role: 'Lead Agent', avatar: 'AK', desc: 'Specializes in Bangalore and Hyderabad markets with a 98% client satisfaction rate.' },
        { name: 'Vikram Rajan', role: 'Marketing Director', avatar: 'VR', desc: 'Digital marketing expert who has helped scale Haven Realty\'s online presence 10x.' },
    ];

    const timeline = [
        { year: '2009', event: 'Haven Realty founded in Bangalore with a team of 3 passionate agents.' },
        { year: '2013', event: 'Expanded to Mumbai and Chennai. Crossed ₹500 Cr in transactions.' },
        { year: '2017', event: 'Launched digital platform. Added Hyderabad, Pune, and Delhi operations.' },
        { year: '2020', event: 'Introduced virtual property tours and AI-powered property matching.' },
        { year: '2024', event: 'Crossed 2,500 listings and ₹3,200 Cr in total transactions.' },
    ];

    const values = [
        { icon: <Heart size={24} />, title: 'Client First', desc: 'Every decision is guided by what\'s best for our clients.' },
        { icon: <Eye size={24} />, title: 'Transparency', desc: 'Honest pricing, clear documentation, no hidden charges.' },
        { icon: <Target size={24} />, title: 'Excellence', desc: 'We settle for nothing less than the best outcomes.' },
        { icon: <Users size={24} />, title: 'Community', desc: 'We invest in the neighbourhoods we operate in.' },
    ];

    return (
        <>
            <section className={styles.hero}>
                <Image src="/images/interior-kitchen.png" alt="About us" fill className={styles.heroBg} sizes="100vw" />
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.heroLabel}>Our Story</span>
                    <h1>Building Trust,<br />One Home at a Time</h1>
                    <p>Since 2009, we&rsquo;ve helped 1,800+ families find their dream homes across India&rsquo;s finest cities.</p>
                </div>
            </section>

            {/* Mission / Vision / Values */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="subtitle">What Drives Us</span>
                            <h2>Our Values</h2>
                        </div>
                    </ScrollReveal>
                    <div className={styles.valuesGrid}>
                        {values.map((v, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className={styles.valueCard}>
                                    <div className={styles.valueIcon}>{v.icon}</div>
                                    <h4>{v.title}</h4>
                                    <p>{v.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className={`section ${styles.timelineSection}`}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="subtitle">Our Journey</span>
                            <h2>Milestones</h2>
                        </div>
                    </ScrollReveal>
                    <div className={styles.timeline}>
                        {timeline.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 120}>
                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineYear}>{item.year}</div>
                                    <div className={styles.timelineDot} />
                                    <div className={styles.timelineContent}>
                                        <p>{item.event}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="subtitle">Meet the Experts</span>
                            <h2>Our Leadership Team</h2>
                        </div>
                    </ScrollReveal>
                    <div className={styles.teamGrid}>
                        {team.map((member, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className={styles.teamCard}>
                                    <div className={styles.teamAvatar}>{member.avatar}</div>
                                    <h4>{member.name}</h4>
                                    <span className={styles.teamRole}>{member.role}</span>
                                    <p>{member.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={`section ${styles.statsSection}`}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        {[
                            { icon: <Building size={28} />, num: '2,500+', label: 'Properties Listed' },
                            { icon: <Users size={28} />, num: '1,800+', label: 'Happy Families' },
                            { icon: <TrendingUp size={28} />, num: '₹3,200 Cr', label: 'Transactions' },
                            { icon: <Award size={28} />, num: '12', label: 'Awards Won' },
                        ].map((s, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className={styles.statItem}>
                                    <div className={styles.statIcon}>{s.icon}</div>
                                    <h3>{s.num}</h3>
                                    <p>{s.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
