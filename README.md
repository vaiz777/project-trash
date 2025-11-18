# Login Page - React + Tailwind CSS

A beautiful dark-themed login page built with React and Tailwind CSS, based on Figma design.

## Features

- 🎨 Dark theme UI design
- 📱 Fully responsive
- 🎭 Smooth animations and transitions
- 🔐 Form validation
- 🌈 Custom color scheme with teal accents
- ✨ Remember me functionality
- 🔗 Forgot password link
- 💎 Minimalist and clean interface

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/workspace/
├── src/
│   ├── components/
│   │   └── LoginPage.jsx    # Main login component
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind CSS imports
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## Technologies Used

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Customization

You can customize the login page by modifying:

- Colors: Edit the gradient classes in `LoginPage.jsx`
- Form fields: Add or remove fields in the form section
- Social providers: Add more social login buttons
- Branding: Replace the lock icon with your logo

## License

MIT
