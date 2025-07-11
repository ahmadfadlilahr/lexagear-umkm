# Image Optimization Guide

## Current Image Assets Needed

### Hero Section
- `hero-banner.jpg` - Main hero image (1200x600px)

### Product Images
- `lexaphone-pro-max.jpg` - Smartphone flagship (400x300px)
- `lexabook-ultra.jpg` - Gaming laptop (400x300px)  
- `lexapods-elite.jpg` - Wireless earbuds (400x300px)
- `lexaphone-lite.jpg` - Budget smartphone (400x300px)
- `lexabook-air.jpg` - Ultrabook laptop (400x300px)
- `lexawatch-pro.jpg` - Premium smartwatch (400x300px)

### Fallback
- `placeholder.jpg` - Default image for errors (400x300px)

## Image Optimization Tips

1. **Format Selection**:
   - Use WebP for modern browsers with JPEG fallback
   - PNG for images with transparency
   - SVG for icons and simple graphics

2. **Compression**:
   - Target 80-90% quality for JPEG
   - Use tools like TinyPNG or ImageOptim
   - Aim for <150KB per product image

3. **Responsive Images**:
   - Provide multiple sizes (400w, 800w, 1200w)
   - Use `srcset` attribute for responsive images
   - Implement lazy loading for better performance

## Implementation Example

```html
<img 
  src="assets/images/products/lexaphone-pro-max.jpg" 
  srcset="assets/images/products/lexaphone-pro-max-400.jpg 400w,
          assets/images/products/lexaphone-pro-max-800.jpg 800w"
  sizes="(max-width: 768px) 100vw, 400px"
  alt="LexaPhone Pro Max - Smartphone flagship"
  loading="lazy"
>
```
