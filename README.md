# 🏡 Haven Realty — Find Your Dream Home

![Haven Realty Preview](public/images/hero-villa.png)

A comprehensive, state-of-the-art real estate portfolio and catalog website built with modern web technologies. Haven Realty provides a premium property search experience featuring a clean, responsive UI and advanced features like mortgage calculation and property valuation.

## 🌟 Key Features

### 🏢 Core Pages
- **Homepage:** Stunning hero section, featured listings, client testimonials, and key statistics.
- **Property Listings:** Advanced filtering (by type, location, price range), sorting options, and a grid/list toggle view for all active properties.
- **Property Details:** Immersive image galleries, detailed specifications (BHK, sq.ft, etc.), area amenities, Google Maps embeddings, and a sticky inquiry form.
- **Dashboard:** Manage saved properties, track inquiry statuses, and update user profiles.

### 🛠️ Interactive Tools
- **Mortgage Calculator:** Real-time EMI calculation with dynamic principal/interest breakdown charts and sliders for loan amount, tenure, and interest rate.
- **Sell/List Property:** An easy-to-use property valuation request system with a 3-step submission process.

### 🤝 Trust & Resources
- **City Guides:** In-depth neighborhood analysis featuring market trends, local "vibes", hotspots, and lifestyle insights.
- **About Us & Testimonials:** Company history, leadership team profiles, and verifiable client success stories.
- **Support & Legal:** Contact tools (forms, office maps), Privacy Policy, Terms of Service, and RERA compliance information.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript (React)
- **Styling:** CSS Modules with a custom, high-performance CSS Variable design system.
- **Icons:** Lucide React
- **Animations:** Custom CSS Keyframes & Intersection Observer API (`ScrollReveal` components).
- **Deployment:** Vercel (or any Node.js hosting)

## 🎨 Design & Aesthetics

The UI/UX focuses on a **Bright and Calm** aesthetic to convey trust and luxury:
- **Color Palette:** Warm whites, soft golds (`#C8973E`), muted greens (`#2C5530`), and elegant navy.
- **Typography:** *Playfair Display* for striking headings and *Inter* for highly readable body text.
- **Micro-interactions:** Smooth hover lifts, card shading transformations, and scroll-triggered content reveals.

## 💻 Getting Started

Follow these steps to run the application locally:

### Prerequisites
Make sure you have Node.js (v18 or higher) and npm installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhijit1018/Haven-Realty.git
   cd Haven-Realty
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
src/
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components (Navbar, Footer, Cards)
├── data/                 # Mock data for properties, testimonials, and guides
└── globals.css           # Global design system variables and utilities
public/
└── images/               # High-res placeholder images and assets
```

## 📜 License & Compliance

This project is for demonstration purposes. Haven Realty operates in compliance with RERA guidelines (Demo Reg No: PRM/KA/RERA/1251/446/AG/220521/003108).
