# Marcos Paulo Barbosa — Portfolio

Personal portfolio website implemented with Vue 3, Vite, and Tailwind CSS.
Clean design following KISS, SOLID, and DRY principles.

## How to run:

### Prerequisites:
- Node.js (version 16 or higher)
- npm or yarn

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/m6rc0sp/Portfolio.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

The project will run on `http://localhost:5173` (or another port if 5173 is occupied).

## Project Structure:

```
src/
├── main.ts                    # Application entry point
├── App.vue                    # Root component
├── composables/
│   └── useI18n.ts            # Internationalization composable
├── router/
│   └── index.ts              # Vue Router configuration
├── styles/
│   └── tailwind.css          # Tailwind CSS styles
├── assets/
│   └── icons/                # SVG icons (Gmail, Outlook)
├── components/
│   ├── Header.vue            # Site header with navigation
│   ├── Footer.vue            # Site footer
│   └── ui/
│       ├── Modal.vue         # Reusable modal component
│       └── TechBadge.vue     # Technology badge component
└── views/
    ├── Home.vue              # Home page with hero section
    ├── About.vue             # About page with experience
    ├── Projects.vue          # Projects showcase
    └── Resume.vue            # Resume/CV page
```

## Features:

- ✅ Minimalist and responsive design
- ✅ Clear and simple navigation
- ✅ Clean and well-structured code
- ✅ Zero unnecessary dependencies
- ✅ Optimized performance
- ✅ Internationalization (Portuguese/English)
- ✅ Contact modal with email integration
- Replace social media links with real ones
