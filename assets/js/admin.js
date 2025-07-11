// Admin Dashboard JavaScript
let vendors = []
let products = []
let orders = []
let chats = []
let currentSection = 'dashboard'

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadData()
    setupNavigation()
    setupCharts()
    showSection('dashboard')
})

// Load initial data
async function loadData() {
    try {
        // Load vendors data
        const vendorsResponse = await fetch('../data/vendors.json')
        vendors = await vendorsResponse.json()
        
        // Load chats data
        const chatsResponse = await fetch('../data/chats.json')
        chats = await chatsResponse.json()
        
        // Generate sample products for admin (simplified)
        generateSampleProducts()
        
        // Generate sample orders
        generateSampleOrders()
        
        // Render initial data
        renderVendorsTable()
        renderProductsTable()
        renderOrdersTable()
        renderChatsTable()
        updateDashboardStats()
        
    } catch (error) {
        console.error('Error loading data:', error)
        showMessage('Error loading data', 'error')
    }
}

// Generate sample products for admin
function generateSampleProducts() {
    products = [
        {
            id: 1,
            name: "LexaPhone Pro Max",
            category: "smartphone",
            price: 15999000,
            vendorId: 1,
            vendorName: "LexaGear Official",
            status: "approved",
            stock: 50,
            sold: 1200,
            dateAdded: "2024-11-15"
        },
        {
            id: 2,
            name: "LexaBook Ultra",
            category: "laptop",
            price: 25999000,
            vendorId: 1,
            vendorName: "LexaGear Official",
            status: "approved",
            stock: 30,
            sold: 850,
            dateAdded: "2024-11-10"
        },
        {
            id: 3,
            name: "LexaPods Elite",
            category: "audio",
            price: 2999000,
            vendorId: 2,
            vendorName: "Tekno Nusantara",
            status: "pending",
            stock: 100,
            sold: 0,
            dateAdded: "2024-12-20"
        }
    ]
}

// Generate sample orders data
function generateSampleOrders() {
    orders = [
        {
            id: 'ORD-001',
            customerId: 101,
            customerName: 'Ahmad Rizki',
            vendorId: 1,
            vendorName: 'LexaGear Official',
            items: [
                { productId: 1, productName: 'LexaPhone Pro Max', quantity: 1, price: 15999000 }
            ],
            totalAmount: 15999000,
            status: 'completed',
            orderDate: '2024-12-15',
            paymentMethod: 'credit_card'
        },
        {
            id: 'ORD-002',
            customerId: 102,
            customerName: 'Siti Nurhaliza',
            vendorId: 2,
            vendorName: 'Tekno Nusantara',
            items: [
                { productId: 3, productName: 'LexaPods Elite', quantity: 2, price: 2999000 }
            ],
            totalAmount: 5998000,
            status: 'pending',
            orderDate: '2024-12-20',
            paymentMethod: 'bank_transfer'
        },
        {
            id: 'ORD-003',
            customerId: 103,
            customerName: 'Dedi Kurniawan',
            vendorId: 1,
            vendorName: 'LexaGear Official',
            items: [
                { productId: 2, productName: 'LexaBook Ultra', quantity: 1, price: 25999000 }
            ],
            totalAmount: 25999000,
            status: 'processing',
            orderDate: '2024-12-18',
            paymentMethod: 'credit_card'
        }
    ]
}

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault()
            const section = this.dataset.section
            showSection(section)
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        })
    })
}

// Show specific section
function showSection(sectionName) {
    currentSection = sectionName
    
    // Hide all sections
    const sections = document.querySelectorAll('.content-section')
    sections.forEach(section => section.classList.remove('active'))
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + '-section')
    if (targetSection) {
        targetSection.classList.add('active')
    }
    
    // Update page title
    const pageTitle = document.getElementById('page-title')
    pageTitle.textContent = getSectionTitle(sectionName)
    
    // Load section-specific data
    switch(sectionName) {
        case 'vendors':
            renderVendorsTable()
            break
        case 'products':
            renderProductsTable()
            break
        case 'reports':
            generateReport()
            break
        case 'analytics':
            updateAnalytics()
            break
    }
}

