# Portfolio Website - Kesa Veera Venkata Yaswanth

A modern, responsive portfolio website built with React and TypeScript showcasing my work in AI/ML, Full Stack Development, and Research.

## 🚀 Features

- **React + TypeScript**: Type-safe, component-based architecture
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Dark theme with gradient accents and smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Sections**:
  - Hero section with introduction
  - About section with skills and stats
  - Experience timeline
  - Featured projects
  - Research & publications
  - Contact information

## 🛠️ Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 (with CSS Grid and Flexbox)
- Font Awesome Icons

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment Options

### Vercel (Recommended for React)
1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Vite and deploy

### Netlify
1. Sign up at [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📝 Customization

### Update Content
- Edit component files in `src/components/` to update content
- Modify `src/App.css` for global styles
- Update individual component CSS files for specific styling

### Color Scheme
Colors are defined in CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #00d4ff;
  --secondary-color: #7c3aed;
  --bg-dark: #0a0a0f;
  --bg-card: #1a1a2e;
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

## 📧 Contact

- Email: yaswanthkesa@gmail.com
- GitHub: [@Yaswanthkesa](https://github.com/Yaswanthkesa)
- LinkedIn: [Kesa Veera Venkata Yaswanth](https://linkedin.com/in/kesa-veera-venkata-yaswanth-6ba447281)

---

Built with ❤️ using React + TypeScript
