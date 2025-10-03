# Nirvahana Utsav - Event Management Website

A modern, SEO-optimized website for Nirvahana Utsav event management company built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- **Modern Design**: Clean, elegant design with traditional Indian touch
- **SEO Optimized**: Complete SEO setup with meta tags, structured data, and sitemap
- **Responsive**: Mobile-first responsive design
- **Performance**: Optimized images and fast loading
- **Animations**: Smooth animations with Framer Motion
- **Dynamic Content**: Dynamic routing for events and services
- **Contact Form**: Working contact form with email notifications
- **Gallery**: Masonry layout with lightbox functionality
- **Google Maps**: Integrated location map
- **Email Backend**: Automated email responses and notifications
- **Content Management**: Easy-to-update data structure

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **SEO**: next-seo package
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## Brand Colors

- **Royal Blue**: #1E3A8A
- **Gold**: #D4AF37
- **White**: #FFFFFF

## Typography

- **Headlines**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

## Project Structure

```
├── app/
│   ├── about/
│   ├── contact/
│   ├── events/
│   ├── gallery/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── AboutSection.tsx
│   ├── CallToAction.tsx
│   ├── EventCard.tsx
│   ├── FeaturedEvents.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ServicesSection.tsx
│   └── TestimonialCarousel.tsx
├── data/
│   └── events.ts
├── lib/
│   └── seo.ts
└── public/
    └── robots.txt
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Pages

### Completed Pages
- ✅ Homepage with hero, about, services, featured events, testimonials, CTA
- ✅ About page with company story, philosophy, timeline
- ✅ Services page with all service categories
- ✅ Individual service detail pages with pricing and process
- ✅ Events listing page with category filtering
- ✅ Individual event detail pages with galleries
- ✅ Gallery page with masonry layout and lightbox
- ✅ Contact page with working form and Google Maps

### Completed Features
- ✅ Individual service detail pages (`/services/[slug]`)
- ✅ Events listing page (`/events`)
- ✅ Individual event detail pages (`/events/[slug]`)
- ✅ Gallery page with image lightbox
- ✅ Google Maps integration
- ✅ Contact form with email backend
- ✅ Dynamic routing and SEO optimization

### Optional Additions
- 🔄 Privacy Policy and Terms pages
- 🔄 Admin dashboard for content management
- 🔄 Blog/News section
- 🔄 Online booking system

## SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Sitemap generation
- Robots.txt
- Image alt tags
- Semantic HTML structure

## Customization

### Adding New Events

Edit `data/events.ts` to add new events:

```typescript
{
  id: 'unique-id',
  title: 'Event Title',
  description: 'Event description',
  image: 'image-url',
  date: 'Event date',
  location: 'Event location',
  slug: 'url-slug',
  category: 'Event category'
}
```

### Modifying Colors

Update `tailwind.config.js` to change brand colors:

```javascript
colors: {
  'royal-blue': '#1E3A8A',
  'gold': '#D4AF37',
  'white': '#FFFFFF',
}
```

### Adding New Services

Add new services in `app/services/page.tsx` and create corresponding detail pages.

## Deployment

The website is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean App Platform**

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://nirvahana-utsav.com

# Email Configuration (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
COMPANY_EMAIL=info@nirvahanautsav.com

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# Cloudinary (for image management)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

**Email Setup Instructions:**
1. Use Gmail SMTP or your preferred email service
2. For Gmail, enable 2-factor authentication and create an App Password
3. Use the App Password in `SMTP_PASS`, not your regular password

## Performance Optimizations

- Next.js Image component for optimized images
- Lazy loading for components
- Code splitting with dynamic imports
- Optimized fonts loading
- Compressed assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved by Nirvahana Utsav.

## Support

For technical support or questions about the website, please contact the development team.

---

**Nirvahana Utsav** - Crafting Memorable Celebrations