// Get section title
function getSectionTitle(sectionName) {
    const titles = {
        'dashboard': 'Dashboard',
        'vendors': 'Manajemen Vendor',
        'products': 'Moderasi Produk',
        'orders': 'Pesanan',
        'reports': 'Laporan Penjualan',
        'analytics': 'Analytics',
        'settings': 'Pengaturan'
    }
    return titles[sectionName] || 'Dashboard'
}

// Update dashboard stats
function updateDashboardStats() {
    // Update stat cards
    document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = vendors.length
    document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = products.length
    document.querySelector('.stat-card:nth-child(3) .stat-number').textContent = orders.length
    
    // Calculate total sales
    const totalSales = orders.reduce((sum, order) => sum + order.totalAmount, 0)
    document.querySelector('.stat-card:nth-child(4) .stat-number').textContent = formatCurrency(totalSales)
}

// Render vendors table
function renderVendorsTable() {
    const vendorsSection = document.getElementById('vendors-section')
    if (!vendorsSection) return
    
    const tableHTML = `
        <div class="table-header">
            <h3>Daftar Vendor UMKM</h3>
            <button class="btn btn-primary" onclick="addVendor()">+ Tambah Vendor</button>
        </div>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Vendor</th>
                        <th>Kategori</th>
                        <th>Kota</th>
                        <th>Status</th>
                        <th>Produk</th>
                        <th>Rating</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    ${vendors.map(vendor => `
                        <tr>
                            <td>${vendor.id}</td>
                            <td>
                                <div class="vendor-info">
                                    <img src="${vendor.logo}" alt="${vendor.name}" class="vendor-logo">
                                    <div>
                                        <strong>${vendor.name}</strong>
                                        <small>${vendor.description}</small>
                                    </div>
                                </div>
                            </td>
                            <td>${vendor.category}</td>
                            <td>${vendor.location}</td>
                            <td>
                                <span class="status-badge ${vendor.status}">
                                    ${vendor.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                                </span>
                            </td>
                            <td>${vendor.productCount || 0}</td>
                            <td>
                                <div class="rating">
                                    <span class="rating-value">${vendor.rating}</span>
                                    <span class="rating-stars">⭐</span>
                                </div>
                            </td>
                            <td>
                                <div class="action-buttons">
                                    <button class="btn-action edit" onclick="editVendor(${vendor.id})">Edit</button>
                                    <button class="btn-action ${vendor.status === 'active' ? 'disable' : 'enable'}" 
                                            onclick="toggleVendorStatus(${vendor.id})">
                                        ${vendor.status === 'active' ? 'Nonaktifkan' : 'Aktifkan'}
                                    </button>
                                    <button class="btn-action delete" onclick="deleteVendor(${vendor.id})">Hapus</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `
    vendorsSection.innerHTML = tableHTML
}

// Render products table
function renderProductsTable() {
    const productsSection = document.getElementById('products-section')
    if (!productsSection) return
    
    const tableHTML = `
        <div class="table-header">
            <h3>Moderasi Produk</h3>
            <div class="filter-controls">
                <select onchange="filterProducts(this.value)">
                    <option value="all">Semua Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Disetujui</option>
                    <option value="rejected">Ditolak</option>
                </select>
            </div>
        </div>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Produk</th>
                        <th>Vendor</th>
                        <th>Kategori</th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th>Status</th>
                        <th>Tanggal</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(product => `
                        <tr>
                            <td>${product.id}</td>
                            <td>
                                <div class="product-info">
                                    <strong>${product.name}</strong>
                                    <small>${product.category}</small>
                                </div>
                            </td>
                            <td>${product.vendorName}</td>
                            <td>${product.category}</td>
                            <td>${formatCurrency(product.price)}</td>
                            <td>${product.stock}</td>
                            <td>
                                <span class="status-badge ${product.status}">
                                    ${getStatusLabel(product.status)}
                                </span>
                            </td>
                            <td>${formatDate(product.dateAdded)}</td>
                            <td>
                                <div class="action-buttons">
                                    ${product.status === 'pending' ? `
                                        <button class="btn-action approve" onclick="approveProduct(${product.id})">Setujui</button>
                                        <button class="btn-action reject" onclick="rejectProduct(${product.id})">Tolak</button>
                                    ` : ''}
                                    <button class="btn-action edit" onclick="editProduct(${product.id})">Edit</button>
                                    <button class="btn-action delete" onclick="deleteProduct(${product.id})">Hapus</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `
    productsSection.innerHTML = tableHTML
}

// Render orders table
function renderOrdersTable() {
    const ordersSection = document.getElementById('orders-section')
    if (!ordersSection) return
    
    const tableHTML = `
        <div class="table-header">
            <h3>Manajemen Pesanan</h3>
            <div class="filter-controls">
                <select onchange="filterOrders(this.value)">
                    <option value="all">Semua Status</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Diproses</option>
                    <option value="completed">Selesai</option>
                    <option value="cancelled">Dibatalkan</option>
                </select>
            </div>
        </div>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>ID Pesanan</th>
                        <th>Pelanggan</th>
                        <th>Vendor</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Tanggal</th>
                        <th>Pembayaran</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    ${orders.map(order => `
                        <tr>
                            <td><strong>${order.id}</strong></td>
                            <td>${order.customerName}</td>
                            <td>${order.vendorName}</td>
                            <td>${formatCurrency(order.totalAmount)}</td>
                            <td>
                                <span class="status-badge ${order.status}">
                                    ${getStatusLabel(order.status)}
                                </span>
                            </td>
                            <td>${formatDate(order.orderDate)}</td>
                            <td>${order.paymentMethod}</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="btn-action view" onclick="viewOrder('${order.id}')">Detail</button>
                                    <button class="btn-action edit" onclick="updateOrderStatus('${order.id}')">Update Status</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `
    ordersSection.innerHTML = tableHTML
}

// Render chats table
function renderChatsTable() {
    const chatsSection = document.getElementById('chats-section')
    if (!chatsSection) return
    
    const tableHTML = `
        <div class="table-header">
            <h3>Moderasi Chat</h3>
            <div class="filter-controls">
                <select onchange="filterChats(this.value)">
                    <option value="all">Semua Chat</option>
                    <option value="active">Chat Aktif</option>
                    <option value="flagged">Perlu Moderasi</option>
                </select>
            </div>
        </div>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>ID Chat</th>
                        <th>Pelanggan</th>
                        <th>Vendor</th>
                        <th>Produk</th>
                        <th>Pesan Terakhir</th>
                        <th>Status</th>
                        <th>Waktu</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    ${chats.slice(0, 10).map(chat => `
                        <tr>
                            <td>${chat.id}</td>
                            <td>${chat.customerName}</td>
                            <td>${chat.vendorName}</td>
                            <td>${chat.productName}</td>
                            <td>
                                <div class="message-preview">
                                    ${chat.messages[chat.messages.length - 1]?.text?.substring(0, 50) || 'Tidak ada pesan'}...
                                </div>
                            </td>
                            <td>
                                <span class="status-badge ${chat.status || 'active'}">
                                    ${chat.status === 'flagged' ? 'Perlu Moderasi' : 'Normal'}
                                </span>
                            </td>
                            <td>${formatDate(chat.lastMessageTime)}</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="btn-action view" onclick="viewChat('${chat.id}')">Lihat</button>
                                    <button class="btn-action moderate" onclick="moderateChat('${chat.id}')">Moderasi</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `
    chatsSection.innerHTML = tableHTML
}

// Admin action functions
function addVendor() {
    const vendorModal = document.getElementById('vendor-modal')
    if (vendorModal) {
        // Clear form
        const form = document.getElementById('vendor-form')
        if (form) {
            form.reset()
        }
        
        // Show modal with proper class
        vendorModal.style.display = 'flex'
        vendorModal.classList.add('show')
        
        // Add event listeners
        setupVendorModalEvents()
    }
}

function editVendor(vendorId) {
    const vendor = vendors.find(v => v.id === vendorId)
    if (!vendor) return
    
    showModal('Edit Vendor', `
        <form id="editVendorForm">
            <div class="form-group">
                <label>Nama Vendor</label>
                <input type="text" id="editVendorName" value="${vendor.name}" required>
            </div>
            <div class="form-group">
                <label>Status</label>
                <select id="editVendorStatus" required>
                    <option value="active" ${vendor.status === 'active' ? 'selected' : ''}>Aktif</option>
                    <option value="inactive" ${vendor.status === 'inactive' ? 'selected' : ''}>Tidak Aktif</option>
                </select>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button>
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    `)
    
    document.getElementById('editVendorForm').onsubmit = function(e) {
        e.preventDefault()
        showMessage('Vendor berhasil diupdate', 'success')
        closeModal()
        renderVendorsTable()
    }
}

function toggleVendorStatus(vendorId) {
    const vendor = vendors.find(v => v.id === vendorId)
    if (!vendor) return
    
    vendor.status = vendor.status === 'active' ? 'inactive' : 'active'
    showMessage(`Vendor ${vendor.status === 'active' ? 'diaktifkan' : 'dinonaktifkan'}`, 'success')
    renderVendorsTable()
}

function deleteVendor(vendorId) {
    if (confirm('Apakah Anda yakin ingin menghapus vendor ini?')) {
        const index = vendors.findIndex(v => v.id === vendorId)
        if (index > -1) {
            vendors.splice(index, 1)
            showMessage('Vendor berhasil dihapus', 'success')
            renderVendorsTable()
            updateDashboardStats()
        }
    }
}

function approveProduct(productId) {
    const product = products.find(p => p.id === productId)
    if (product) {
        product.status = 'approved'
        showMessage('Produk berhasil disetujui', 'success')
        renderProductsTable()
    }
}

function rejectProduct(productId) {
    const product = products.find(p => p.id === productId)
    if (product) {
        product.status = 'rejected'
        showMessage('Produk ditolak', 'warning')
        renderProductsTable()
    }
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId)
    if (!product) return
    
    showModal('Edit Produk', `
        <form id="editProductForm">
            <div class="form-group">
                <label>Nama Produk</label>
                <input type="text" id="editProductName" value="${product.name}" required>
            </div>
            <div class="form-group">
                <label>Harga</label>
                <input type="number" id="editProductPrice" value="${product.price}" required>
            </div>
            <div class="form-group">
                <label>Stok</label>
                <input type="number" id="editProductStock" value="${product.stock}" required>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button>
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    `)
    
    document.getElementById('editProductForm').onsubmit = function(e) {
        e.preventDefault()
        showMessage('Produk berhasil diupdate', 'success')
        closeModal()
        renderProductsTable()
    }
}

function deleteProduct(productId) {
    if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
        const index = products.findIndex(p => p.id === productId)
        if (index > -1) {
            products.splice(index, 1)
            showMessage('Produk berhasil dihapus', 'success')
            renderProductsTable()
            updateDashboardStats()
        }
    }
}

function viewOrder(orderId) {
    const order = orders.find(o => o.id === orderId)
    if (!order) return
    
    showModal('Detail Pesanan', `
        <div class="order-detail">
            <h4>Pesanan ${order.id}</h4>
            <div class="order-info">
                <p><strong>Pelanggan:</strong> ${order.customerName}</p>
                <p><strong>Vendor:</strong> ${order.vendorName}</p>
                <p><strong>Total:</strong> ${formatCurrency(order.totalAmount)}</p>
                <p><strong>Status:</strong> ${getStatusLabel(order.status)}</p>
                <p><strong>Tanggal:</strong> ${formatDate(order.orderDate)}</p>
            </div>
            <h5>Item Pesanan:</h5>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item.productName}</span>
                        <span>Qty: ${item.quantity}</span>
                        <span>${formatCurrency(item.price)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `)
}

function updateOrderStatus(orderId) {
    const order = orders.find(o => o.id === orderId)
    if (!order) return
    
    showModal('Update Status Pesanan', `
        <form id="updateOrderForm">
            <div class="form-group">
                <label>Status Pesanan</label>
                <select id="orderStatus" required>
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Diproses</option>
                    <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>Selesai</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Dibatalkan</option>
                </select>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button>
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    `)
    
    document.getElementById('updateOrderForm').onsubmit = function(e) {
        e.preventDefault()
        order.status = document.getElementById('orderStatus').value
        showMessage('Status pesanan berhasil diupdate', 'success')
        closeModal()
        renderOrdersTable()
    }
}

function viewChat(chatId) {
    const chat = chats.find(c => c.id === chatId)
    if (!chat) return
    
    showModal('Detail Chat', `
        <div class="chat-detail">
            <h4>Chat ${chat.id}</h4>
            <div class="chat-info">
                <p><strong>Pelanggan:</strong> ${chat.customerName}</p>
                <p><strong>Vendor:</strong> ${chat.vendorName}</p>
                <p><strong>Produk:</strong> ${chat.productName}</p>
            </div>
            <div class="chat-messages">
                ${chat.messages.map(msg => `
                    <div class="message ${msg.sender === 'customer' ? 'customer' : 'vendor'}">
                        <strong>${msg.sender === 'customer' ? 'Pelanggan' : 'Vendor'}:</strong>
                        <p>${msg.text}</p>
                        <small>${formatDate(msg.timestamp)}</small>
                    </div>
                `).join('')}
            </div>
        </div>
    `)
}

function moderateChat(chatId) {
    const chat = chats.find(c => c.id === chatId)
    if (!chat) return
    
    showModal('Moderasi Chat', `
        <form id="moderateForm">
            <div class="form-group">
                <label>Tindakan</label>
                <select id="moderationAction" required>
                    <option value="flag">Tandai sebagai Bermasalah</option>
                    <option value="unflag">Hapus Tanda Bermasalah</option>
                    <option value="block">Blokir Chat</option>
                </select>
            </div>
            <div class="form-group">
                <label>Catatan</label>
                <textarea id="moderationNote" rows="3" placeholder="Alasan moderasi..."></textarea>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button>
                <button type="submit" class="btn btn-primary">Moderasi</button>
            </div>
        </form>
    `)
    
    document.getElementById('moderateForm').onsubmit = function(e) {
        e.preventDefault()
        const action = document.getElementById('moderationAction').value
        chat.moderationStatus = action
        showMessage('Chat berhasil dimoderasi', 'success')
        closeModal()
        renderChatsTable()
    }
}

// Settings functions
function saveSettings() {
    // Save general settings
    const generalForm = document.getElementById('generalSettings')
    const paymentForm = document.getElementById('paymentSettings')
    const moderationForm = document.getElementById('moderationSettings')
    const notificationForm = document.getElementById('notificationSettings')
    
    // In a real app, this would save to a backend API
    showMessage('Pengaturan berhasil disimpan', 'success')
}

function resetSettings() {
    if (confirm('Apakah Anda yakin ingin mengembalikan pengaturan ke default?')) {
        // Reset all form values to default
        showMessage('Pengaturan berhasil direset', 'success')
    }
}

// Initialize responsive features
function initResponsive() {
    // Add mobile menu toggle
    const mobileMenuToggle = document.createElement('button')
    mobileMenuToggle.innerHTML = '☰'
    mobileMenuToggle.className = 'mobile-menu-toggle'
    mobileMenuToggle.style.cssText = `
        display: none;
        background: #3498db;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 1.2rem;
        cursor: pointer;
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1001;
    `
    
    document.body.appendChild(mobileMenuToggle)
    
    // Show mobile menu toggle on small screens
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block'
        } else {
            mobileMenuToggle.style.display = 'none'
            document.querySelector('.sidebar').classList.remove('active')
        }
    }
    
    mobileMenuToggle.addEventListener('click', function() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('active')
    })
    
    window.addEventListener('resize', checkScreenSize)
    checkScreenSize()
}

