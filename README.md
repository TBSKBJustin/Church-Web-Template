# Church Website Template

A modern, minimal church website built with React, featuring hero imagery, elegant typography, smooth animations, and scroll-based reveals.

## ✨ Features

- **Modern Design**: Clean, minimal layout with strong visual hierarchy
- **Smooth Animations**: CSS transitions with Intersection Observer API for scroll reveals
- **Responsive**: Mobile-first design that looks great on all devices
- **Multiple Pages**: Home, About, I'm New Here, and Leadership pages
- **Reusable Components**: Hero, Section, FAQ, and more
- **Easy Customization**: Simple to modify colors, fonts, and content

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📁 Project Structure

```
/src
  /components      # Reusable React components
    - Hero.jsx     # Hero section with background image
    - Section.jsx  # Content section with scroll reveal
    - FAQ.jsx      # Accordion FAQ component
    - Navbar.jsx   # Navigation bar
    - Footer.jsx   # Footer component
    - Layout.jsx   # Page layout wrapper
  
  /pages          # Page components
    - Home.jsx
    - About.jsx
    - ImNewHere.jsx
    - Leadership.jsx
  
  - App.jsx       # Main app with routing
  - main.jsx      # Entry point
  - index.css     # Global styles
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #2f80ed;   /* Brand color */
  --color-dark: #1f2d3d;      /* Dark sections */
  --color-light: #ffffff;     /* Background */
  --color-text: #333333;      /* Text color */
}
```

### Fonts

The project uses Google Fonts (Inter & Playfair Display). To change fonts, update the link in `index.html` and the CSS in `src/index.css`.

### Content

Edit the content directly in the page components:
- `src/pages/Home.jsx` - Homepage content
- `src/pages/About.jsx` - About page content
- `src/pages/ImNewHere.jsx` - New visitor information
- `src/pages/Leadership.jsx` - Leadership team

### Hero Image

To add a hero background image:
1. Place your image in the `public` folder (e.g., `public/hero.jpg`)
2. The Hero component will automatically use it

Or use a gradient background by default (already configured).

## 🧩 Components

### Hero Component

```jsx
<Hero 
  title="Your Title"
  backgroundImage="/hero.jpg"
  primaryButtonText="Button 1"
  primaryButtonLink="/link"
  secondaryButtonText="Button 2"
  secondaryButtonLink="/link"
/>
```

### Section Component

```jsx
<Section title="Section Title" dark gray>
  <p>Your content here</p>
</Section>
```

Props:
- `title`: Section heading
- `dark`: Dark background
- `gray`: Gray background
- `children`: Section content

### FAQ Component

```jsx
<FAQ items={[
  { question: "Question?", answer: "Answer" }
]} />
```

## 📱 Responsive Design

The site is fully responsive with breakpoints at 768px. Mobile styles include:
- Adjusted font sizes
- Stacked layouts
- Simplified navigation
- Optimized spacing

## 🔧 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 🎯 Design Philosophy

This template emphasizes:
- **Message over decoration**: Clean design that highlights content
- **Space as a design element**: Generous whitespace for clarity
- **Gentle motion**: Subtle animations that enhance without distracting
- **Warmth and trust**: Design that feels welcoming and authentic

Perfect for churches, nonprofits, and community organizations.

## � Deployment

This project is configured for automatic deployment to GitHub Pages.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

**Quick Start:**
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings (choose "GitHub Actions" as source)
3. Your site will auto-deploy on every push to `main`

Your site will be available at: `https://YOUR_USERNAME.github.io/Church-Web-Template/`

## �📄 License

Free to use for any purpose. Customize as needed for your church or organization.
