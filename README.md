# Intelliodev Website

A modern, responsive website for Intelliodev built with Next.js and Tailwind CSS, showcasing AI-powered full stack solutions for modern businesses.

## Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: FAQ accordions, hover effects, and smooth transitions
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## Tech Stack

- **Framework**: Next.js 14.2.5
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Google Fonts (Space Grotesk, Noto Sans)

## Sections

1. **Header**: Navigation with logo and CTA buttons
2. **Hero**: Eye-catching hero section with gradient text and background
3. **Services**: Grid layout showcasing AI automation, web development, custom software, and full-stack integration
4. **Portfolio**: Project showcase with hover effects
5. **Testimonials**: Client reviews with star ratings
6. **Partners**: Trusted partner logos with grayscale hover effects
7. **FAQ**: Expandable accordion-style frequently asked questions
8. **Newsletter**: Email subscription form
9. **Contact**: Contact form with validation
10. **Footer**: Links, social media icons, and copyright

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd intelliodev-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Services.tsx
    ├── Portfolio.tsx
    ├── Testimonials.tsx
    ├── Partners.tsx
    ├── FAQ.tsx
    ├── Newsletter.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Customization

### Colors
The primary color scheme uses indigo (#6366F1) with a dark background (#0D0D1A). You can customize colors in:
- `tailwind.config.js` - Update the color palette
- `src/app/globals.css` - CSS custom properties

### Content
Update the content in each component file:
- Services: `src/components/Services.tsx`
- Portfolio projects: `src/components/Portfolio.tsx`
- Testimonials: `src/components/Testimonials.tsx`
- FAQ questions: `src/components/FAQ.tsx`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- Uses TypeScript for type safety
- ESLint for code linting
- Tailwind CSS for styling
- Responsive design with mobile-first approach

## License

© 2024 Intelliodev. All rights reserved.