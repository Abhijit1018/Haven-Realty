import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Haven Realty — Find Your Dream Home',
  description: 'Haven Realty is a premium real estate company offering luxury properties across India. Browse apartments, villas, townhouses, and commercial spaces with expert guidance.',
  keywords: 'real estate, property, buy home, luxury apartments, villas, India, Bangalore, Mumbai',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
