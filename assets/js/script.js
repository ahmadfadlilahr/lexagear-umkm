// Product data with enhanced UMKM marketplace features
const products = [
  {
    id: 1,
    name: "LexaPhone Pro Max",
    category: "smartphone",
    price: 15999000,
    image: "assets/images/products/Handphone/pexels-pacific-32932370.jpg",
    imageAlt: "LexaPhone Pro Max - Smartphone flagship dengan kamera 108MP dan layar AMOLED 6.7 inci",
    description: "Smartphone flagship dengan performa terdepan dan kamera profesional.",
    fullDescription:
      "LexaPhone Pro Max hadir dengan teknologi terdepan yang menggabungkan performa tinggi, kamera profesional, dan desain premium. Dilengkapi dengan prosesor terbaru dan sistem operasi yang responsif untuk pengalaman pengguna yang luar biasa.",
    specs: {
      Prosesor: "Octa-core 3.2GHz",
      RAM: "12GB LPDDR5",
      Storage: "256GB UFS 3.1",
      Kamera: "108MP Triple Camera",
      Baterai: "5000mAh Fast Charging",
      Layar: '6.7" AMOLED 120Hz',
    },
    keywords: ["smartphone", "flagship", "kamera", "gaming", "premium"],
    vendorId: 1,
    vendorName: "LexaGear Official",
    isLocal: true,
    rating: 4.8,
    reviewCount: 234,
    stock: 50,
    sold: 1200
  },
  {
    id: 2,
    name: "LexaBook Ultra",
    category: "laptop",
    price: 25999000,
    image: "assets/images/products/Laptop/pexels-morningtrain-18105.jpg",
    imageAlt: "LexaBook Ultra - Laptop gaming profesional dengan RTX 4060 dan layar 4K OLED",
    description: "Laptop premium untuk profesional dengan performa tinggi dan desain elegan.",
    fullDescription:
      "LexaBook Ultra dirancang khusus untuk profesional yang membutuhkan performa tinggi dalam paket yang portabel. Dengan layar berkualitas tinggi dan keyboard yang nyaman, laptop ini sempurna untuk produktivitas maksimal.",
    specs: {
      Prosesor: "Intel Core i7-13700H",
      RAM: "16GB DDR5",
      Storage: "1TB NVMe SSD",
      GPU: "NVIDIA RTX 4060",
      Layar: '15.6" 4K OLED',
      Baterai: "Up to 12 hours",
    },
    keywords: ["laptop", "gaming", "profesional", "4k", "nvidia", "intel"],
    vendorId: 1,
    vendorName: "LexaGear Official",
    isLocal: true,
    rating: 4.7,
    reviewCount: 156,
    stock: 30,
    sold: 800
  },
  {
    id: 3,
    name: "LexaPods Elite",
    category: "aksesoris",
    price: 2999000,
    image: "assets/images/products/pexels-soulful-pizza-2080276-3780681.jpg",
    imageAlt: "LexaPods Elite - Earbuds wireless dengan Active Noise Cancellation dan charging case",
    description: "Earbuds wireless premium dengan noise cancellation dan audio berkualitas tinggi.",
    fullDescription:
      "LexaPods Elite menghadirkan pengalaman audio yang luar biasa dengan teknologi noise cancellation terdepan. Desain ergonomis dan kualitas suara yang jernih menjadikannya pilihan sempurna untuk musik dan panggilan.",
    specs: {
      Driver: "12mm Dynamic Driver",
      "Noise Cancellation": "Active ANC",
      Baterai: "8 jam + 24 jam case",
      Konektivitas: "Bluetooth 5.3",
      "Tahan Air": "IPX7",
      Charging: "USB-C & Wireless",
    },
    keywords: ["earbuds", "wireless", "anc", "audio", "musik"],
    vendorId: 2,
    vendorName: "Tekno Nusantara",
    isLocal: true,
    rating: 4.6,
    reviewCount: 89,
    stock: 100,
    sold: 450
  },
  {
    id: 4,
    name: "Case Handphone Batik Jogja",
    category: "aksesoris",
    price: 150000,
    image: "assets/images/products/download.jpeg",
    imageAlt: "Case Handphone Batik Jogja - Case premium dengan motif batik tradisional",
    description: "Case handphone dengan motif batik asli Yogyakarta, handmade dan berkualitas tinggi.",
    fullDescription:
      "Case handphone premium dengan motif batik khas Yogyakarta yang dibuat dengan teknik tradisional. Terbuat dari bahan berkualitas tinggi yang memberikan perlindungan optimal untuk smartphone Anda sambil menampilkan keindahan budaya Indonesia.",
    specs: {
      Material: "TPU Premium + Batik Canvas",
      Perlindungan: "Drop Protection 2 Meter",
      Kompatibilitas: "iPhone & Android",
      Motif: "Batik Parang Jogja",
      Warna: "Coklat Klasik",
      Ketebalan: "2.5mm",
    },
    keywords: ["case", "batik", "handmade", "yogyakarta", "tradisional"],
    vendorId: 2,
    vendorName: "Tekno Nusantara",
    isLocal: true,
    rating: 4.9,
    reviewCount: 67,
    stock: 200,
    sold: 890
  },
  {
    id: 5,
    name: "Tas Laptop Rotan Bali",
    category: "aksesoris",
    price: 450000,
    image: "assets/images/products/Laptop/pexels-veeterzy-303383.jpg",
    imageAlt: "Tas Laptop Rotan Bali - Tas laptop eco-friendly dari rotan alami",
    description: "Tas laptop eco-friendly dari rotan alami Bali dengan desain modern dan fungsional.",
    fullDescription:
      "Tas laptop unik dan ramah lingkungan yang dibuat dari rotan alami Bali. Menggabungkan kearifan lokal dengan desain modern, tas ini cocok untuk laptop hingga 15 inci dengan compartment yang praktis.",
    specs: {
      Material: "Rotan Alami Bali",
      Ukuran: "40cm x 30cm x 8cm",
      Kompatibilitas: "Laptop 13-15 inci",
      Fitur: "Waterproof Lining",
      Warna: "Natural Brown",
      Kapasitas: "2 Compartment",
    },
    keywords: ["tas", "laptop", "rotan", "bali", "eco-friendly"],
    vendorId: 3,
    vendorName: "Gadget Lokal",
    isLocal: true,
    rating: 4.7,
    reviewCount: 43,
    stock: 80,
    sold: 210
  },
  {
    id: 6,
    name: "Powerbank Tenaga Surya",
    category: "aksesoris",
    price: 750000,
    image: "assets/images/products/pexels-alexeydemidov-9704249.jpg",
    imageAlt: "Powerbank Tenaga Surya - Powerbank ramah lingkungan dengan panel surya",
    description: "Powerbank inovatif dengan panel surya terintegrasi, ramah lingkungan dan praktis.",
    fullDescription:
      "Powerbank revolusioner yang menggunakan tenaga surya sebagai sumber energi utama. Dilengkapi dengan panel surya berkualitas tinggi dan battery yang tahan lama, cocok untuk outdoor dan emergency situations.",
    specs: {
      Kapasitas: "20000mAh",
      "Panel Surya": "Monocrystalline 5W",
      "Output Port": "3 USB + 1 USB-C",
      "Fast Charging": "18W PD",
      Material: "Aluminum Alloy",
      Sertifikasi: "IP65 Waterproof",
    },
    keywords: ["powerbank", "solar", "ramah lingkungan", "outdoor", "emergency"],
    vendorId: 3,
    vendorName: "Gadget Lokal",
    isLocal: true,
    rating: 4.8,
    reviewCount: 92,
    stock: 60,
    sold: 340
  },
  {
    id: 7,
    name: "Keyboard Mechanical Kayu Jati",
    category: "aksesoris",
    price: 1200000,
    image: "assets/images/products/download.jpeg",
    imageAlt: "Keyboard Mechanical Kayu Jati - Keyboard premium dengan case kayu jati asli",
    description: "Keyboard mechanical premium dengan case kayu jati asli, handcrafted dan berkualitas tinggi.",
    fullDescription:
      "Keyboard mechanical premium yang menggabungkan teknologi modern dengan keindahan kayu jati asli Indonesia. Setiap keyboard dibuat dengan tangan oleh pengrajin lokal yang berpengalaman, menghasilkan produk yang unik dan berkualitas tinggi.",
    specs: {
      Switch: "Cherry MX Brown",
      Layout: "TKL (87 Keys)",
      Material: "Kayu Jati Asli",
      Konektivitas: "USB-C + Bluetooth",
      Backlight: "RGB Programmable",
      Baterai: "4000mAh",
    },
    keywords: ["keyboard", "mechanical", "kayu jati", "handcrafted", "premium"],
    vendorId: 2,
    vendorName: "Tekno Nusantara",
    isLocal: true,
    rating: 4.9,
    reviewCount: 28,
    stock: 25,
    sold: 85
  },
  {
    id: 8,
    name: "Headset Gaming Wayang",
    category: "aksesoris",
    price: 890000,
    image: "assets/images/products/pexels-kinkate-205926.jpg",
    imageAlt: "Headset Gaming Wayang - Headset gaming dengan desain wayang kulit",
    description: "Headset gaming unik dengan desain wayang kulit, performa tinggi dan budaya Indonesia.",
    fullDescription:
      "Headset gaming yang memadukan performa audio tinggi dengan keindahan seni wayang kulit Indonesia. Desain yang unik dan kualitas suara yang jernih menjadikannya pilihan sempurna untuk gamer yang menghargai budaya lokal.",
    specs: {
      Driver: "50mm Neodymium",
      "Frequency Response": "20Hz-20kHz",
      Impedance: "32 Ohm",
      Mikrofon: "Noise Cancelling",
      Konektivitas: "3.5mm + USB",
      Desain: "Wayang Arjuna",
    },
    keywords: ["headset", "gaming", "wayang", "budaya", "audio"],
    vendorId: 2,
    vendorName: "Tekno Nusantara",
    isLocal: true,
    rating: 4.6,
    reviewCount: 54,
    stock: 45,
    sold: 167
  }
]