// Add mobile menu toggle styles
const mobileStyles = `
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block !important;
        }
        
        .sidebar {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
        }
        
        .sidebar.active {
            transform: translateX(0);
        }
        
        .main-content {
            margin-left: 0;
            padding-top: 4rem;
        }
    }
`

const mobileStyleSheet = document.createElement('style')
mobileStyleSheet.textContent = mobileStyles
document.head.appendChild(mobileStyleSheet)

// Initialize responsive features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initResponsive()
})

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount)
}

function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

function getStatusLabel(status) {
    const labels = {
        'pending': 'Pending',
        'processing': 'Diproses',
        'completed': 'Selesai',
        'cancelled': 'Dibatalkan',
        'approved': 'Disetujui',
        'rejected': 'Ditolak',
        'active': 'Aktif',
        'inactive': 'Tidak Aktif'
    }
    return labels[status] || status
}

function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div')
    messageDiv.className = `message ${type}`
    messageDiv.textContent = message
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#b8daff'};
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `
    
    document.body.appendChild(messageDiv)
    
    setTimeout(() => {
        messageDiv.remove()
    }, 3000)
}

function showModal(title, content) {
    const modal = document.createElement('div')
    modal.className = 'modal-overlay'
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="closeModal()">×</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `
    
    document.body.appendChild(modal)
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `
    
    const modalContent = modal.querySelector('.modal-content')
    modalContent.style.cssText = `
        background: white;
        padding: 0;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `
    
    // Close on outside click
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal()
        }
    }
}

function closeModal(modalId = null) {
    if (modalId) {
        const modal = document.getElementById(modalId)
        if (modal) {
            modal.style.display = 'none'
            modal.classList.remove('show')
        }
    } else {
        // Close any dynamic modals (existing functionality)
        const modal = document.querySelector('.modal-overlay')
        if (modal) {
            modal.remove()
        }
        
        // Also close any static modals that might be open
        const staticModals = document.querySelectorAll('.modal')
        staticModals.forEach(modal => {
            modal.style.display = 'none'
            modal.classList.remove('show')
        })
    }
}

function showNotifications() {
    showModal('Notifikasi', `
        <div class="notifications">
            <div class="notification-item">
                <div class="notification-icon">🏪</div>
                <div class="notification-content">
                    <h4>Vendor baru menunggu persetujuan</h4>
                    <p>Tekno Nusantara telah mendaftar sebagai vendor</p>
                    <small>2 jam yang lalu</small>
                </div>
            </div>
            <div class="notification-item">
                <div class="notification-icon">📦</div>
                <div class="notification-content">
                    <h4>Produk baru menunggu moderasi</h4>
                    <p>5 produk baru perlu di-review</p>
                    <small>4 jam yang lalu</small>
                </div>
            </div>
            <div class="notification-item">
                <div class="notification-icon">💬</div>
                <div class="notification-content">
                    <h4>Chat perlu moderasi</h4>
                    <p>2 chat dilaporkan oleh pengguna</p>
                    <small>6 jam yang lalu</small>
                </div>
            </div>
        </div>
    `)
}

function logout() {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
        window.location.href = '../index.html'
    }
}

// Setup charts
function setupCharts() {
    // This would normally use Chart.js or similar library
    // For now, we'll just create a placeholder
    const canvas = document.getElementById('salesChart')
    if (canvas) {
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#3498db'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'white'
        ctx.font = '16px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('Grafik Penjualan', canvas.width/2, canvas.height/2)
    }
}

// Generate reports
function generateReport() {
    const reportsSection = document.getElementById('reports-section')
    if (!reportsSection) return
    
    const reportHTML = `
        <div class="reports-container">
            <div class="report-filters">
                <h3>Filter Laporan</h3>
                <div class="filter-row">
                    <select id="reportType">
                        <option value="sales">Penjualan</option>
                        <option value="products">Produk</option>
                        <option value="vendors">Vendor</option>
                    </select>
                    <select id="reportPeriod">
                        <option value="today">Hari Ini</option>
                        <option value="week">Minggu Ini</option>
                        <option value="month">Bulan Ini</option>
                        <option value="year">Tahun Ini</option>
                    </select>
                    <button class="btn btn-primary" onclick="generateReportData()">Generate</button>
                </div>
            </div>
            
            <div class="report-summary">
                <h3>Ringkasan Laporan</h3>
                <div class="summary-grid">
                    <div class="summary-item">
                        <h4>Total Penjualan</h4>
                        <p class="summary-value">${formatCurrency(orders.reduce((sum, o) => sum + o.totalAmount, 0))}</p>
                    </div>
                    <div class="summary-item">
                        <h4>Total Transaksi</h4>
                        <p class="summary-value">${orders.length}</p>
                    </div>
                    <div class="summary-item">
                        <h4>Rata-rata Transaksi</h4>
                        <p class="summary-value">${formatCurrency(orders.reduce((sum, o) => sum + o.totalAmount, 0) / orders.length)}</p>
                    </div>
                    <div class="summary-item">
                        <h4>Vendor Aktif</h4>
                        <p class="summary-value">${vendors.filter(v => v.status === 'active').length}</p>
                    </div>
                </div>
            </div>
            
            <div class="report-chart">
                <h3>Grafik Penjualan</h3>
                <canvas id="reportChart" width="600" height="300"></canvas>
            </div>
        </div>
    `
    reportsSection.innerHTML = reportHTML
}

function generateReportData() {
    showMessage('Laporan berhasil di-generate', 'success')
}

// Update analytics
function updateAnalytics() {
    const analyticsSection = document.getElementById('analytics-section')
    if (!analyticsSection) return
    
    const analyticsHTML = `
        <div class="analytics-container">
            <div class="analytics-header">
                <h3>Analytics Dashboard</h3>
                <div class="date-range">
                    <input type="date" id="startDate">
                    <input type="date" id="endDate">
                    <button class="btn btn-primary" onclick="updateAnalyticsData()">Update</button>
                </div>
            </div>
            
            <div class="analytics-grid">
                <div class="analytics-card">
                    <h4>Performa Penjualan</h4>
                    <div class="metric">
                        <span class="metric-label">Revenue Growth</span>
                        <span class="metric-value positive">+15.2%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Conversion Rate</span>
                        <span class="metric-value">3.4%</span>
                    </div>
                </div>
                
                <div class="analytics-card">
                    <h4>Produk Terlaris</h4>
                    <div class="top-products">
                        <div class="product-rank">
                            <span>1. LexaPhone Pro Max</span>
                            <span>1,200 terjual</span>
                        </div>
                        <div class="product-rank">
                            <span>2. LexaBook Ultra</span>
                            <span>850 terjual</span>
                        </div>
                        <div class="product-rank">
                            <span>3. LexaPods Elite</span>
                            <span>640 terjual</span>
                        </div>
                    </div>
                </div>
                
                <div class="analytics-card">
                    <h4>Vendor Teratas</h4>
                    <div class="top-vendors">
                        <div class="vendor-rank">
                            <span>1. LexaGear Official</span>
                            <span>Rating: 4.8/5</span>
                        </div>
                        <div class="vendor-rank">
                            <span>2. Tekno Nusantara</span>
                            <span>Rating: 4.6/5</span>
                        </div>
                        <div class="vendor-rank">
                            <span>3. Kreatif Lokal</span>
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
                
                <div class="analytics-card">
                    <h4>Statistik Pengguna</h4>
                    <div class="user-stats">
                        <div class="stat">
                            <span>Total Pengguna</span>
                            <span>15,432</span>
                        </div>
                        <div class="stat">
                            <span>Pengguna Aktif</span>
                            <span>8,765</span>
                        </div>
                        <div class="stat">
                            <span>Pengguna Baru</span>
                            <span>234</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    analyticsSection.innerHTML = analyticsHTML
}

