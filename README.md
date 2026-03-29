# DevPortfolio // Dark Theme Edition 🖤💚

> A high-performance, minimalist personal portfolio built with React & Vite.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.x-61DAFB.svg?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF.svg?logo=vite)

A sleek, responsive, and highly animated personal portfolio designed to showcase projects, skills, and experience. Originally migrating from a static HTML template to a component-driven React architecture, this iteration features a refined "Dark Minimalist" aesthetic inspired by premium web design trends.

---

## ✨ Key Features

- **Premium Dark Aesthetics:** Deep black background layered with a subtle dotted grid pattern and striking teal-green (`#00f2fe` to `#4facfe`) accents.
- **Micro-interactions & Animations:** Custom, high-performance scroll-triggered animations utilizing intersection observers for a smooth, app-like feel (`useFadeUp` custom hook).
- **Typography Driven:** Bold headings using **Inter** paired with **Caveat** for elegant, handwritten touches.
- **Componentized Sandbox:** Modular architecture abstracting sections (Hero, About, Portfolio, Pricing, Contact) into reusable React components.
- **Liquid Smooth Performance:** Built on Vite for lightning-fast HMR and optimized production bundling.

## 🛠 Tech Stack

- **Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS (CSS Modules/Variables for scoped, scalable design tokens)
- **Linting:** ESLint (Flat Config) + React Refresh

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and your preferred package manager (npm, yarn, or pnpm) installed.

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/portfolio-react.git
   cd portfolio-react
   ```

2. **Install NPM packages**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 🏗 Architecture & Project Structure

The codebase is organized following a feature-first component methodology:

```text
src/
├── assets/         # Static assets (images, global icons)
├── components/     # Reusable UI blocks (About, Portfolio, Pricing, etc.)
│   ├── Component.jsx
│   └── Component.css
├── hooks/          # Custom React hooks (e.g., useFadeUp.js)
├── index.css       # Global design tokens, CSS variables, and resets
├── App.jsx         # Root layout and section composition
└── main.jsx        # React application entry point
```

### Design Tokens (`index.css`)

The project utilizes CSS variables for centralized theme management. To tweak the aesthetic, modify the roots in `index.css`:

```css
:root {
  --bg-color: #050505;          /* Deep Black */
  --accent-color: #00f2fe;      /* Teal Green */
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --font-primary: 'Inter', sans-serif;
  --font-accent: 'Caveat', cursive;
}
```

## 🤝 Contributing

While this is a personal portfolio, suggestions for improving the architecture or animations are always welcome. Feel free to fork the repo, create a feature branch, and open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Architected with ❤️ using React & Vite.*