// Global variables for UMKM marketplace
let filteredProducts = [...products]
let compareList = []
let currentSearchTerm = ""
let isLoading = false
let cart = []
let vendors = []
let reviews = []
let chats = []
let currentUser = { id: 101, name: "User Demo", email: "user@demo.com" }
let currentChat = null
let currentVendor = null

// Load data from JSON files
async function loadMarketplaceData() {
  try {
    // Load cart from localStorage first
    const savedCart = localStorage.getItem('lexagear-cart')
    if (savedCart) {
      cart = JSON.parse(savedCart)
      updateCartCount()
    }

    // Load vendors
    const vendorsResponse = await fetch('./data/vendors.json')
    if (vendorsResponse.ok) {
      vendors = await vendorsResponse.json()
    }

    // Load reviews
    const reviewsResponse = await fetch('./data/reviews.json')
    if (reviewsResponse.ok) {
      reviews = await reviewsResponse.json()
    }

    // Load chats
    const chatsResponse = await fetch('./data/chats.json')
    if (chatsResponse.ok) {
      chats = await chatsResponse.json()
    }

    // Load cart from JSON as fallback
    const cartResponse = await fetch('./data/cart.json')
    if (cartResponse.ok && cart.length === 0) {
      const cartData = await cartResponse.json()
      if (cartData.length > 0) {
        cart = cartData[0].items || []
        updateCartCount()
      }
    }

    // Render vendors
    renderVendors()
    
  } catch (error) {
    console.error('Error loading marketplace data:', error)
  }
}

// Cart Management Functions
function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId)
  if (!product) return

  const existingItem = cart.find(item => item.productId === productId)
  
  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
      price: product.price,
      vendorId: product.vendorId,
      addedDate: new Date().toISOString()
    })
  }
  
  updateCartCount()
  showToast(`${product.name} (${quantity} item) ditambahkan ke keranjang`, "success")
  
  // Save cart to localStorage
  localStorage.setItem('lexagear-cart', JSON.stringify(cart))
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId)
  updateCartCount()
  renderCartItems()
  
  // Save cart to localStorage
  localStorage.setItem('lexagear-cart', JSON.stringify(cart))
  
  const product = products.find(p => p.id === productId)
  if (product) {
    showToast(`${product.name} dihapus dari keranjang`, "info")
  }
}

function updateCartQuantity(productId, quantity) {
  const item = cart.find(item => item.productId === productId)
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = quantity
      updateCartCount()
      renderCartItems()
      
      // Save cart to localStorage
      localStorage.setItem('lexagear-cart', JSON.stringify(cart))
    }
  }
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCountElement = document.getElementById('cart-count')
  if (cartCountElement) {
    cartCountElement.textContent = totalItems
  }
}

// Function to change quantity in product modal
function changeQuantity(change) {
  const quantityInput = document.getElementById('product-quantity')
  if (quantityInput) {
    let currentValue = parseInt(quantityInput.value) || 1
    let newValue = currentValue + change
    
    // Ensure quantity is between 1 and 10
    if (newValue < 1) newValue = 1
    if (newValue > 10) newValue = 10
    
    quantityInput.value = newValue
  }
}

// Function to get selected quantity from modal
function getSelectedQuantity() {
  const quantityInput = document.getElementById('product-quantity')
  return quantityInput ? parseInt(quantityInput.value) || 1 : 1
}

function openCart() {
  const cartModal = document.getElementById('cart-modal')
  cartModal.style.display = 'block'
  renderCartItems()
}