function updateAnalyticsData() {
    showMessage('Data analytics berhasil diupdate', 'success')
}

// Filter functions
function filterProducts(status) {
    // Filter product table based on status
    const filteredProducts = status === 'all' ? products : products.filter(p => p.status === status)
    // Re-render table with filtered data
    renderProductsTable()
}

function filterOrders(status) {
    // Filter orders table based on status
    const filteredOrders = status === 'all' ? orders : orders.filter(o => o.status === status)
    // Re-render table with filtered data
    renderOrdersTable()
}

function filterChats(status) {
    // Filter chats table based on status
    // Re-render table with filtered data
    renderChatsTable()
}

// Specific function to handle the existing vendor modal in HTML
function addVendor() {
    const vendorModal = document.getElementById('vendor-modal')
    if (vendorModal) {
        // Clear form
        const form = document.getElementById('vendor-form')
        if (form) {
            form.reset()
        }
        
        // Show modal with proper class
        vendorModal.style.display = 'flex'
        vendorModal.classList.add('show')
        
        // Add event listeners
        setupVendorModalEvents()
    }
}

// Function to close specific modal by ID
function closeModal(modalId = null) {
    if (modalId) {
        const modal = document.getElementById(modalId)
        if (modal) {
            modal.style.display = 'none'
            modal.classList.remove('show')
        }
    } else {
        // Close any dynamic modals (existing functionality)
        const modal = document.querySelector('.modal-overlay')
        if (modal) {
            modal.remove()
        }
        
        // Also close any static modals that might be open
        const staticModals = document.querySelectorAll('.modal')
        staticModals.forEach(modal => {
            modal.style.display = 'none'
            modal.classList.remove('show')
        })
    }
}

