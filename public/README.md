# Public Assets

Place your images and static files in this directory.

## Adding Your Profile Photo

1. **Add your photo here:**
   - Rename your photo to `avatar.jpg` (or `avatar.png`)
   - Place it directly in this `public/` folder

2. **File recommendations:**
   - Format: JPG or PNG
   - Aspect ratio: 1:1 (square)
   - Recommended size: 512x512px or larger
   - File size: < 500KB for best performance

3. **The photo is already configured** in:
   - Header (small version): `/src/components/Header.tsx`
   - Hero section (large version): `/src/app/page.tsx`
   - Both use `/avatar.jpg` path

## How It Works

Files in the `public/` folder are served from the root URL:
- `public/avatar.jpg` → accessible at `/avatar.jpg`
- Works locally and when deployed to Vercel
- No import needed, just use `/filename.ext` in your code

## Example Structure

```
public/
  ├── avatar.jpg          # Your profile photo
  ├── favicon.ico         # Browser tab icon (optional)
  └── resume.pdf          # Downloadable resume (optional)
```
