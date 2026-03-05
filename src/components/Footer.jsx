import Link from 'next/link';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerInner}`}>
                <div className={styles.footerGrid}>
                    {/* Brand */}
                    <div className={styles.footerCol}>
                        <Link href="/" className={styles.footerLogo}>
                            <Home size={20} />
                            <span>Haven<span className={styles.accent}>Realty</span></span>
                        </Link>
                        <p className={styles.footerDesc}>
                            Your trusted partner in finding the perfect property. We combine deep market expertise
                            with genuine care to make your real estate journey seamless and rewarding.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerTitle}>Quick Links</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/listings">Property Listings</Link></li>
                            <li><Link href="/sell">Sell Your Property</Link></li>
                            <li><Link href="/mortgage-calculator">Mortgage Calculator</Link></li>
                            <li><Link href="/guides">City Guides</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Property Types */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerTitle}>Property Types</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/listings">Apartments</Link></li>
                            <li><Link href="/listings">Villas</Link></li>
                            <li><Link href="/listings">Townhouses</Link></li>
                            <li><Link href="/listings">Penthouses</Link></li>
                            <li><Link href="/listings">Commercial</Link></li>
                            <li><Link href="/listings">Plots</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerTitle}>Get in Touch</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <MapPin size={16} />
                                <span>42, Brigade Road, Bangalore,<br />Karnataka 560025</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li>
                                <Mail size={16} />
                                <span>hello@havenrealty.in</span>
                            </li>
                        </ul>
                        <Link href="/contact" className={`btn btn-sm btn-accent ${styles.footerCTA}`}>
                            Send Inquiry <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.bottomLeft}>
                        <p>&copy; {new Date().getFullYear()} Haven Realty. All rights reserved.</p>
                        <div className={styles.legal}>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/terms">Terms of Service</Link>
                        </div>
                    </div>
                    <div className={styles.rera}>
                        <span>RERA Reg. No: PRM/KA/RERA/1251/446/AG/220521/003108</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
