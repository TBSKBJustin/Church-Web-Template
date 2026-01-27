# 🕊 Church Website Template

### Minimal Hero-Based Church Website with Scroll Reveal

This project is a modern, minimal church website template inspired by contemporary North American church design. It focuses on **large hero imagery, elegant typography, strong spacing, and subtle scroll animations**.

The goal is to create a site that feels **welcoming, calm, and trustworthy**, without heavy visual clutter.

---

## 🚀 Project Goals

* Clean and minimal layout
* Strong visual hierarchy
* Reusable content sections
* Smooth scroll-based reveal animations
* Easy to customize for different churches

---

## 🧱 Tech Stack

This project is intentionally lightweight.

| Layer        | Technology                              |
| ------------ | --------------------------------------- |
| Structure    | HTML5                                   |
| Styling      | CSS3 (Flexbox / Grid)                   |
| Interactions | Vanilla JavaScript                      |
| Animations   | CSS Transitions + Intersection Observer |

No framework is required, but this structure can easily be ported to **React / Next.js / Vue**.

---

## 📁 Project Structure

```
/project-root
│
├── index.html
├── about.html
├── im-new-here.html
├── leadership.html
│
├── /css
│   └── styles.css
│
├── /js
│   └── scroll-reveal.js
│
└── /assets
    ├── /images
    └── /icons
```

---

## 🎨 Design System

### Colors

```css
--color-primary: #2f80ed;   /* Brand blue */
--color-dark: #1f2d3d;      /* Dark overlay / sections */
--color-light: #ffffff;     /* Background */
--color-text: #333333;      /* Body text */
```

---

### Typography

| Usage     | Style                               |
| --------- | ----------------------------------- |
| Headings  | Serif font (e.g., Playfair Display) |
| Body Text | Sans-serif (e.g., Open Sans, Inter) |

Example:

```css
body {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
```

---

## 🖼 Hero Section Component

### HTML

```html
<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Glorifying God as a community of disciples</h1>
    <div class="hero-buttons">
      <a href="#" class="btn primary">I'm New Here</a>
      <a href="#" class="btn secondary">Learn More</a>
    </div>
  </div>
</section>
```

### CSS

```css
.hero {
  position: relative;
  height: 100vh;
  background: url('../assets/images/hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.hero-content {
  position: relative;
  max-width: 900px;
}
```

---

## 📦 Content Section Pattern

Reusable layout for most blocks.

```html
<section class="section reveal">
  <div class="container">
    <h2>When?</h2>
    <p>Worship Gatherings | Sundays at 9AM</p>
  </div>
</section>
```

```css
.section {
  padding: 140px 20px;
  text-align: center;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}
```

---

## ✨ Scroll Reveal Animation

### 1️⃣ Base State

```css
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

---

### 2️⃣ JavaScript (`scroll-reveal.js`)

```js
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
```

This makes sections fade in smoothly when scrolling.

---

## 🔘 Buttons

```css
.btn {
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
}

.btn.primary {
  background: var(--color-primary);
  color: white;
}

.btn.secondary {
  border: 2px solid white;
  color: white;
}
```

---

## ❓ FAQ Accordion (Optional Component)

```html
<div class="faq-item">
  <button class="faq-question">What should I wear?</button>
  <div class="faq-answer">Casual is completely fine.</div>
</div>
```

JS can toggle height or `display`.

---

## 📱 Responsive Behavior

```css
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .section {
    padding: 80px 20px;
  }
}
```

---

## 🧩 Converting to React (Optional)

Each section becomes a component:

```
<Layout>
  <Hero />
  <Section title="When?" />
  <Section title="Where?" />
  <FAQ />
</Layout>
```

Scroll reveal can be wrapped into a reusable `FadeInSection` component.

---

## 🕊 Philosophy Behind This Template

This template is designed to:

* Emphasize **message over decoration**
* Use **space as a design element**
* Guide users through content using **gentle motion**
* Create a sense of **warmth and clarity**

Perfect for churches, nonprofits, and community organizations.