function closeCart() {
  const cartModal = document.getElementById('cart-modal')
  cartModal.style.display = 'none'
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items')
  const cartTotalElement = document.getElementById('cart-total')
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <h3>Keranjang Kosong</h3>
        <p>Belum ada produk di keranjang Anda</p>
        <button class="continue-shopping-btn" onclick="closeCart()">Lanjut Belanja</button>
      </div>
    `
    cartTotalElement.textContent = '0'
    return
  }

  let total = 0
  let html = ''

  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId)
    if (product) {
      const subtotal = product.price * item.quantity
      total += subtotal

      html += `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" class="cart-item-image">
          <div class="cart-item-details">
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-vendor">${product.vendorName}</div>
            <div class="cart-item-price">Rp ${product.price.toLocaleString()}</div>
          </div>
          <div class="cart-item-quantity">
            <button class="quantity-btn" onclick="updateCartQuantity(${item.productId}, ${item.quantity - 1})">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="updateCartQuantity(${item.productId}, ${item.quantity + 1})">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.productId})">Hapus</button>
        </div>
      `
    }
  })

  cartItemsContainer.innerHTML = html
  cartTotalElement.textContent = total.toLocaleString()
}

function checkout() {
  if (cart.length === 0) {
    showToast("Keranjang kosong", "error")
    return
  }

  closeCart()
  
  // Open payment demo modal
  const paymentModal = document.getElementById('payment-demo-modal')
  paymentModal.style.display = 'block'
}

function processPayment() {
  showToast("Pembayaran berhasil diproses (Demo)", "success")
  cart = []
  updateCartCount()
  closePaymentDemo()
}

function closePaymentDemo() {
  const paymentModal = document.getElementById('payment-demo-modal')
  paymentModal.style.display = 'none'
}

// Chat Functions
function openChat(productId) {
  const product = products.find(p => p.id === productId)
  if (!product) return

  const vendor = vendors.find(v => v.id === product.vendorId)
  if (!vendor) return

  currentChat = {
    productId: productId,
    vendorId: product.vendorId,
    vendorName: vendor.name
  }

  const chatModal = document.getElementById('chat-modal')
  const chatTitle = document.getElementById('chat-title')
  
  chatTitle.textContent = `Chat dengan ${vendor.name}`
  chatModal.style.display = 'block'
  
  renderChatMessages()
}

function closeChat() {
  const chatModal = document.getElementById('chat-modal')
  chatModal.style.display = 'none'
  currentChat = null
}

function renderChatMessages() {
  const chatMessagesContainer = document.getElementById('chat-messages')
  
  if (!currentChat) return

  // Find existing chat or create new one
  const existingChat = chats.find(chat => 
    chat.productId === currentChat.productId && 
    chat.buyerId === currentUser.id
  )

  if (existingChat) {
    let html = ''
    existingChat.messages.forEach(message => {
      const isCurrentUser = message.senderId === currentUser.id
      const messageClass = isCurrentUser ? 'buyer' : 'seller'
      const time = new Date(message.timestamp).toLocaleTimeString()
      
      html += `
        <div class="chat-message ${messageClass}">
          <div>${message.message}</div>
          <div class="chat-message-time">${time}</div>
        </div>
      `
    })
    chatMessagesContainer.innerHTML = html
  } else {
    chatMessagesContainer.innerHTML = `
      <div class="chat-message seller">
        <div>Halo! Ada yang bisa saya bantu mengenai produk ini?</div>
        <div class="chat-message-time">${new Date().toLocaleTimeString()}</div>
      </div>
    `
  }
  
  // Scroll to bottom
  chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight
}

function sendMessage() {
  const chatInput = document.getElementById('chat-input')
  const message = chatInput.value.trim()
  
  if (!message || !currentChat) return

  // Add message to chat
  const chatMessagesContainer = document.getElementById('chat-messages')
  const time = new Date().toLocaleTimeString()
  
  const messageHtml = `
    <div class="chat-message buyer">
      <div>${message}</div>
      <div class="chat-message-time">${time}</div>
    </div>
  `
  
  chatMessagesContainer.innerHTML += messageHtml
  chatInput.value = ''
  
  // Scroll to bottom
  chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight
  
  // Auto-reply after 2 seconds
  setTimeout(() => {
    const autoReply = "Terima kasih atas pertanyaan Anda! Kami akan segera merespons."
    const replyHtml = `
      <div class="chat-message seller">
        <div>${autoReply}</div>
        <div class="chat-message-time">${new Date().toLocaleTimeString()}</div>
      </div>
    `
    chatMessagesContainer.innerHTML += replyHtml
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight
  }, 2000)
}

function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage()
  }
}

// Vendor Functions
function renderVendors() {
  const vendorGrid = document.getElementById('vendor-grid')
  if (!vendorGrid || vendors.length === 0) return

  let html = ''
  vendors.forEach(vendor => {
    html += `
      <div class="vendor-card">
        <img src="${vendor.image}" alt="${vendor.name}" class="vendor-image">
        <div class="vendor-info">
          <div class="vendor-name">${vendor.name}</div>
          <div class="vendor-location">📍 ${vendor.location}</div>
          <div class="vendor-stats">
            <div class="vendor-rating">⭐ ${vendor.rating} (${vendor.totalReviews} reviews)</div>
            <div class="vendor-products">${vendor.totalProducts} produk</div>
          </div>
          <div class="vendor-description">${vendor.description}</div>
          <div class="vendor-actions">
            <button class="btn primary" onclick="openVendorDetail(${vendor.id})">Lihat Profil</button>
            <button class="btn secondary" onclick="viewVendorProducts(${vendor.id})">Produk</button>
          </div>
        </div>
        ${vendor.isLocal ? '<div class="local-badge">🇮🇩 Lokal</div>' : ''}
      </div>
    `
  })

  vendorGrid.innerHTML = html
}

function openVendorDetail(vendorId) {
  const vendor = vendors.find(v => v.id === vendorId)
  if (!vendor) return

  const vendorModal = document.getElementById('vendor-modal')
  const vendorDetails = document.getElementById('vendor-details')
  
  vendorDetails.innerHTML = `
    <div class="vendor-detail">
      <div class="vendor-header">
        <img src="${vendor.image}" alt="${vendor.name}" class="vendor-detail-image">
        <div class="vendor-detail-info">
          <h3>${vendor.name}</h3>
          <p class="vendor-location">📍 ${vendor.location}</p>
          <p class="vendor-established">Didirikan: ${vendor.established}</p>
          <div class="vendor-stats">
            <span class="stat">⭐ ${vendor.rating}</span>
            <span class="stat">📦 ${vendor.totalProducts} produk</span>
            <span class="stat">🛒 ${vendor.totalSales} terjual</span>
          </div>
        </div>
      </div>
      <div class="vendor-story">
        <h4>Cerita Brand</h4>
        <p>${vendor.brandStory}</p>
      </div>
      <div class="vendor-contact">
        <h4>Kontak Vendor</h4>
        <p>Pemilik: ${vendor.owner}</p>
        <button class="btn primary" onclick="startChatWithVendor(${vendor.id})">Hubungi Vendor</button>
      </div>
    </div>
  `
  
  vendorModal.style.display = 'block'
}

function closeVendorModal() {
  const vendorModal = document.getElementById('vendor-modal')
  vendorModal.style.display = 'none'
}

function viewVendorProducts(vendorId) {
  const vendorProducts = products.filter(p => p.vendorId === vendorId)
  filteredProducts = vendorProducts
  renderProducts(filteredProducts)
  scrollToSection('produk')
  
  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'))
  
  showToast(`Menampilkan produk dari vendor ini (${vendorProducts.length} produk)`, "info")
}

function startChatWithVendor(vendorId) {
  const vendor = vendors.find(v => v.id === vendorId)
  if (!vendor) return

  closeVendorModal()
  
  // Open general chat with vendor
  currentChat = {
    productId: null,
    vendorId: vendorId,
    vendorName: vendor.name
  }

  const chatModal = document.getElementById('chat-modal')
  const chatTitle = document.getElementById('chat-title')
  
  chatTitle.textContent = `Chat dengan ${vendor.name}`
  chatModal.style.display = 'block'
  
  renderGeneralChatMessages()
}

function renderGeneralChatMessages() {
  const chatMessagesContainer = document.getElementById('chat-messages')
  
  chatMessagesContainer.innerHTML = `
    <div class="chat-message seller">
      <div>Halo! Selamat datang di toko kami. Ada yang bisa saya bantu?</div>
      <div class="chat-message-time">${new Date().toLocaleTimeString()}</div>
    </div>
  `
  
  chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight
}

// DOM elements
const productGrid = document.getElementById("product-grid")
const filterButtons = document.querySelectorAll(".filter-btn")
const modal = document.getElementById("product-modal")
const closeModal = document.getElementById("close-modal")
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const contactForm = document.getElementById("contact-form")
const searchInput = document.getElementById("search-input")
const loadingState = document.getElementById("loading-state")
const errorState = document.getElementById("error-state")
const compareContainer = document.getElementById("compare-container")
const compareItems = document.getElementById("compare-items")

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  showLoading()
  
  // Initialize mobile menu first (before other scripts that might interfere)
  setTimeout(() => {
    setupMobileMenu()
  }, 100)
  
  // Initialize other functions
  handleResize()
  checkHoverSupport()
  
  // Set up lazy loading for images
  const lazyImages = document.querySelectorAll('img.lazy')
  if (lazyImages.length > 0) {
    setupLazyLoading()
  }
  
  // Load marketplace data
  loadMarketplaceData()
  
  setTimeout(() => {
    hideLoading()
    renderProducts(products)
    setupEventListeners()
    setupSmoothScrolling()
    setupStickyHeader()
    setupLazyLoading()
    updateCartCount()
    showToast("Selamat datang di LexaGear UMKM Marketplace!", "success")
  }, 1000)
})

// Toast notification system
function showToast(message, type = "success") {
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.textContent = message
  
  const container = document.getElementById("toast-container") || document.body
  container.appendChild(toast)
  
  setTimeout(() => toast.classList.add("show"), 100)
  
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => container.removeChild(toast), 300)
  }, 3000)
}

// Loading states
function showLoading() {
  isLoading = true
  loadingState.style.display = "block"
  productGrid.style.display = "none"
  errorState.style.display = "none"
}

function hideLoading() {
  isLoading = false
  loadingState.style.display = "none"
  productGrid.style.display = "grid"
}

function showError() {
  errorState.style.display = "block"
  productGrid.style.display = "none"
  loadingState.style.display = "none"
}

function retryLoadProducts() {
  showLoading()
  setTimeout(() => {
    hideLoading()
    renderProducts(filteredProducts)
    showToast("Produk berhasil dimuat!", "success")
  }, 1000)
}

// Enhanced render products with lazy loading
function renderProducts(productsToRender) {
  if (isLoading) return
  
  productGrid.innerHTML = ""
  
  if (productsToRender.length === 0) {
    productGrid.innerHTML = `
      <div class="error-state">
        <h3>Tidak ada produk ditemukan</h3>
        <p>Coba ubah kata kunci pencarian atau filter yang digunakan.</p>
      </div>
    `
    return
  }

  productsToRender.forEach((product) => {
    const productCard = createProductCard(product)
    productGrid.appendChild(productCard)
  })
}

// Enhanced create product card with comparison feature
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.setAttribute("data-category", product.category)
  card.setAttribute("data-product-id", product.id)

  const starRating = "⭐".repeat(Math.floor(product.rating))
  const localBadge = product.isLocal ? '<div class="local-badge">🇮🇩 Lokal</div>' : ''

  card.innerHTML = `
    ${localBadge}
    <input type="checkbox" class="compare-checkbox" onchange="toggleCompare(${product.id})" 
           aria-label="Add ${product.name} to comparison">
    <img src="${product.image}" alt="${product.imageAlt}" class="product-image" 
         loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-vendor">🏪 ${product.vendorName}</div>
      <div class="product-rating">
        <span class="star-rating">${starRating}</span>
        <span class="review-count">(${product.reviewCount} review)</span>
      </div>
      <p class="product-price" aria-label="Price: ${product.price.toLocaleString("id-ID")} Rupiah">
        Rp ${product.price.toLocaleString("id-ID")}
      </p>
      <p class="product-description">${product.description}</p>
      <div class="product-actions">
        <button class="btn-add-cart" onclick="addToCart(${product.id})" 
                aria-label="Add ${product.name} to cart">
          🛒 Tambah ke Keranjang
        </button>
        <button class="btn-chat" onclick="openChat(${product.id})" 
                aria-label="Chat with seller about ${product.name}">
          💬
        </button>
      </div>
      <button class="detail-btn" onclick="openModal(${product.id})" 
              aria-label="View details of ${product.name}">
        Lihat Detail
      </button>
    </div>
  `

  return card
}

// Enhanced filter with animation and local products
function filterProducts(category) {
  const cards = document.querySelectorAll(".product-card")
  
  // Update filtered products array
  if (category === 'all') {
    filteredProducts = [...products]
  } else if (category === 'local') {
    filteredProducts = products.filter(product => product.isLocal)
    showToast(`Menampilkan ${filteredProducts.length} produk lokal UMKM`, "info")
  } else {
    filteredProducts = products.filter(product => product.category === category)
  }

  // Re-render products with new filter
  renderProducts(filteredProducts)
}

// Search functionality
function searchProducts(searchTerm) {
  currentSearchTerm = searchTerm.toLowerCase()
  
  if (searchTerm === "") {
    filteredProducts = [...products]
  } else {
    filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(currentSearchTerm) ||
      product.description.toLowerCase().includes(currentSearchTerm) ||
      product.category.toLowerCase().includes(currentSearchTerm) ||
      product.keywords.some(keyword => keyword.toLowerCase().includes(currentSearchTerm))
    )
  }
  
  renderProducts(filteredProducts)
  
  if (filteredProducts.length === 0) {
    showToast(`Tidak ada produk yang sesuai dengan "${searchTerm}"`, "info")
  }
}

// Product comparison functionality
function toggleCompare(productId) {
  const product = products.find(p => p.id === productId)
  const isInCompare = compareList.some(p => p.id === productId)
  
  if (isInCompare) {
    compareList = compareList.filter(p => p.id !== productId)
    showToast(`${product.name} dihapus dari perbandingan`, "info")
  } else {
    if (compareList.length >= 3) {
      showToast("Maksimal 3 produk untuk dibandingkan", "warning")
      // Uncheck the checkbox
      const checkbox = document.querySelector(`[data-product-id="${productId}"] .compare-checkbox`)
      checkbox.checked = false
      return
    }
    compareList.push(product)
    showToast(`${product.name} ditambahkan ke perbandingan`, "success")
  }
  
  updateCompareDisplay()
}

function updateCompareDisplay() {
  if (compareList.length === 0) {
    compareContainer.style.display = "none"
    return
  }
  
  compareContainer.style.display = "block"
  compareContainer.classList.add("show")
  
  compareItems.innerHTML = compareList.map(product => `
    <div class="compare-item">
      <span>${product.name}</span>
      <button class="compare-remove" onclick="removeFromCompare(${product.id})" 
              aria-label="Remove ${product.name} from comparison">&times;</button>
    </div>
  `).join("")
}

function removeFromCompare(productId) {
  const product = products.find(p => p.id === productId)
  compareList = compareList.filter(p => p.id !== productId)
  
  // Uncheck the checkbox
  const checkbox = document.querySelector(`[data-product-id="${productId}"] .compare-checkbox`)
  if (checkbox) checkbox.checked = false
  
  updateCompareDisplay()
  showToast(`${product.name} dihapus dari perbandingan`, "info")
}

function closeCompare() {
  compareContainer.classList.remove("show")
  setTimeout(() => {
    compareContainer.style.display = "none"
  }, 300)
}

function showComparison() {
  if (compareList.length < 2) {
    showToast("Pilih minimal 2 produk untuk dibandingkan", "warning")
    return
  }
  
  // Create comparison modal or page
  const comparisonContent = createComparisonContent()
  showToast("Fitur perbandingan akan segera tersedia!", "info")
}

function createComparisonContent() {
  // This would create a detailed comparison view
  return compareList.map(product => ({
    name: product.name,
    price: product.price,
    specs: product.specs
  }))
}

// Lazy loading setup
function setupLazyLoading() {
  const images = document.querySelectorAll("img[loading='lazy']")
  
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src || img.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })
    
    images.forEach(img => imageObserver.observe(img))
  }
}

// Render products
function renderProducts(productsToRender) {
  productGrid.innerHTML = ""

  productsToRender.forEach((product) => {
    const productCard = createProductCard(product)
    productGrid.appendChild(productCard)
  })
}

// Create product card
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.setAttribute("data-category", product.category)

  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">Rp ${product.price.toLocaleString("id-ID")}</p>
            <p class="product-description">${product.description}</p>
            <button class="detail-btn" onclick="openModal(${product.id})">Lihat Detail</button>
        </div>
    `

  return card
}

