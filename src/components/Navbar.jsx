'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Phone, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Check initial scroll position
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Force solid navbar on pages without a dark hero section
    const isLightPage = (pathname.startsWith('/listings/') && pathname !== '/listings') ||
        pathname === '/privacy-policy' ||
        pathname === '/terms';

    const navbarClass = `${styles.navbar} ${scrolled || isLightPage ? styles.scrolled : ''}`;

    return (
        <nav className={navbarClass}>
            <div className={`container ${styles.navInner}`}>
                <Link href="/" className={styles.logo}>
                    <Home size={24} />
                    <span>Haven<span className={styles.logoAccent}>Realty</span></span>
                </Link>

                <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li className={styles.dropdown}>
                        <span className={styles.dropdownTrigger}>
                            Properties <ChevronDown size={14} />
                        </span>
                        <ul className={styles.dropdownMenu}>
                            <li><Link href="/listings" onClick={() => setIsOpen(false)}>All Listings</Link></li>
                            <li><Link href="/sell" onClick={() => setIsOpen(false)}>Sell Your Property</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/mortgage-calculator" onClick={() => setIsOpen(false)}>Mortgage Calculator</Link></li>
                    <li><Link href="/guides" onClick={() => setIsOpen(false)}>City Guides</Link></li>
                    <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/testimonials" onClick={() => setIsOpen(false)}>Reviews</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>

                <div className={styles.navActions}>
                    <Link href="/dashboard" className="btn btn-sm btn-outline">Dashboard</Link>
                    <Link href="tel:+919876543210" className={styles.phoneLink}>
                        <Phone size={16} />
                        <span>+91 98765 43210</span>
                    </Link>
                </div>

                <button
                    className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
}
