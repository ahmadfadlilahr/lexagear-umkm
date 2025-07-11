# JavaScript Documentation

## Struktur JavaScript

File `script.js` menggunakan vanilla JavaScript dengan modular approach:

### 1. Data Management
- `products` array: Data produk dengan kategori dan spesifikasi
- Dynamic product rendering

### 2. DOM Manipulation
- Product grid rendering
- Filter functionality
- Modal system

### 3. Event Handling
- Form validation
- Navigation interactions
- Modal controls
- Smooth scrolling

### 4. Utility Functions
- Email validation
- Error handling
- Smooth scroll implementation

## Key Features

### Product Filtering
```javascript
filterProducts(category) // Filter produk berdasarkan kategori
```

### Modal System
```javascript
openModal(productId) // Buka modal detail produk
closeModalFunction() // Tutup modal
```

### Form Validation
```javascript
handleFormSubmit(e) // Validasi dan submit form
isValidEmail(email) // Validasi format email
```

## Event Listeners

- DOMContentLoaded: Inisialisasi aplikasi
- Click events: Button interactions
- Form submit: Contact form handling
- Scroll events: Sticky header
- Keyboard events: ESC untuk close modal

## Performance Considerations

- Event delegation untuk dynamic content
- Debounced scroll events
- Minimal DOM queries
- Efficient event cleanup