// Filter products
function filterProducts(category) {
  const cards = document.querySelectorAll(".product-card")

  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category")

    if (category === "all" || cardCategory === category) {
      card.classList.remove("hidden")
    } else {
      card.classList.add("hidden")
    }
  })
}

// Open modal
function openModal(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  document.getElementById("modal-img").src = product.image
  document.getElementById("modal-img").alt = product.name
  document.getElementById("modal-title").textContent = product.name
  document.getElementById("modal-price").textContent = `Rp ${product.price.toLocaleString("id-ID")}`
  document.getElementById("modal-description").textContent = product.fullDescription

  // Render specifications
  const specsContainer = document.getElementById("modal-specs")
  specsContainer.innerHTML = `
        <h4>Spesifikasi Teknis</h4>
        <ul>
            ${Object.entries(product.specs)
              .map(([key, value]) => `<li><span>${key}</span><span>${value}</span></li>`)
              .join("")}
        </ul>
    `

  // Setup add to cart button
  const addToCartBtn = document.getElementById("add-to-cart-btn")
  if (addToCartBtn) {
    // Remove existing event listeners
    addToCartBtn.replaceWith(addToCartBtn.cloneNode(true))
    const newAddToCartBtn = document.getElementById("add-to-cart-btn")
    
    // Add new event listener
    newAddToCartBtn.addEventListener("click", function() {
      const quantity = getSelectedQuantity()
      addToCart(productId, quantity)
    })
  }

  // Reset quantity selector
  const quantityInput = document.getElementById('product-quantity')
  if (quantityInput) {
    quantityInput.value = 1
  }

  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Close modal
function closeModalFunction() {
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Enhanced event listeners
function setupEventListeners() {
  // Filter buttons with accessibility
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class and aria-pressed from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active")
        btn.setAttribute("aria-pressed", "false")
      })
      
      // Add active class and aria-pressed to clicked button
      this.classList.add("active")
      this.setAttribute("aria-pressed", "true")

      // Filter products
      const category = this.getAttribute("data-filter")
      filterProducts(category)
      
      showToast(`Filter ${this.textContent} diterapkan`, "info")
    })
  })

  // Search input with debounce
  let searchTimeout
  searchInput.addEventListener("input", function(e) {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      searchProducts(e.target.value)
    }, 300)
  })

  // Modal close events with keyboard support
  closeModal.addEventListener("click", closeModalFunction)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalFunction()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal.style.display === "block") {
        closeModalFunction()
      }
      if (compareContainer.classList.contains("show")) {
        closeCompare()
      }
    }
  })

  // Mobile navigation toggle with accessibility
  navToggle.addEventListener("click", () => {
    const isExpanded = navMenu.classList.contains("active")
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
    
    navToggle.setAttribute("aria-expanded", !isExpanded)
  })

  // Close mobile menu when clicking on links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
      navToggle.setAttribute("aria-expanded", "false")
    })
  })

  // Enhanced contact form
  contactForm.addEventListener("submit", handleFormSubmit)

  // Setup enhanced form validation
  setupFormValidation()

  // Real-time validation for contact form
  setupRealTimeValidation()

  // Mobile menu already initialized in main DOMContentLoaded - no need to call again

  // Enhanced touch and swipe support for mobile
  setupTouchSupport()

  // Setup responsive handling
  handleResize()
  window.addEventListener('resize', throttledResize)
  window.addEventListener('orientationchange', throttledResize)

  // Setup responsive images
  setupResponsiveImages()

  // Check hover support
  checkHoverSupport()
}

