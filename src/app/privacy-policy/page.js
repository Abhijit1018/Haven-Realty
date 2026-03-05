import styles from './page.module.css';

export const metadata = {
    title: 'Privacy Policy — Haven Realty',
    description: 'Haven Realty privacy policy regarding collection, use, and protection of personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <section className={styles.legalPage}>
            <div className="container">
                <h1>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last updated: March 1, 2025</p>

                <div className={styles.content}>
                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly, such as your name, email address, phone number, and property preferences when you fill out forms, create an account, or contact us.</p>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information to provide property recommendations, process inquiries, connect you with agents, send updates on properties you&apos;ve shown interest in, and improve our services.</p>

                    <h2>3. Information Sharing</h2>
                    <p>We do not sell your personal information. We may share your details with partnered property agents and developers solely for the purpose of facilitating property transactions you have initiated.</p>

                    <h2>4. Data Security</h2>
                    <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or destruction. All data transmissions are encrypted using SSL technology.</p>

                    <h2>5. Cookies</h2>
                    <p>We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.</p>

                    <h2>6. Your Rights</h2>
                    <p>You have the right to access, update, or delete your personal information at any time. To exercise these rights, contact us at privacy@havenrealty.in.</p>

                    <h2>7. Third-Party Services</h2>
                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>

                    <h2>8. Changes to This Policy</h2>
                    <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the updated policy on this page with a revised &quot;Last updated&quot; date.</p>

                    <h2>9. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy, please contact us at:<br />
                        Email: privacy@havenrealty.in<br />
                        Phone: +91 98765 43210<br />
                        Address: 42, Brigade Road, Bangalore, Karnataka 560025</p>
                </div>
            </div>
        </section>
    );
}
