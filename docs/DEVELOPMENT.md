# Development Guide

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Optional: Live server for development

### Installation

1. Clone or download the project
2. Open project folder in your editor
3. Open `index.html` in your browser or use live server

### Using Live Server (Recommended)

Install live-server globally:
```bash
npm install -g live-server
```

Run development server:
```bash
npm run dev
```

### Project Structure

```
lexagear-landing/
├── index.html              # Entry point - keep in root
├── assets/                 # Organized assets
│   ├── css/styles.css     # Main stylesheet
│   ├── js/script.js       # Main JavaScript
│   ├── images/            # Images (to be added)
│   └── icons/             # Icons (to be added)
├── docs/                  # Documentation
├── package.json           # Project config
├── README.md              # Main documentation
└── .gitignore             # Git ignore rules
```

## Development Workflow

1. **HTML**: Main content in `index.html`
2. **CSS**: Styles in `assets/css/styles.css`
3. **JavaScript**: Logic in `assets/js/script.js`
4. **Images**: Add to `assets/images/`
5. **Icons**: Add to `assets/icons/`

## Best Practices

### File Organization
- Keep `index.html` in root as required
- Organize assets in dedicated folders
- Use descriptive file names
- Maintain consistent naming conventions

### Code Quality
- Use semantic HTML
- Follow BEM-like CSS methodology
- Write clean, commented JavaScript
- Optimize images for web

### Performance
- Minimize HTTP requests
- Optimize images
- Use efficient CSS selectors
- Avoid inline styles and scripts

## Testing

### Manual Testing
- Test on different screen sizes
- Verify all interactive elements
- Check form validation
- Test navigation and smooth scrolling

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mobile Testing
- iOS Safari
- Android Chrome
- Various screen sizes

## Deployment

### Simple Deployment
- Upload all files to web server
- Ensure `index.html` is in root directory
- Check that assets paths are correct

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source

## Common Issues

### Images Not Loading
- Check file paths in HTML
- Ensure images are in `assets/images/`
- Verify image file extensions

### Styles Not Applied
- Check CSS file path in HTML
- Ensure CSS file is in `assets/css/`
- Check browser console for errors

### JavaScript Not Working
- Check JS file path in HTML
- Ensure script is in `assets/js/`
- Check browser console for errors

## Adding New Features

### New Product
1. Add product object to `products` array in `script.js`
2. Include image in `assets/images/`
3. Test filter functionality

### New Section
1. Add HTML structure to `index.html`
2. Add styles to `assets/css/styles.css`
3. Add JavaScript logic if needed

### Styling Changes
1. Modify `assets/css/styles.css`
2. Follow existing CSS structure
3. Test responsive design