// Mobile Menu Toggle Function - Enhanced and Fixed
function setupMobileMenu() {
  try {
    // Use a more robust approach with multiple retries
    let attempts = 0;
    const maxAttempts = 5;
    
    function initializeMenuWithRetry() {
      attempts++;
      
      const navToggle = document.getElementById('nav-toggle');
      const navMenu = document.getElementById('nav-menu');
      
      if (!navToggle || !navMenu) {
        if (attempts < maxAttempts) {
          console.warn(`Mobile menu elements not found, retrying... (${attempts}/${maxAttempts})`);
          setTimeout(initializeMenuWithRetry, 200 * attempts);
        } else {
          console.error('Failed to initialize mobile menu after maximum attempts');
        }
        return;
      }
      
      console.log('Initializing mobile menu successfully');
      initializeMobileMenu(navToggle, navMenu);
    }
    
    // Start initialization
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeMenuWithRetry);
    } else {
      initializeMenuWithRetry();
    }
    
  } catch (error) {
    console.error('Error setting up mobile menu:', error);
  }
}

// Initialize mobile menu functionality
function initializeMobileMenu(navToggle, navMenu) {
  try {
    console.log('Setting up mobile menu event listeners');
    
    // Reset initial state
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
    
    // Function to toggle menu
    function toggleMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      
      const isActive = navMenu.classList.contains('active');
      console.log('Toggling menu, currently active:', isActive);
      
      if (isActive) {
        // Close menu
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        console.log('Menu closed');
      } else {
        // Open menu
        navMenu.classList.add('active');
        navToggle.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        console.log('Menu opened');
      }
    }
    
    // Remove existing event listeners to prevent duplicates
    navToggle.removeEventListener('click', toggleMenu);
    navToggle.removeEventListener('touchstart', toggleMenu);
    
    // Add event listeners
    navToggle.addEventListener('click', toggleMenu, { passive: false });
    navToggle.addEventListener('touchstart', toggleMenu, { passive: false });
    
    // Keyboard support
    navToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu(e);
      }
      if (e.key === 'Escape') {
        if (navMenu.classList.contains('active')) {
          toggleMenu(e);
        }
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && 
          !navToggle.contains(e.target) && 
          !navMenu.contains(e.target)) {
        toggleMenu();
      }
    });
    
    // Close menu when window is resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
    
    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          setTimeout(() => toggleMenu(), 100);
        }
      });
    });
    
    console.log('Mobile menu initialized successfully');
    
  } catch (error) {
    console.error('Error initializing mobile menu:', error);
  }
}