// Setup event listeners for vendor modal
function setupVendorModalEvents() {
    const vendorForm = document.getElementById('vendor-form')
    const vendorModal = document.getElementById('vendor-modal')
    
    if (vendorForm) {
        // Remove existing listeners
        vendorForm.onsubmit = null
        
        // Add new submit listener
        vendorForm.onsubmit = function(e) {
            e.preventDefault()
            
            // Get form data
            const formData = {
                name: document.getElementById('vendor-name').value,
                owner: document.getElementById('vendor-owner').value,
                location: document.getElementById('vendor-location').value,
                description: document.getElementById('vendor-description').value
            }
            
            // Validate required fields
            if (!formData.name || !formData.owner || !formData.location) {
                showMessage('Mohon lengkapi semua field yang wajib diisi', 'error')
                return
            }
            
            // Add vendor to list (simulate API call)
            const newVendor = {
                id: vendors.length + 1,
                name: formData.name,
                owner: formData.owner,
                location: formData.location,
                description: formData.description,
                status: 'active',
                rating: 0,
                products: 0,
                joinDate: new Date().toISOString().split('T')[0]
            }
            
            vendors.push(newVendor)
            
            // Show success message
            showMessage('Vendor berhasil ditambahkan!', 'success')
            
            // Close modal and refresh table
            closeModal('vendor-modal')
            renderVendorsTable()
        }
    }
    
    // Close modal when clicking outside
    if (vendorModal) {
        vendorModal.onclick = function(e) {
            if (e.target === vendorModal) {
                closeModal('vendor-modal')
            }
        }
    }
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal('vendor-modal')
        }
    })
}

// Initialize modal setup when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code...
    loadData()
    setupNavigation()
    setupCharts()
    showSection('dashboard')
    
    // Setup static modals
    setupStaticModals()
})

// Function to setup all static modals
function setupStaticModals() {
    // Setup vendor modal
    const vendorModal = document.getElementById('vendor-modal')
    if (vendorModal) {
        // Ensure modal is hidden initially
        vendorModal.style.display = 'none'
        vendorModal.classList.remove('show')
    }
}
