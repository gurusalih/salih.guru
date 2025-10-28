# Salih.Guru - Portfolio Website

A modern, lightweight portfolio website for entrepreneurs, built with Astro and deployed on Cloudflare Workers.

## Features

- 🚀 **Blazing Fast** - Built with Astro for optimal performance
- 🌍 **Multi-language Support** - English and Turkish translations
- 🎨 **Modern & Futuristic Design** - Clean, professional UI with smooth animations
- 🌙 **Dark Mode Only** - Eco-friendly dark theme reduces carbon emissions and power consumption
- 📱 **Fully Responsive** - Works perfectly on all devices
- ☁️ **Edge-First** - Deployed on Cloudflare Workers for global performance
- 🔧 **Easy to Customize** - Simple data structure for products and content
- ♻️ **Sustainable** - Dark mode reduces energy consumption, especially on OLED screens

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── ProductCard.astro
│   │   ├── ProductSection.astro
│   │   └── SocialLinks.astro
│   ├── data/
│   │   ├── products.ts
│   │   └── social.ts
│   ├── i18n/
│   │   ├── ui.ts
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── tr/
│           └── index.astro
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── wrangler.toml
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit `http://localhost:4321`

## Customization

### Update Your Information

1. **Products**: Edit `src/data/products.ts` to add your software products
2. **Social Links**: Edit `src/data/social.ts` to update your social media profiles (GitHub, Twitter, LinkedIn, YouTube, Instagram, Medium, Email)
3. **About Section**: Edit translations in `src/i18n/ui.ts` to customize the About Me section
4. **Branding**: Update the logo in `src/layouts/Layout.astro`
5. **SEO**: Update meta tags in `src/layouts/Layout.astro` and add your Open Graph image (1200x630px) to `public/og-image.jpg`
6. **Site URL**: Update the site URL in `astro.config.mjs`

### Adding New Languages

1. Add the language code to `src/i18n/ui.ts`
2. Add translations for all keys
3. Create a new page directory in `src/pages/[lang]/`
4. Update the `astro.config.mjs` locales array

## Deployment to Cloudflare Workers (SSR)

The site is configured for **Server-Side Rendering (SSR)** on Cloudflare Workers using the official `@astrojs/cloudflare` adapter.

### Using Wrangler CLI (Recommended)

1. Install Wrangler globally (if not already installed):

```bash
npm install -g wrangler
```

2. Login to Cloudflare:

```bash
wrangler login
```

3. Build and deploy to Workers:

```bash
npm run build
npm run deploy
```

### Using Cloudflare Pages (Alternative)

1. Push your code to GitHub
2. Go to Cloudflare Dashboard → Workers & Pages
3. Create a new Pages project
4. Connect your repository
5. Set build configuration:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Framework preset: `Astro`
6. Deploy!

### Features

- ✅ Server-Side Rendering on Cloudflare's edge network
- ✅ Multi-language support (EN/TR)
- ✅ Ultra-fast global delivery
- ✅ SEO-optimized with dynamic meta tags
- ✅ Dark mode only for reduced carbon emissions

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Technologies Used

- [Astro](https://astro.build) - Modern static site generator
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform

## License

MIT License - feel free to use this template for your own portfolio!