// Enhanced form submission with Gmail integration
function handleFormSubmit(e) {
  e.preventDefault()

  const submitBtn = e.target.querySelector(".submit-btn")
  const btnText = submitBtn.querySelector(".btn-text")
  const btnLoading = submitBtn.querySelector(".btn-loading")
  
  // Show loading state
  submitBtn.disabled = true
  btnText.style.display = "none"
  btnLoading.style.display = "inline"

  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  // Clear previous errors
  clearErrors()

  let hasErrors = false

  // Enhanced validation
  if (!name) {
    showError("name-error", "Nama harus diisi")
    hasErrors = true
  } else if (name.length < 2) {
    showError("name-error", "Nama minimal 2 karakter")
    hasErrors = true
  }

  if (!email) {
    showError("email-error", "Email harus diisi")
    hasErrors = true
  } else if (!isValidEmail(email)) {
    showError("email-error", "Format email tidak valid")
    hasErrors = true
  }

  if (!message) {
    showError("message-error", "Pesan harus diisi")
    hasErrors = true
  } else if (message.length < 10) {
    showError("message-error", "Pesan minimal 10 karakter")
    hasErrors = true
  }

  // Process form
  setTimeout(() => {
    // Reset button state
    submitBtn.disabled = false
    btnText.style.display = "inline"
    btnLoading.style.display = "none"
    
    if (!hasErrors) {
      // Send email via Gmail
      sendEmailViaGmail(name, email, message)
      
      // Show success message
      const successMessage = document.getElementById("success-message")
      successMessage.style.display = "block"
      
      // Reset form
      contactForm.reset()
      
      // Show toast notification
      showToast("Gmail berhasil dibuka! Silakan kirim pesan Anda.", "success")

      // Hide success message after 10 seconds
      setTimeout(() => {
        successMessage.style.display = "none"
      }, 10000)
    } else {
      showToast("Mohon perbaiki kesalahan pada form", "error")
    }
  }, 1000)
}

// Function to send email via Gmail (Simplified)
function sendEmailViaGmail(name, userEmail, message) {
  const recipientEmail = "info@lexagear.com"
  const subject = `Pesan dari ${name} - Website LexaGear`
  
  // Create formatted email body
  const emailBody = `Halo Tim LexaGear,

Saya ${name} ingin menghubungi Anda melalui website LexaGear.

Detail Kontak:
• Nama: ${name}
• Email: ${userEmail}
• Tanggal: ${new Date().toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}
• Waktu: ${new Date().toLocaleTimeString('id-ID')}

Pesan:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pesan ini dikirim melalui form kontak di website LexaGear.
Mohon balas ke email: ${userEmail}

Terima kasih!

Best regards,
${name}`

  // Create Gmail compose URL
  const gmailParams = {
    to: recipientEmail,
    subject: subject,
    body: emailBody
  }
  
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(gmailParams.to)}&su=${encodeURIComponent(gmailParams.subject)}&body=${encodeURIComponent(gmailParams.body)}`
  
  // Open Gmail in new tab
  window.open(gmailUrl, '_blank')
  
  // Show fallback options after 3 seconds if user needs alternatives
  setTimeout(() => {
    showEmailAlternatives(name, userEmail, message)
  }, 3000)
}

// Enhanced email alternatives with better styling
function showEmailAlternatives(name, userEmail, message) {
  // Check if already exists
  if (document.getElementById('email-alternatives')) {
    return
  }
  
  const alternativeDiv = document.createElement('div')
  alternativeDiv.id = 'email-alternatives'
  alternativeDiv.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    z-index: 3000;
    max-width: 380px;
    border: 1px solid #e9ecef;
    animation: slideInRight 0.3s ease;
    font-family: 'Poppins', sans-serif;
  `
  
  alternativeDiv.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <h4 style="margin: 0; color: #2c3e50; font-size: 1.1rem; font-weight: 600;">🔄 Gmail tidak terbuka?</h4>
      <button onclick="closeEmailAlternatives()" style="background: none; border: none; font-size: 1.8rem; cursor: pointer; color: #95a5a6; line-height: 1;">&times;</button>
    </div>
    
    <p style="margin: 0 0 1rem 0; color: #6c757d; font-size: 0.9rem; line-height: 1.4;">Jangan khawatir! Coba alternatif lain:</p>
    
    <div style="display: flex; flex-direction: column; gap: 0.8rem;">
      <button onclick="sendViaOutlook('${encodeURIComponent(name)}', '${encodeURIComponent(userEmail)}', '${encodeURIComponent(message)}')" 
              style="padding: 12px 16px; background: linear-gradient(135deg, #0078d4, #106ebe); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; text-align: left; transition: all 0.3s ease; font-weight: 500;">
        📧 Buka Outlook Web
      </button>
      
      <button onclick="sendViaDefaultEmail('${encodeURIComponent(name)}', '${encodeURIComponent(userEmail)}', '${encodeURIComponent(message)}')" 
              style="padding: 12px 16px; background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; text-align: left; transition: all 0.3s ease; font-weight: 500;">
        ✉️ Buka Email Default
      </button>
      
      <button onclick="copyEmailToClipboard('${encodeURIComponent(name)}', '${encodeURIComponent(userEmail)}', '${encodeURIComponent(message)}')" 
              style="padding: 12px 16px; background: linear-gradient(135deg, #1abc9c, #16a085); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; text-align: left; transition: all 0.3s ease; font-weight: 500;">
        📋 Salin ke Clipboard
      </button>
    </div>
    
    <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
      <p style="margin: 0; color: #95a5a6; font-size: 0.8rem; text-align: center; font-style: italic;">
        Pesan ini akan hilang otomatis dalam <span id="countdown">15</span> detik
      </p>
    </div>
  `
  
  // Add animation styles
  if (!document.getElementById('email-alternatives-styles')) {
    const style = document.createElement('style')
    style.id = 'email-alternatives-styles'
    style.textContent = `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      #email-alternatives button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      }
      
      #email-alternatives button:active {
        transform: translateY(0);
      }
    `
    document.head.appendChild(style)
  }
  
  document.body.appendChild(alternativeDiv)
  
  // Countdown timer
  let countdown = 15
  const countdownElement = document.getElementById('countdown')
  const timer = setInterval(() => {
    countdown--
    if (countdownElement) {
      countdownElement.textContent = countdown
    }
    if (countdown <= 0) {
      clearInterval(timer)
      closeEmailAlternatives()
    }
  }, 1000)
}

// Alternative email functions with proper decoding
function sendViaOutlook(encodedName, encodedUserEmail, encodedMessage) {
  const name = decodeURIComponent(encodedName)
  const userEmail = decodeURIComponent(encodedUserEmail)
  const message = decodeURIComponent(encodedMessage)
  
  const subject = `Pesan dari ${name} - Website LexaGear`
  const body = createEmailBody(name, userEmail, message)
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=info@lexagear.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.open(outlookUrl, '_blank')
  closeEmailAlternatives()
  showToast("Outlook Web berhasil dibuka!", "success")
}

function sendViaDefaultEmail(encodedName, encodedUserEmail, encodedMessage) {
  const name = decodeURIComponent(encodedName)
  const userEmail = decodeURIComponent(encodedUserEmail)
  const message = decodeURIComponent(encodedMessage)
  
  const subject = `Pesan dari ${name} - Website LexaGear`
  const body = createEmailBody(name, userEmail, message)
  const mailtoUrl = `mailto:info@lexagear.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoUrl
  closeEmailAlternatives()
  showToast("Email client default berhasil dibuka!", "success")
}

