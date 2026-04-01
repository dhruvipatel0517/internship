// 1. PRODUCT DATA
const products = [
    {
        id: 1,
        name: "Silver Mist",
        category: "Indoor Plants",
        price: 92.00,
        image: 'images/p1.jpg',
        badge: "New Arrival"
    },
    {
        id: 2,
        name: "Golden Glow",
        category: "Indoor Plants",
        price: 85.00,
        image: 'images/p2.jpg',
        badge: "Popular"
    },
    {
        id: 3,
        name: "Desert Bloom",
        category: "Indoor Plants",
        price: 70.00,
        image: 'images/p3.png',
        badge: ""
    }
];

// 2. CATEGORY DATA (તમારી ઈમેજ મુજબના નામ અને ટ્રાન્સપરન્ટ PNG લિંક્સ)
const categories = [
    { 
        name: "Houseplants", 
        img: "p4.png" 
    },
    { 
        name: "Outdoor Plants", 
        img: "p5.png" 
    },
    { 
        name: "Succulents", 
        img: "p6.png" 
    },
    { 
        name: "Desert Bloom", 
        img: "p4.png" 
    }
];

// 3. FUNCTIONS

// Trending Products
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="text-left group cursor-pointer">
            <div class="relative bg-[#f4f4f4] aspect-square mb-6 flex items-center justify-center overflow-hidden rounded-sm">
                 ${p.badge ? `<span class="absolute top-4 left-4 z-10 bg-white text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm">${p.badge}</span>` : ''}
                 <img src="${p.image}" class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90">
                 <div onclick="addToCart(event)" class="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-sm hover:bg-green-600 hover:text-white">
                    <i class="fas fa-shopping-bag text-xs"></i>
                 </div>
            </div>
            <h3 class="text-lg font-medium text-gray-800 mb-1">${p.name}</h3>
            <p class="text-xs text-gray-400 mb-1 uppercase tracking-wide">${p.category}</p>
            <p class="text-sm font-bold text-gray-900">$${p.price.toFixed(2)}</p>
        </div>
    `).join('');
}

// Our Categories (બિલકુલ ઈમેજ જેવી સેન્ટર ડિઝાઈન)
function renderCategories() {
    const grid = document.getElementById('category-grid');
    if(!grid) return;
    
    grid.innerHTML = categories.map(c => `
        <div class="group cursor-pointer flex flex-col items-center">
            <div class="w-full aspect-square flex items-center justify-center mb-6">
                <img src="${c.img}" 
                     class="max-h-[220px] w-auto object-contain transition-transform duration-500 group-hover:scale-110" 
                     alt="${c.name}">
            </div>
            <h3 class="text-xl font-medium text-[#0a1d37] transition-colors group-hover:text-green-700">
                ${c.name}
            </h3>
        </div>
    `).join('');
}

function renderPopularProducts() {
    const grid = document.getElementById('popular-products-grid');
    if(!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="text-left group cursor-pointer">
            <div class="relative bg-[#f4f4f4] aspect-square mb-6 flex items-center justify-center overflow-hidden rounded-sm">
                 <img src="${p.image}" class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90">
                 <div onclick="addToCart(event)" class="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-sm hover:bg-green-600 hover:text-white">
                    <i class="fas fa-shopping-bag text-xs"></i>
                 </div>
            </div>
            <h3 class="text-lg font-medium text-gray-800 mb-1">${p.name}</h3>
            <p class="text-xs text-gray-400 mb-1 uppercase tracking-wide">${p.category}</p>
            <p class="text-sm font-bold text-gray-900">$${p.price.toFixed(2)}</p>
        </div>
    `).join('');
}

let cartCount = 0;
function addToCart(event) {
    if(event) event.stopPropagation();
    cartCount++;
    const badge = document.getElementById('cart-count');
    if(badge) badge.innerText = cartCount;
}

function scrollToShop() {
    const shopSection = document.getElementById('shop');
    if(shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
}

// 4. INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCategories();
    renderPopularProducts();
});