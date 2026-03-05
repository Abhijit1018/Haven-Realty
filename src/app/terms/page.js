import styles from '../privacy-policy/page.module.css';

export const metadata = {
    title: 'Terms of Service — Haven Realty',
    description: 'Haven Realty terms of service governing the use of our website and services.',
};

export default function TermsPage() {
    return (
        <section className={styles.legalPage}>
            <div className="container">
                <h1>Terms of Service</h1>
                <p className={styles.lastUpdated}>Last updated: March 1, 2025</p>

                <div className={styles.content}>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using the Haven Realty website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>

                    <h2>2. Services Description</h2>
                    <p>Haven Realty provides real estate listing, search, and consultation services. We act as an intermediary connecting buyers, sellers, and renters with property agents and developers.</p>

                    <h2>3. User Responsibilities</h2>
                    <p>You agree to provide accurate information when using our services, not to misuse the platform for any illegal purposes, and to respect the intellectual property rights of Haven Realty and its partners.</p>

                    <h2>4. Property Listings</h2>
                    <p>While we strive to ensure the accuracy of all property listings, Haven Realty does not guarantee the completeness or accuracy of information provided by third-party sellers and agents. Users are advised to conduct their own due diligence.</p>

                    <h2>5. Intellectual Property</h2>
                    <p>All content on this website, including text, images, logos, and design elements, is the property of Haven Realty and is protected by intellectual property laws. Unauthorized reproduction is prohibited.</p>

                    <h2>6. Limitation of Liability</h2>
                    <p>Haven Realty shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or reliance on information provided on our platform.</p>

                    <h2>7. RERA Compliance</h2>
                    <p>Haven Realty is registered under the Real Estate (Regulation and Development) Act, 2016. All listed projects are RERA-compliant where applicable. Our RERA registration number is: PRM/KA/RERA/1251/446/AG/220521/003108.</p>

                    <h2>8. Dispute Resolution</h2>
                    <p>Any disputes arising from these terms shall be governed by the laws of India, with the courts of Bangalore having exclusive jurisdiction.</p>

                    <h2>9. Modifications</h2>
                    <p>Haven Realty reserves the right to modify these terms at any time. Continued use of the platform after modifications constitutes acceptance of the updated terms.</p>

                    <h2>10. Contact</h2>
                    <p>For questions regarding these terms, contact us at:<br />
                        Email: legal@havenrealty.in<br />
                        Phone: +91 98765 43210</p>
                </div>
            </div>
        </section>
    );
}