function copyEmailToClipboard(encodedName, encodedUserEmail, encodedMessage) {
  const name = decodeURIComponent(encodedName)
  const userEmail = decodeURIComponent(encodedUserEmail)
  const message = decodeURIComponent(encodedMessage)
  
  const emailContent = `To: info@lexagear.com
Subject: Pesan dari ${name} - Website LexaGear

${createEmailBody(name, userEmail, message)}`
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(emailContent).then(() => {
      showToast("Email berhasil disalin ke clipboard!", "success")
      closeEmailAlternatives()
    }).catch(() => {
      fallbackCopyTextToClipboard(emailContent)
    })
  } else {
    fallbackCopyTextToClipboard(emailContent)
  }
}

function createEmailBody(name, userEmail, message) {
  return `Halo Tim LexaGear,

Saya ${name} ingin menghubungi Anda melalui website LexaGear.

Detail Kontak:
• Nama: ${name}
• Email: ${userEmail}
• Tanggal: ${new Date().toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}
• Waktu: ${new Date().toLocaleTimeString('id-ID')}

Pesan:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pesan ini dikirim melalui form kontak di website LexaGear.
Mohon balas ke email: ${userEmail}

Terima kasih!

Best regards,
${name}`
}

// Copy email address function
function copyEmail() {
  const emailText = document.getElementById('contact-email').textContent
  
  if (navigator.clipboard && window.isSecureContext) {
    // Use modern clipboard API
    navigator.clipboard.writeText(emailText).then(() => {
      showToast("Email berhasil disalin ke clipboard!", "success")
    }).catch(() => {
      fallbackCopyTextToClipboard(emailText)
    })
  } else {
    // Fallback for older browsers
    fallbackCopyTextToClipboard(emailText)
  }
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.left = '-999999px'
  textArea.style.top = '-999999px'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  
  try {
    document.execCommand('copy')
    showToast("Email berhasil disalin!", "success")
  } catch (err) {
    showToast("Gagal menyalin email. Silakan salin manual: " + text, "error")
  }
  
  document.body.removeChild(textArea)
}

// Setup real-time validation
function setupRealTimeValidation() {
  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const messageInput = document.getElementById("message")

  // Real-time validation for name
  nameInput.addEventListener("blur", function() {
    const name = this.value.trim()
    if (name && name.length < 2) {
      showError("name-error", "Nama minimal 2 karakter")
    } else {
      clearError("name-error")
    }
  })

  // Real-time validation for email
  emailInput.addEventListener("blur", function() {
    const email = this.value.trim()
    if (email && !isValidEmail(email)) {
      showError("email-error", "Format email tidak valid")
    } else {
      clearError("email-error")
    }
  })

  // Real-time validation for message
  messageInput.addEventListener("blur", function() {
    const message = this.value.trim()
    if (message && message.length < 10) {
      showError("message-error", "Pesan minimal 10 karakter")
    } else {
      clearError("message-error")
    }
  })

  // Character counter for message
  messageInput.addEventListener("input", function() {
    const currentLength = this.value.length
    const maxLength = 500
    
    // Add character counter if it doesn't exist
    let counter = document.getElementById("message-counter")
    if (!counter) {
      counter = document.createElement("div")
      counter.id = "message-counter"
      counter.className = "character-counter"
      this.parentNode.appendChild(counter)
    }
    
    counter.textContent = `${currentLength}/500 karakter`
    
    if (currentLength > maxLength) {
      counter.style.color = "#e74c3c"
      this.value = this.value.substring(0, maxLength)
    } else {
      counter.style.color = "#7f8c8d"
    }
  })
}

