// Sample product data
const products = [
    {
        id: '1',
        name: 'Elegant Evening Dress',
        price: 129,
        originalPrice: 159,
        image: 'https://images.unsplash.com/photo-1566479179817-c8e2f5b9ecfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Dresses',
        rating: 4.5,
        reviews: 24,
        isNew: true,
        isSale: true,
        colors: ['#000000', '#8B4513', '#000080']
    },
    {
        id: '2',
        name: 'Casual Cotton Blouse',
        price: 45,
        image: 'https://images.unsplash.com/photo-1564257631407-2ba7bd3dffbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Tops',
        rating: 4.2,
        reviews: 18,
        colors: ['#FFFFFF', '#FFB6C1', '#87CEEB']
    },
    {
        id: '3',
        name: 'Designer Handbag',
        price: 89,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Accessories',
        rating: 4.8,
        reviews: 42,
        isNew: true,
        colors: ['#8B4513', '#000000', '#696969']
    },
    {
        id: '4',
        name: 'Vintage Denim Jacket',
        price: 75,
        originalPrice: 95,
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Outerwear',
        rating: 4.6,
        reviews: 31,
        isSale: true,
        colors: ['#4169E1', '#000080', '#1E90FF']
    },
    {
        id: '5',
        name: 'Silk Scarf Collection',
        price: 35,
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Accessories',
        rating: 4.3,
        reviews: 15,
        colors: ['#FF69B4', '#FFD700', '#FF6347']
    },
    {
        id: '6',
        name: 'Professional Blazer',
        price: 110,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Outerwear',
        rating: 4.7,
        reviews: 28,
        colors: ['#000000', '#696969', '#000080']
    }
];

// Global state
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
let currentFilters = {
    category: '',
    priceRange: '',
    search: ''
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateCartCount();
    loadPageContent();
    setupEventListeners();
}

function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }

    // Cart button
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', showCart);
    }

    // Wishlist button
    const wishlistBtn = document.getElementById('wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', showWishlist);
    }

    // Filters
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleCategoryFilter);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', handlePriceFilter);
    }
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
}

function loadPageContent() {
    const currentPage = getCurrentPage();
    
    switch (currentPage) {
        case 'index':
            loadFeaturedProducts();
            break;
        case 'catalog':
            loadCatalogProducts();
            break;
        case 'recommendations':
            loadRecommendations();
            break;
        case 'new-series':
            loadNewSeries();
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    return page || 'index';
}

function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (container) {
        const featuredProducts = products.slice(0, 3);
        renderProducts(featuredProducts, container);
    }
}

function loadCatalogProducts() {
    const container = document.getElementById('catalog-products');
    if (container) {
        const filteredProducts = applyFilters(products);
        renderProducts(filteredProducts, container);
    }
}

function loadRecommendations() {
    const trendingContainer = document.getElementById('trending-products');
    const personalizedContainer = document.getElementById('personalized-products');
    const similarContainer = document.getElementById('similar-products');

    if (trendingContainer) {
        renderProducts(products.slice(0, 2), trendingContainer);
    }
    if (personalizedContainer) {
        renderProducts(products.slice(2, 4), personalizedContainer);
    }
    if (similarContainer) {
        renderProducts(products.slice(4, 6), similarContainer);
    }
}

function loadNewSeries() {
    const container = document.getElementById('new-series-products');
    if (container) {
        const newProducts = products.filter(p => p.isNew);
        renderProducts(newProducts, container);
    }
}

function renderProducts(productList, container) {
    if (!container) return;

    if (productList.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    container.innerHTML = productList.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const isInWishlist = wishlist.includes(product.id);
    const stars = createStarRating(product.rating);

    return `
        <div class="product-card fade-in">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                
                <div class="product-badges">
                    ${product.isNew ? '<span class="badge badge-new">NEW</span>' : ''}
                    ${product.isSale && discount > 0 ? `<span class="badge badge-sale">-${discount}%</span>` : ''}
                </div>

                <div class="product-actions">
                    <button class="action-btn" onclick="toggleWishlist('${product.id}')">
                        ${isInWishlist ? '❤️' : '🤍'}
                    </button>
                </div>

                <div class="add-to-cart-overlay">
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                        🛍️ Add to Cart
                    </button>
                </div>
            </div>

            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>

                <div class="product-price">
                    <span class="current-price">$${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                </div>

                ${product.colors ? createColorOptions(product.colors) : ''}
            </div>
        </div>
    `;
}

function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<span class="star filled">⭐</span>';
    }
    
    if (hasHalfStar) {
        stars += '<span class="star half">⭐</span>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<span class="star empty">☆</span>';
    }

    return stars;
}

function createColorOptions(colors) {
    if (!colors || colors.length === 0) return '';

    const visibleColors = colors.slice(0, 4);
    const remainingCount = colors.length - 4;

    return `
        <div class="product-colors">
            <span class="colors-label">Colors:</span>
            <div class="color-options">
                ${visibleColors.map((color, index) => 
                    `<button class="color-option ${index === 0 ? 'selected' : ''}" 
                     style="background-color: ${color}" 
                     onclick="selectColor(this)"></button>`
                ).join('')}
                ${remainingCount > 0 ? `<span class="color-more">+${remainingCount}</span>` : ''}
            </div>
        </div>
    `;
}

function selectColor(button) {
    const colorOptions = button.parentNode.querySelectorAll('.color-option');
    colorOptions.forEach(option => option.classList.remove('selected'));
    button.classList.add('selected');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification(`${product.name} removed from wishlist`);
    } else {
        wishlist.push(productId);
        showNotification(`${product.name} added to wishlist!`);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    loadPageContent(); // Refresh to update heart icons
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function showCart() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }

    const cartItems = cart.map(item => 
        `${item.name} - $${item.price} x ${item.quantity}`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    alert(`Cart Items:\n${cartItems}\n\nTotal: $${total.toFixed(2)}`);
}

function showWishlist() {
    if (wishlist.length === 0) {
        showNotification('Your wishlist is empty');
        return;
    }

    const wishlistItems = wishlist.map(id => {
        const product = products.find(p => p.id === id);
        return product ? product.name : 'Unknown product';
    }).join('\n');
    
    alert(`Wishlist Items:\n${wishlistItems}`);
}

function handleSearch(event) {
    currentFilters.search = event.target.value.toLowerCase();
    loadCatalogProducts();
}

function handleCategoryFilter(event) {
    currentFilters.category = event.target.value;
    loadCatalogProducts();
}

function handlePriceFilter(event) {
    currentFilters.priceRange = event.target.value;
    loadCatalogProducts();
}

function clearFilters() {
    currentFilters = { category: '', priceRange: '', search: '' };
    
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchInput = document.getElementById('search-input');
    
    if (categoryFilter) categoryFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    if (searchInput) searchInput.value = '';
    
    loadCatalogProducts();
}

function applyFilters(productList) {
    return productList.filter(product => {
        // Category filter
        if (currentFilters.category && product.category !== currentFilters.category) {
            return false;
        }

        // Price filter
        if (currentFilters.priceRange) {
            const [min, max] = currentFilters.priceRange.split('-').map(Number);
            if (max) {
                if (product.price < min || product.price > max) return false;
            } else {
                if (product.price < min) return false;
            }
        }

        // Search filter
        if (currentFilters.search) {
            const searchTerm = currentFilters.search.toLowerCase();
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.category.toLowerCase().includes(searchTerm);
        }

        return true;
    });
}

function showNotification(message) {
    // Simple notification - you can enhance this with a proper toast system
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #1a1a1a;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}