# Modern Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and shadcn/ui components. Features dynamic content, smooth animations, and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, professional interface with shadcn/ui components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dynamic Content**: Real-time updates and dynamic information display
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Blog System**: Full-featured blog with search and filtering capabilities
- **Dark Mode Ready**: Built with shadcn/ui's theming system
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Heroicons
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AbhinawRatan/modern-portfolio
cd modern-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Design System

The website uses shadcn/ui components for consistent styling:

### Components Used
- **Button**: Various button variants for actions
- **Card**: Content containers with consistent styling
- **Badge**: Status indicators and tags
- **Navigation**: Modern navigation with mobile support

### Color Scheme
- Primary: Purple (#8B5CF6)
- Secondary: Gray tones for backgrounds
- Accent: Green for status indicators
- Text: Optimized contrast for readability

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px and above

## 🎯 Key Sections

### Home Page
- Hero section with dynamic typing animation
- Latest activity feed
- Skills showcase with animated progress bars
- Featured projects grid
- Call-to-action section

### Blog System
- Blog listing with search and filtering
- Featured posts section
- Individual blog post pages
- Categories and tags
- Reading time estimates

### Projects
- Project showcases with live links
- Technology stack indicators
- Detailed project descriptions
- Interactive hover effects

## 🔧 Development

### Project Structure
```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── Pages/
│   ├── Home/
│   ├── Blogs/
│   └── contact/
├── assets/           # Images and static files
├── lib/             # Utility functions
└── data.js          # Site data and content
```

### Key Features Implemented

1. **Dynamic Content Loading**
   - Real-time activity updates
   - Dynamic project information
   - Latest blog posts integration

2. **Advanced Animations**
   - Scroll-triggered animations
   - Hover effects and micro-interactions
   - Smooth page transitions

3. **Modern UI Components**
   - Consistent design system
   - Accessible components
   - Mobile-first approach

4. **Performance Optimization**
   - Lazy loading for images
   - Optimized bundle size
   - Fast build times with Vite

## 📝 Content Management

Website content is managed through:
- `src/data.js` - Main data file with projects, skills, and social links
- Blog posts as individual React components
- Asset management through the `assets` folder

## 🌐 Deployment

The website is optimized for deployment on:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## 🔧 Customization

### Adding New Projects
1. Update `portfolioData` in `src/data.js`
2. Add project thumbnail to `src/assets/`
3. Include project details and links

### Adding New Blog Posts
1. Create a new component in `src/Pages/Blogs/`
2. Update the blog list in `src/Pages/Blogs/blog-list.jsx`
3. Add the route in `src/App.jsx`

### Styling Customization
- Modify `tailwind.config.cjs` for theme changes
- Update CSS variables in `src/index.css`
- Customize shadcn/ui components as needed

## 🎨 Recent Updates

### 2025 Revamp
- **Updated Design**: Modern, clean interface with shadcn/ui
- **New Blog Posts**: Added articles on AI agents and modern web development
- **Enhanced Animations**: Framer Motion integration for smooth interactions
- **Improved Performance**: Optimized loading and bundle size
- **Better Mobile Experience**: Enhanced responsive design
- **Dynamic Content**: Real-time updates and activity feeds

### New Features
- Search and filter functionality for blog posts
- Animated skill progress bars
- Dynamic typing animations
- Smooth scroll-to-top functionality
- Enhanced project showcases

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized for fast loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- **Email**: abhinawratan@example.com
- **LinkedIn**: [Abhinaw Ratan](https://www.linkedin.com/in/abhinaw-ratan-76183a144/)
- **GitHub**: [AbhinawRatan](https://github.com/AbhinawRatan)
- **Twitter**: [@ratanabhinaww](https://x.com/ratanabhinaww)

## 🙏 Acknowledgments

- shadcn/ui for the amazing component library
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- React and Vite for the development framework

---

Built with ❤️ by [Abhinaw Ratan](https://github.com/AbhinawRatan)