// Enhanced form validation with live feedback
function setupFormValidation() {
  const form = document.getElementById("contact-form")
  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const messageInput = document.getElementById("message")
  
  // Add validation icons
  function addValidationIcon(input, isValid) {
    const formGroup = input.parentElement
    let icon = formGroup.querySelector('.validation-icon')
    
    if (!icon) {
      icon = document.createElement('span')
      icon.className = 'validation-icon'
      icon.style.cssText = `
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.2rem;
        z-index: 10;
      `
      formGroup.style.position = 'relative'
      formGroup.appendChild(icon)
    }
    
    if (isValid) {
      icon.textContent = '✅'
      icon.style.color = '#27ae60'
    } else {
      icon.textContent = '❌'
      icon.style.color = '#e74c3c'
    }
  }
  
  // Validate name
  nameInput.addEventListener('input', function() {
    const value = this.value.trim()
    const isValid = value.length >= 2
    
    if (value.length > 0) {
      addValidationIcon(this, isValid)
    } else {
      const icon = this.parentElement.querySelector('.validation-icon')
      if (icon) icon.remove()
    }
    
    if (value.length > 0 && !isValid) {
      showError("name-error", "Nama minimal 2 karakter")
    } else {
      clearError("name-error")
    }
  })
  
  // Validate email
  emailInput.addEventListener('input', function() {
    const value = this.value.trim()
    const isValid = isValidEmail(value)
    
    if (value.length > 0) {
      addValidationIcon(this, isValid)
    } else {
      const icon = this.parentElement.querySelector('.validation-icon')
      if (icon) icon.remove()
    }
    
    if (value.length > 0 && !isValid) {
      showError("email-error", "Format email tidak valid")
    } else {
      clearError("email-error")
    }
  })
  
  // Validate message with character counter
  messageInput.addEventListener('input', function() {
    const value = this.value.trim()
    const isValid = value.length >= 10
    const maxLength = 500
    
    // Character counter
    let counter = this.parentElement.querySelector('.character-counter')
    if (!counter) {
      counter = document.createElement('div')
      counter.className = 'character-counter'
      this.parentElement.appendChild(counter)
    }
    
    counter.textContent = `${value.length}/500 karakter`
    
    if (value.length > maxLength) {
      this.value = this.value.substring(0, maxLength)
      counter.style.color = '#e74c3c'
    } else if (value.length < 10 && value.length > 0) {
      counter.style.color = '#f39c12'
    } else {
      counter.style.color = '#7f8c8d'
    }
    
    if (value.length > 0 && !isValid) {
      showError("message-error", "Pesan minimal 10 karakter")
    } else {
      clearError("message-error")
    }
  })
  
  // Auto-resize textarea
  messageInput.addEventListener('input', function() {
    this.style.height = 'auto'
    this.style.height = this.scrollHeight + 'px'
  })
}

// Close email alternatives
function closeEmailAlternatives() {
  const alternatives = document.getElementById('email-alternatives')
  if (alternatives) {
    alternatives.style.transform = 'translateX(-100%)'
    alternatives.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(alternatives)
    }, 300)
  }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Scroll to section function
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId)
  if (target) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const targetPosition = target.offsetTop - headerHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
}

// Setup sticky header
function setupStickyHeader() {
  const header = document.getElementById("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(10px)"
    } else {
      header.style.backgroundColor = "#FFFFFF"
      header.style.backdropFilter = "none"
    }
  })
}

// Enhanced responsive handling
function handleResize() {
  const viewport = window.innerWidth
  const productGrid = document.getElementById('product-grid')
  const filterButtons = document.querySelector('.filter-buttons')
  
  // Adjust product grid layout based on screen size
  if (viewport <= 480) {
    // Extra small mobile
    productGrid.style.gridTemplateColumns = '1fr'
  } else if (viewport <= 768) {
    // Mobile
    productGrid.style.gridTemplateColumns = 'repeat(2, 1fr)'
  } else if (viewport <= 1023) {
    // Tablet
    productGrid.style.gridTemplateColumns = 'repeat(2, 1fr)'
  } else if (viewport <= 1199) {
    // Small desktop
    productGrid.style.gridTemplateColumns = 'repeat(3, 1fr)'
  } else {
    // Large desktop
    productGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))'
  }
  
  // Adjust filter buttons for mobile
  if (viewport <= 480) {
    filterButtons.style.gap = '0.5rem'
  } else {
    filterButtons.style.gap = '1rem'
  }
  
  // Close mobile menu when resizing to desktop
  if (viewport > 768) {
    const navMenu = document.getElementById('nav-menu')
    const navToggle = document.getElementById('nav-toggle')
    
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active')
      navToggle.classList.remove('active')
    }
  }
  
  // Adjust email alternatives popup position
  const emailAlternatives = document.getElementById('email-alternatives')
  if (emailAlternatives) {
    if (viewport <= 768) {
      emailAlternatives.style.left = '10px'
      emailAlternatives.style.right = '10px'
      emailAlternatives.style.maxWidth = 'none'
    } else {
      emailAlternatives.style.left = 'auto'
      emailAlternatives.style.right = '20px'
      emailAlternatives.style.maxWidth = '380px'
    }
  }
}

// Throttled resize handler
let resizeTimeout
function throttledResize() {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(handleResize, 150)
}

// Enhanced mobile menu functionality - REMOVED (duplicate function)

// Enhanced touch and swipe support for mobile
function setupTouchSupport() {
  let startX, startY
  
  document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
  }, { passive: true })
  
  document.addEventListener('touchmove', (e) => {
    if (!startX || !startY) return
    
    const diffX = startX - e.touches[0].clientX
    const diffY = startY - e.touches[0].clientY
    
    // Prevent horizontal scroll on mobile when swiping vertically
    if (Math.abs(diffY) > Math.abs(diffX)) {
      // Vertical swipe - allow default behavior
      return
    }
    
    // Horizontal swipe - prevent if not in a scrollable container
    const target = e.target.closest('.product-grid, .featured-grid')
    if (!target) {
      e.preventDefault()
    }
  }, { passive: false })
}

// Enhanced image loading for responsive images
function setupResponsiveImages() {
  const images = document.querySelectorAll('img[data-src]')
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        const viewport = window.innerWidth
        
        // Load different image sizes based on viewport
        let imageSrc = img.dataset.src
        
        if (viewport <= 480) {
          imageSrc = img.dataset.srcSmall || img.dataset.src
        } else if (viewport <= 768) {
          imageSrc = img.dataset.srcMedium || img.dataset.src
        } else {
          imageSrc = img.dataset.srcLarge || img.dataset.src
        }
        
        img.src = imageSrc
        img.classList.remove('lazy')
        observer.unobserve(img)
      }
    })
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  })
  
  images.forEach(img => imageObserver.observe(img))
}

// Check if device supports hover
function checkHoverSupport() {
  if (window.matchMedia('(hover: none)').matches) {
    document.body.classList.add('no-hover')
  } else {
    document.body.classList.add('has-hover')
  }
}

// Make functions globally available
window.openModal = openModal
window.scrollToSection = scrollToSection
window.toggleCompare = toggleCompare
window.removeFromCompare = removeFromCompare
window.addToCart = addToCart
window.removeFromCart = removeFromCart
window.updateCartQuantity = updateCartQuantity
window.changeQuantity = changeQuantity
window.openCart = openCart
window.closeCart = closeCart
window.checkout = checkout
window.openChat = openChat
window.closeChat = closeChat
window.sendMessage = sendMessage
window.handleChatKeyPress = handleChatKeyPress
window.openVendorDetail = openVendorDetail
window.closeVendorModal = closeVendorModal
window.viewVendorProducts = viewVendorProducts
window.startChatWithVendor = startChatWithVendor
window.processPayment = processPayment
window.closePaymentDemo = closePaymentDemo
window.closeCompare = closeCompare
window.showComparison = showComparison
window.retryLoadProducts = retryLoadProducts
window.copyEmail = copyEmail

// Add event listener for initial resize
window.addEventListener('resize', throttledResize)
