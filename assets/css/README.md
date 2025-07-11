# CSS Documentation

## Struktur CSS

File `styles.css` menggunakan pendekatan modular dengan section-based organization:

### 1. Reset & Base Styles
- CSS reset untuk konsistensi cross-browser
- Base typography dan color variables

### 2. Layout Components
- Header & Navigation
- Hero Section
- Product Grid
- Modal System

### 3. Utility Classes
- Responsive utilities
- Animation classes
- State classes (active, hidden, etc.)

### 4. Media Queries
- Mobile-first responsive design
- Breakpoints: 768px, 1024px

## CSS Methodology

Menggunakan kombinasi:
- **BEM-like naming**: `.product-card`, `.nav-menu`
- **Utility-first**: untuk spacing dan layout
- **Component-based**: setiap section memiliki styles terpisah

## Color Variables

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #1abc9c;
  --background-color: #f8f9fa;
  --text-color: #2c3e50;
}
```

## Performance Optimizations

- Minimal use of expensive properties
- Efficient selectors
- Optimized animations
- Reduced paint and layout thrashing
