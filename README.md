# Tiger Club - Premium Bar & Dance Club Website

A premium, high-end website for Tiger Club - Dubai's most exclusive bar and dance club. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Premium Design**: Luxury, bold, cinematic, and immersive design
- **Fully Responsive**: Mobile-first design that works on all devices
- **Color Scheme**: Custom color palette based on #dc2b27 (premium red)
- **Take the Tiger Challenge**: Interactive card design inspired by Rodeo Drive
- **DJ & Sound Section**: Dedicated section showcasing premium audio experience
- **Smooth Animations**: Scroll-based animations and interactive motion design
- **Horizontal Scrolling Gallery**: Continuous right-to-left motion gallery
- **Premium Typography**: Playfair Display for headings, Inter for body text

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
tiger-club/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── Hero.tsx           # Hero section with video
│   ├── RodeoChallenge.tsx # Take the Tiger Challenge card
│   ├── DJSection.tsx      # DJ & Sound section
│   ├── Menu.tsx           # Menu section
│   ├── Gallery.tsx        # Gallery with horizontal scroll
│   ├── Events.tsx         # Upcoming events
│   └── Footer.tsx         # Footer component
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Sections

1. **Hero**: Full-screen video background with animated text
2. **Take the Tiger Challenge**: Interactive card with premium experience details
3. **DJ & Sound**: Premium audio system and DJ features
4. **Menu**: Crafted cocktails and premium spirits
5. **Gallery**: Horizontal scrolling gallery + grid layout
6. **Events**: Upcoming events and special performances
7. **Footer**: Contact information and social links

## 🎨 Color Palette

- **Primary**: #dc2b27 (Premium Red)
- **Primary Dark**: #b01f1c
- **Primary Light**: #ff3d38
- **Secondary**: #FFD700 (Gold)
- **Accent**: #8B00FF (Purple)
- **Dark Background**: #0A0A0A
- **Card Background**: #151515

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Colors

Edit `tailwind.config.js` and `app/globals.css` to change the color scheme.

### Replace Images/Videos

Update image sources in:
- `components/Hero.tsx` - Hero video
- `components/Gallery.tsx` - Gallery images
- `components/DJSection.tsx` - DJ booth image

### Update Content

Edit component files in `components/` directory to update text, menu items, events, etc.

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- Replace dummy images with your final assets
- Update video source in Hero component
- Modify menu items, events, and contact information
- Add your branding and logo

## 🎉 Features Highlights

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Interactive components
- ✅ Premium UI/UX design
- ✅ Performance optimized

---

Built with ❤️ for Tiger Club - Dubai's Premium Nightlife Experience
