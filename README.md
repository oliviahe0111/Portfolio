# Portfolio Website

A clean, minimal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design
- 🌗 Dark/light mode support (system preference)
- ⚡ Next.js 14 App Router
- 🎨 Tailwind CSS for styling
- 📱 Mobile-friendly navigation
- 🔤 Inter font from Google Fonts

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

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

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with header
│   ├── page.tsx        # Home page with all sections
│   └── globals.css     # Global styles
└── components/
    ├── Header.tsx      # Navigation header
    ├── Section.tsx     # Reusable section wrapper
    └── Avatar.tsx      # Avatar component
```

## Customization

### Update Content

Edit `src/app/page.tsx` to replace:
- Name, title, and location
- About section text
- Experience entries
- Education details
- Skills list

### Update Avatar Images

Replace the avatar image URLs in:
- `src/components/Header.tsx` (small avatar in header)
- `src/app/page.tsx` (large avatar in hero section)

### Color Theme

Modify colors in `tailwind.config.ts`:
- `primary`: Main accent color
- `background-light`: Light mode background
- `background-dark`: Dark mode background

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

The project is pre-configured for Vercel deployment.

### Other Platforms

Build the project:

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## License

MIT
