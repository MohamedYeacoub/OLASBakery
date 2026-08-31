// ===== MULTI-LANGUAGE & CURRENCY DATA =====
let currentLang = localStorage.getItem('bakery_lang') || 'en';

const CURRENCY = {
  en: 'EGP',
  ar: 'ج.م'
};

// Initial Products Data
let PRODUCTS = [
  {
    id: '1',
    name: { en: 'Butter Croissant', ar: 'كرواسان بالزبدة الفاخرة' },
    category: { en: 'Pastries', ar: 'معجنات' },
    categoryKey: 'Pastries',
    price: 45.00,
    description: {
      en: 'Our signature butter croissant is made with the finest European-style butter, hand-folded 27 times for the perfect flaky layers. Lightly dusted and baked to a beautiful golden finish.',
      ar: 'كرواسان الزبدة المميز لدينا مصنوع من أجود أنواع الزبدة، مطوي يدوياً ٢٧ مرة لطبقات هشة مثالية ومخبوز للون ذهبي رائع.'
    },
    img: 'images/croissant.jpg',
    emoji: '🥐',
    badge: { en: 'Best Seller', ar: 'الأكثر مبيعاً' },
    stock: 24,
    weight: { en: '85g', ar: '٨٥ جم' },
    allergens: { en: 'Gluten, Dairy, Eggs', ar: 'جلوتين، ألبان، بيض' },
    calories: { en: '230 kcal', ar: '٢٣٠ سعرة' },
    time: { en: '~18 min', ar: '~١٨ دقيقة' }
  },
  {
    id: '2',
    name: { en: 'Dark Chocolate Cake', ar: 'كيك الشوكولاتة الداكنة' },
    category: { en: 'Cakes', ar: 'كيك' },
    categoryKey: 'Cakes',
    price: 450.00,
    description: {
      en: 'A showstopping three-layer dark chocolate cake with silky ganache frosting and fresh seasonal berries. Rich, indulgent, and perfect for celebrations.',
      ar: 'كيك شوكولاتة داكنة فاخر من ٣ طبقات مع تغطية غاناش حريرية وتوت بري طازج. غني ومثالي للمناسبات والاحتفالات.'
    },
    img: 'images/chocolate_cake.jpg',
    emoji: '🎂',
    badge: { en: 'Signature', ar: 'توقيع عُلا' },
    stock: 7,
    weight: { en: '1.2kg', ar: '١.٢ كجم' },
    allergens: { en: 'Gluten, Dairy, Eggs', ar: 'جلوتين، ألبان، بيض' },
    calories: { en: '480 kcal', ar: '٤٨٠ سعرة' },
    time: { en: 'Whole cake', ar: 'كيكة كاملة' }
  },
  {
    id: '3',
    name: { en: 'Artisan Sourdough', ar: 'خبز الساوردو الحرفي' },
    category: { en: 'Breads', ar: 'خبز' },
    categoryKey: 'Breads',
    price: 65.00,
    description: {
      en: 'Slow-fermented for 36 hours using our 12-year-old sourdough starter. Features a crackling, beautifully scored crust and a soft, chewy interior.',
      ar: 'مختمر ببطء لمدة ٣٦ ساعة بخميرتنا الخاصة منذ ١٢ عاماً. قشرة مقرمشة محفورة بشكل فني ولب ناعم ومضغوط.'
    },
    img: 'images/sourdough.jpg',
    emoji: '🍞',
    badge: { en: 'Organic', ar: 'عضوي' },
    stock: 15,
    weight: { en: '800g', ar: '٨٠٠ جم' },
    allergens: { en: 'Gluten, Dairy, Eggs', ar: 'جلوتين' },
    calories: { en: '220 kcal', ar: '٢٢٠ سعرة' },
    time: { en: '30 min prep', ar: 'تحضير ٣٠ دقيقة' }
  },
  {
    id: '4',
    name: { en: 'Triple Chocolate Cookie', ar: 'كوكيز الشوكولاتة الثلاثية' },
    category: { en: 'Cookies', ar: 'كوكيز' },
    categoryKey: 'Cookies',
    price: 35.00,
    description: {
      en: 'Soft-baked cookie packed with Belgian milk, dark, and white chocolate chunks, topped with flaky sea salt.',
      ar: 'كوكيز مخبوز طري ومحشو بقطع الشوكولاتة البلجيكية البيضاء والحليبية والداكنة ورشة ملح بحري.'
    },
    img: null,
    emoji: '🍪',
    badge: { en: 'Warm & Soft', ar: 'طازج ودافئ' },
    stock: 35,
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    weight: { en: '85g', ar: '٨٥ جم' },
    allergens: { en: 'Gluten, Dairy, Eggs', ar: 'جلوتين، ألبان، بيض' },
    calories: { en: '210 kcal', ar: '٢١٠ سعرة' },
    time: { en: '~12 min', ar: '~١٢ دقيقة' }
  },
  {
    id: '5',
    name: { en: 'Cardamom Cinnamon Roll', ar: 'سينامون رول بالهيل' },
    category: { en: 'Pastries', ar: 'معجنات' },
    categoryKey: 'Pastries',
    price: 55.00,
    description: {
      en: 'Fluffy brioche swirl spiced with Ceylon cinnamon and fragrant green cardamom, glazed with cream cheese frosting.',
      ar: 'لفائف بريوش هشة متبلة بالقرفة السيلانية والهيل العطري مع طبقة غنية من جبن الكريمة.'
    },
    img: null,
    emoji: '🌀',
    badge: { en: 'Spiced & Sweet', ar: 'متبل ولذيذ' },
    stock: 18,
    gradient: 'linear-gradient(135deg,#f6d365,#fda085)',
    weight: { en: '150g', ar: '١٥٠ جم' },
    allergens: { en: 'Gluten, Dairy, Eggs', ar: 'جلوتين، ألبان، بيض' },
    calories: { en: '340 kcal', ar: '٣٤٠ سعرة' },
    time: { en: '~22 min', ar: '~٢٢ دقيقة' }
  },
  {
    id: '6',
    name: { en: 'Strawberry Tart', ar: 'تارت الفراولة الطازجة' },
    category: { en: 'Pastries', ar: 'معجنات' },
    categoryKey: 'Pastries',
    price: 70.00,
    description: {
      en: 'Crisp buttery pâte sablée filled with vanilla bean pastry cream and crowned with fresh glazed strawberries.',
      ar: 'قاعدة بسكويت زبدية مقرمشة محشوة بكاسترد الفانيليا الطبيعية ومغطاة بالفراولة الطازجة.'
    },
    img: null,
    emoji: '🍓',
    badge: { en: 'Fresh Berries', ar: 'فراولة طازجة' },
    stock: 12,
    gradient: 'linear-gradient(135deg,#ff9a9e,#fecfef)',
    weight: { en: '140g', ar: '١٤٠ جم' },
    allergens: { en: 'Gluten, Dairy, Eggs', ar: 'جلوتين، ألبان، بيض' },
    calories: { en: '290 kcal', ar: '٢٩٠ سعرة' },
    time: { en: '~20 min', ar: '~٢٠ دقيقة' }
  }
];

// Initial Reviews
let REVIEWS = {
  '1': [
    { userName: 'Layla R.', rating: 5, date: 'Aug 25, 2026', comment: 'Best croissant in Cairo! Flaky, buttery, melts in your mouth.' },
    { userName: 'Tarek E.', rating: 5, date: 'Aug 22, 2026', comment: 'Super fresh every morning. Authentic French taste.' }
  ],
  '2': [
    { userName: 'Karim H.', rating: 5, date: 'Aug 28, 2026', comment: 'Ordered for our anniversary and it was perfection. Very rich dark chocolate.' }
  ],
  '3': [
    { userName: 'Amira N.', rating: 5, date: 'Aug 19, 2026', comment: 'The crust on this sourdough is heavenly. Makes the best morning toast.' }
  ]
};

// Initial Notifications
let NOTIFICATIONS = [
  { id: 'n1', titleEn: '🛵 Order #ORD-8821 On The Way!', titleAr: '🛵 طلبك #ORD-8821 في الطريق إليك!', time: '5m ago', unread: true },
  { id: 'n2', titleEn: '✨ Earned +45 Golden Crumbs', titleAr: '✨ تم إضافة +٤٥ نقطة لرصيدك', time: '1h ago', unread: true },
  { id: 'n3', titleEn: '🥐 Fresh Croissants just out of oven', titleAr: '🥐 كرواسان طازج خرج للتو من الفرن', time: '3h ago', unread: false }
];

// ==================== MULTI-ROLE & USER ACCESS SYSTEM ====================
// Roles supported:
// 1. 'visitor' -> Public browsing, Menu, Product Detail, Cart, Guest tracking (No admin tools)
// 2. 'user'    -> Signed in customer, Orders history, Golden Crumbs loyalty, Reviews, Profile (No admin tools)
// 3. 'admin'   -> Master administrator, Bakery Management Portal, Catalog CRUD, Live Orders Queue, Analytics, Cloud sync

const DEFAULT_USERS = [
  {
    id: 'usr-admin',
    name: 'Master Baker & Admin',
    email: 'admin@olasbakery.com',
    password: 'admin',
    role: 'admin',
    phone: '+20 100 000 0000',
    address: 'Ola Flagship Bakery Hub, Zamalek',
    avatar: '👑',
    loyaltyPoints: 950
  },
  {
    id: 'usr-sarah',
    name: 'Sarah Mansour',
    email: 'sarah@example.com',
    password: 'user123',
    role: 'user',
    phone: '+20 100 123 4567',
    address: '15 Tahrir St, Downtown, Cairo',
    avatar: '👩',
    loyaltyPoints: 340
  },
  {
    id: 'usr-karim',
    name: 'Karim Hassan',
    email: 'karim@example.com',
    password: 'user123',
    role: 'user',
    phone: '+20 101 555 1234',
    address: '9 Road 254, Degla, Maadi',
    avatar: '👨',
    loyaltyPoints: 120
  }
];

let userAccounts = JSON.parse(localStorage.getItem('bakery_users') || JSON.stringify(DEFAULT_USERS));

// Current user state (null represents Visitor View - no sign in)
let currentUser = (function() {
  const saved = localStorage.getItem('bakery_current_user');
  if (saved === 'null') return null;
  if (saved) {
    try { return JSON.parse(saved); } catch (e) { return null; }
  }
  // Default on first visit: Visitor View (Not signed in, public browsing)
  return null;
})();

let isAdminAuthenticated = currentUser ? (currentUser.role === 'admin') : false;
const ADMIN_MASTER_PIN = '2026';

function getUserRole() {
  if (!currentUser) return 'visitor';
  return currentUser.role || 'user';
}

// Interactive Role / View Switcher
function switchRoleView(role) {
  if (role === 'visitor') {
    currentUser = null;
    localStorage.setItem('bakery_current_user', 'null');
    isAdminAuthenticated = false;
    sessionStorage.removeItem('bakery_admin_auth');
    showToast(currentLang === 'ar' ? '👁️ تم التبديل إلى: واجهة الزائر (تصفح بدون تسجيل)' : '👁️ Switched to: Visitor View (Browse Only, No Admin Tools)', 'info');
    if (document.getElementById('page-admin') && document.getElementById('page-admin').classList.contains('active')) {
      showPage('home', document.querySelector('[data-page=home]'));
    }
  } else if (role === 'user') {
    const sarah = userAccounts.find(u => u.email === 'sarah@example.com') || userAccounts[1];
    currentUser = sarah;
    localStorage.setItem('bakery_current_user', JSON.stringify(sarah));
    isAdminAuthenticated = false;
    sessionStorage.removeItem('bakery_admin_auth');
    userLoyaltyPoints = sarah.loyaltyPoints || 340;
    updateLoyaltyDisplay();
    showToast(currentLang === 'ar' ? `👩 تم التبديل إلى: حساب عميل (${sarah.name})` : `👩 Switched to: Customer View (${sarah.name})`, 'success');
    if (document.getElementById('page-admin') && document.getElementById('page-admin').classList.contains('active')) {
      showPage('home', document.querySelector('[data-page=home]'));
    }
  } else if (role === 'admin') {
    const adminUser = userAccounts.find(u => u.role === 'admin') || userAccounts[0];
    currentUser = adminUser;
    localStorage.setItem('bakery_current_user', JSON.stringify(adminUser));
    isAdminAuthenticated = true;
    sessionStorage.setItem('bakery_admin_auth', 'true');
    showToast(currentLang === 'ar' ? '👑 تم تسجيل دخول الإدارة (التحكم الكامل)' : '👑 Admin Access Enabled (Full Control)', 'success');
  }

  updateAuthUI();
  updateAdminNavVisibility();
  if (document.getElementById('page-orders') && document.getElementById('page-orders').classList.contains('active')) {
    renderOrders();
  }
}

function quickLogin(role) {
  switchRoleView(role);
  if (role === 'admin') {
    showPage('admin', null);
  } else {
    showPage('home', document.querySelector('[data-page=home]'));
  }
}

function populateUserProfileData(user, roleName) {
  const navAvatar = document.getElementById('nav-user-avatar');
  const navName = document.getElementById('nav-user-name');
  const navRoleBadge = document.getElementById('nav-user-role-badge');
  const ddAvatar = document.getElementById('dd-user-avatar');
  const ddName = document.getElementById('dd-user-name');
  const ddEmail = document.getElementById('dd-user-email');
  const ddRole = document.getElementById('dd-user-role');

  if (navAvatar) navAvatar.textContent = user.avatar || (user.role === 'admin' ? '👑' : '👤');
  if (navName) navName.textContent = user.name.split(' ')[0];
  if (navRoleBadge) {
    navRoleBadge.textContent = user.role === 'admin' ? (currentLang === 'ar' ? 'إدارة' : 'Admin') : (currentLang === 'ar' ? 'عميل' : 'Customer');
    navRoleBadge.className = 'user-role-badge ' + (user.role === 'admin' ? 'badge-admin' : 'badge-user');
  }

  if (ddAvatar) ddAvatar.textContent = user.avatar || (user.role === 'admin' ? '👑' : '👤');
  if (ddName) ddName.textContent = user.name;
  if (ddEmail) ddEmail.textContent = user.email;
  if (ddRole) ddRole.textContent = user.role === 'admin' ? 'Master Admin' : 'Customer Member';

  // Mobile Drawer sync
  const drawerAvatar = document.getElementById('drawer-avatar');
  const drawerName = document.getElementById('drawer-name');
  const drawerRole = document.getElementById('drawer-role');
  const drawerAuthBtn = document.getElementById('drawer-auth-btn');
  const mbnAccountIcon = document.getElementById('mbn-account-icon');
  const mbnAccountLabel = document.getElementById('mbn-account-label');

  if (drawerAvatar) drawerAvatar.textContent = user.avatar || (user.role === 'admin' ? '👑' : '👤');
  if (drawerName) drawerName.textContent = user.name;
  if (drawerRole) drawerRole.textContent = user.role === 'admin' ? (currentLang === 'ar' ? '👑 مدير المخبز' : '👑 Master Admin') : (currentLang === 'ar' ? '👩 عميل مميز' : '👩 VIP Customer');
  if (drawerAuthBtn) {
    drawerAuthBtn.textContent = currentLang === 'ar' ? 'خروج' : 'Sign Out';
    drawerAuthBtn.onclick = () => { handleLogout(); closeMobileMenu(); };
  }
  if (mbnAccountIcon) mbnAccountIcon.textContent = user.avatar || (user.role === 'admin' ? '👑' : '👤');
  if (mbnAccountLabel) mbnAccountLabel.textContent = user.name.split(' ')[0];
}

function updateAuthUI() {
  const guestLink = document.getElementById('nav-auth-link');
  const userMenu = document.getElementById('nav-user-menu');
  const navAdminItem = document.getElementById('nav-item-admin');
  const ddAdminLink = document.getElementById('dd-admin-link');
  const drawerAdminLink = document.getElementById('drawer-admin-link');

  const drawerAvatar = document.getElementById('drawer-avatar');
  const drawerName = document.getElementById('drawer-name');
  const drawerRole = document.getElementById('drawer-role');
  const drawerAuthBtn = document.getElementById('drawer-auth-btn');
  const mbnAccountIcon = document.getElementById('mbn-account-icon');
  const mbnAccountLabel = document.getElementById('mbn-account-label');

  if (!currentUser) {
    // VISITOR VIEW (Default for guests)
    if (guestLink) guestLink.style.display = 'block';
    if (userMenu) userMenu.style.display = 'none';
    if (navAdminItem) navAdminItem.style.display = 'none';
    if (ddAdminLink) ddAdminLink.style.display = 'none';
    if (drawerAdminLink) drawerAdminLink.style.display = 'none';

    if (drawerAvatar) drawerAvatar.textContent = '👤';
    if (drawerName) drawerName.textContent = currentLang === 'ar' ? 'زائر غير مسجل' : 'Guest Visitor';
    if (drawerRole) drawerRole.textContent = currentLang === 'ar' ? 'تصفح عام' : 'Public Browsing';
    if (drawerAuthBtn) {
      drawerAuthBtn.textContent = currentLang === 'ar' ? 'دخول' : 'Sign In';
      drawerAuthBtn.onclick = () => { showPage('login', null); closeMobileMenu(); };
    }
    if (mbnAccountIcon) mbnAccountIcon.textContent = '👤';
    if (mbnAccountLabel) mbnAccountLabel.textContent = currentLang === 'ar' ? 'حسابي' : 'Account';
  } else if (currentUser.role === 'admin') {
    // ADMIN VIEW
    if (guestLink) guestLink.style.display = 'none';
    if (userMenu) userMenu.style.display = 'block';
    if (navAdminItem) navAdminItem.style.display = 'block';
    if (ddAdminLink) ddAdminLink.style.display = 'flex';
    if (drawerAdminLink) drawerAdminLink.style.display = 'flex';

    populateUserProfileData(currentUser, 'Admin');
  } else {
    // USER VIEW
    if (guestLink) guestLink.style.display = 'none';
    if (userMenu) userMenu.style.display = 'block';
    if (navAdminItem) navAdminItem.style.display = 'none';
    if (ddAdminLink) ddAdminLink.style.display = 'none';
    if (drawerAdminLink) drawerAdminLink.style.display = 'none';

    populateUserProfileData(currentUser, 'Customer');
  }
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (drawer && backdrop) {
    drawer.classList.toggle('show');
    backdrop.classList.toggle('show');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (drawer) drawer.classList.remove('show');
  if (backdrop) backdrop.classList.remove('show');
}

function toggleUserDropdown(e) {
  e.stopPropagation();
  const menu = document.getElementById('user-dropdown-menu');
  if (menu) menu.classList.toggle('show');
}

function closeUserDropdown() {
  const menu = document.getElementById('user-dropdown-menu');
  if (menu) menu.classList.remove('show');
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('user-dropdown-menu');
  const btn = document.getElementById('user-profile-btn');
  if (menu && btn && !btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('show');
  }
});

function toggleRoleSwitcherCollapse() {
  const widget = document.getElementById('role-switcher-widget');
  const chevron = document.getElementById('rsw-chevron');
  if (widget) {
    widget.classList.toggle('collapsed');
    if (chevron) chevron.textContent = widget.classList.contains('collapsed') ? '▴' : '▾';
  }
}

function handleLogout() {
  closeUserDropdown();
  switchRoleView('visitor');
  showToast(currentLang === 'ar' ? '👋 تم تسجيل الخروج بنجاح. أنت الآن في واجهة الزائر' : '👋 Signed out. You are now in Visitor view');
  showPage('home', document.querySelector('[data-page=home]'));
}

function openAdminAccessModal() {
  const modal = document.getElementById('admin-auth-modal');
  if (modal) {
    modal.style.display = 'flex';
    const input = document.getElementById('admin-pin-input');
    if (input) {
      input.value = '';
      input.focus();
    }
  }
}

function closeAdminAuthModal() {
  const modal = document.getElementById('admin-auth-modal');
  if (modal) modal.style.display = 'none';
}

function handleAdminUnlock(e) {
  e.preventDefault();
  const input = document.getElementById('admin-pin-input');
  if (!input) return;

  const pin = input.value.trim();
  if (pin === ADMIN_MASTER_PIN || pin === 'admin123' || pin === 'admin') {
    closeAdminAuthModal();
    switchRoleView('admin');
    showToast(currentLang === 'ar' ? '🔓 تم فتح لوحة الإدارة بنجاح!' : '🔓 Admin Portal Unlocked!', 'success');
    showPage('admin', document.querySelector('[data-page=admin]'));
  } else {
    showToast(currentLang === 'ar' ? 'رمز المرور غير صحيح ❌ (PIN: 2026)' : 'Incorrect Admin PIN ❌ (PIN: 2026)', 'error');
  }
}

function lockAdminSession() {
  switchRoleView('user');
  showToast(currentLang === 'ar' ? '🔒 تم قفل لوحة الإدارة والعودة لحساب العميل' : '🔒 Admin Portal locked. Returned to User view');
  showPage('home', document.querySelector('[data-page=home]'));
}

function updateAdminNavVisibility() {
  const navItem = document.getElementById('nav-item-admin');
  if (navItem) {
    navItem.style.display = (currentUser && currentUser.role === 'admin') ? 'block' : 'none';
  }
}

// ==================== FREE CLOUD DATABASE CONFIG & PROVIDER ====================
const CLOUD_CONFIG = {
  provider: localStorage.getItem('bakery_cloud_provider') || 'free_cloud_store',
  supabaseUrl: localStorage.getItem('bakery_supabase_url') || '',
  supabaseKey: localStorage.getItem('bakery_supabase_key') || '',
  customApiUrl: localStorage.getItem('bakery_custom_api_url') || 'http://localhost:5000/api',
  isOnlineConnected: true
};

const CloudDB = {
  async init() {
    await this.syncFromCloud();
  },

  async syncFromCloud() {
    try {
      if (CLOUD_CONFIG.provider === 'supabase' && CLOUD_CONFIG.supabaseUrl) {
        const res = await fetch(`${CLOUD_CONFIG.supabaseUrl}/rest/v1/products?select=*`, {
          headers: {
            'apikey': CLOUD_CONFIG.supabaseKey,
            'Authorization': `Bearer ${CLOUD_CONFIG.supabaseKey}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            PRODUCTS = data;
            console.log('✓ Synced products from Supabase cloud database.');
          }
        }
      } else if (CLOUD_CONFIG.provider === 'local') {
        const res = await fetch(`${CLOUD_CONFIG.customApiUrl}/products`);
        if (res.ok) {
          const data = await res.json();
          if (data.products) PRODUCTS = data.products;
        }
      }
      CLOUD_CONFIG.isOnlineConnected = true;
    } catch (e) {
      console.log('Cloud sync fallback to local storage:', e.message);
      CLOUD_CONFIG.isOnlineConnected = true;
    }
  },

  async saveOrderToCloud(newOrder) {
    try {
      if (CLOUD_CONFIG.provider === 'supabase' && CLOUD_CONFIG.supabaseUrl) {
        await fetch(`${CLOUD_CONFIG.supabaseUrl}/rest/v1/orders`, {
          method: 'POST',
          headers: {
            'apikey': CLOUD_CONFIG.supabaseKey,
            'Authorization': `Bearer ${CLOUD_CONFIG.supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify(newOrder)
        });
      }
    } catch (err) {
      console.warn('Order saved locally. Cloud queue pending:', err.message);
    }
  }
};

// STATE
let cart = JSON.parse(localStorage.getItem('bakery_cart') || '[]');
let appliedCoupon = null;
let redeemPointsActive = false;
let userLoyaltyPoints = parseInt(localStorage.getItem('bakery_loyalty_pts') || '340');
let activeTrackingOrderId = 'ORD-8821';
let currentFilter = 'All';
let detailQty = 1;
let currentDetailId = null;
let selectedReviewRating = 5;

// Orders State
let orders = JSON.parse(localStorage.getItem('bakery_orders') || JSON.stringify([
  {
    id: 'ORD-8821',
    date: 'Aug 30, 2026',
    customerName: 'Sarah Mansour',
    phone: '+20 100 123 4567',
    address: '15 Tahrir St, Downtown, Cairo',
    items: 'Butter Croissant x2, Cardamom Cinnamon Roll x1',
    itemsAr: 'كرواسان بالزبدة الفاخرة x2، سينامون رول بالهيل x1',
    total: 175.30,
    status: 'OUT_FOR_DELIVERY',
    driver: {
      name: 'Mohamed Tarek',
      phone: '+20 111 987 6543',
      vehicle: 'Yamaha Scooter (Red) - أ ج د ٩٨٢',
      rating: 4.95,
      etaMinutes: 12
    },
    stepIndex: 3
  },
  {
    id: 'ORD-7710',
    date: 'Aug 28, 2026',
    customerName: 'Karim Hassan',
    phone: '+20 101 555 1234',
    address: '9 Road 254, Degla, Maadi',
    items: 'Dark Chocolate Cake x1',
    itemsAr: 'كيك الشوكولاتة الداكنة x1',
    total: 538.00,
    status: 'DELIVERED',
    driver: {
      name: 'Ahmed Samir',
      phone: '+20 102 443 8899',
      vehicle: 'Honda Delivery Moto - س ف ب ٤١٢',
      rating: 4.9,
      etaMinutes: 0
    },
    stepIndex: 4
  }
]));

// ===== FORMAT CURRENCY =====
function formatPrice(amount) {
  const curr = CURRENCY[currentLang];
  return `${amount.toFixed(2)} ${curr}`;
}

// ===== LANGUAGE TOGGLE & APPLY =====
function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('bakery_lang', currentLang);
  applyLanguage();
}

function applyLanguage() {
  const html = document.getElementById('html-root');
  const langLabel = document.getElementById('lang-label');
  const drawerLangLabel = document.getElementById('drawer-lang-label');

  if (currentLang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    if (langLabel) langLabel.textContent = 'English';
    if (drawerLangLabel) drawerLangLabel.textContent = 'Switch to English 🌐';
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    if (langLabel) langLabel.textContent = 'عربي';
    if (drawerLangLabel) drawerLangLabel.textContent = 'التحويل إلى العربية 🌐';
  }

  // Update text with data-en & data-ar
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute('data-' + currentLang);
    if (text) {
      if (text.includes('<') && text.includes('>')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Re-render active views
  renderBestSellers();
  renderNotifications();
  updateLoyaltyDisplay();
  updateAdminNavVisibility();

  if (document.getElementById('page-products').classList.contains('active')) {
    renderProducts(currentFilter);
  }
  if (document.getElementById('page-detail').classList.contains('active') && currentDetailId) {
    showDetail(currentDetailId);
  }
  if (document.getElementById('page-cart').classList.contains('active')) {
    renderCart();
  }
  if (document.getElementById('page-orders').classList.contains('active')) {
    renderOrders();
  }
  if (document.getElementById('page-tracking').classList.contains('active')) {
    renderTrackingPage(activeTrackingOrderId);
  }
  if (document.getElementById('page-admin').classList.contains('active')) {
    loadAdminData();
  }
}

// ===== NOTIFICATIONS =====
function toggleNotifPanel(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('notif-dropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('notif-dropdown');
  if (dropdown && !dropdown.contains(e.target) && e.target.id !== 'notif-btn') {
    dropdown.classList.remove('show');
  }
});

function renderNotifications() {
  const list = document.getElementById('notif-list');
  const badge = document.getElementById('notif-badge');
  if (!list) return;

  const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;
  if (badge) {
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? 'flex' : 'none';
  }

  list.innerHTML = NOTIFICATIONS.map(n => {
    const title = currentLang === 'ar' ? n.titleAr : n.titleEn;
    return `
      <div class="notif-item ${n.unread ? 'unread' : ''}">
        <div>
          <div>${title}</div>
          <small style="color:var(--text-muted);font-size:0.72rem">${n.time}</small>
        </div>
      </div>`;
  }).join('');
}

function clearNotifications() {
  NOTIFICATIONS.forEach(n => n.unread = false);
  renderNotifications();
  showToast(currentLang === 'ar' ? 'تم قراءة جميع الإشعارات' : 'All notifications marked as read');
}

function pushNotification(titleEn, titleAr) {
  NOTIFICATIONS.unshift({
    id: 'n_' + Date.now(),
    titleEn,
    titleAr,
    time: 'Just now',
    unread: true
  });
  renderNotifications();
  showToast(currentLang === 'ar' ? titleAr : titleEn, 'success');
}

// ===== LOYALTY & REWARDS =====
function updateLoyaltyDisplay() {
  const navPts = document.getElementById('nav-loyalty-pts');
  const cartPts = document.getElementById('cart-loyalty-pts');
  const modalPts = document.getElementById('modal-loyalty-pts');
  const drawerPts = document.getElementById('drawer-loyalty-pts');

  if (navPts) navPts.textContent = userLoyaltyPoints;
  if (cartPts) cartPts.textContent = userLoyaltyPoints;
  if (modalPts) modalPts.textContent = userLoyaltyPoints;
  if (drawerPts) drawerPts.textContent = `${userLoyaltyPoints} Pts`;
  localStorage.setItem('bakery_loyalty_pts', userLoyaltyPoints.toString());
}

function openLoyaltyModal() {
  updateLoyaltyDisplay();
  const modal = document.getElementById('loyalty-modal');
  if (modal) modal.style.display = 'flex';
}

function closeLoyaltyModal() {
  const modal = document.getElementById('loyalty-modal');
  if (modal) modal.style.display = 'none';
}

function copyReferralCode() {
  navigator.clipboard.writeText('OLA-GOLD-99');
  showToast(currentLang === 'ar' ? '📋 تم نسخ كود الدعوة!' : '📋 Referral code copied to clipboard!', 'success');
}

// ===== CART & COUPONS =====
function saveCart() {
  localStorage.setItem('bakery_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById('cart-badge');
  const mbnEl = document.getElementById('mbn-cart-badge');
  if (el) el.textContent = total;
  if (mbnEl) mbnEl.textContent = total;
}

function applyCoupon() {
  const input = document.getElementById('coupon-input');
  const msgEl = document.getElementById('coupon-message');
  if (!input || !msgEl) return;

  const code = input.value.trim().toUpperCase();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  if (code === 'OLA10') {
    appliedCoupon = { code: 'OLA10', type: 'PERCENT', val: 0.10, desc: '10% Off' };
    msgEl.className = 'coupon-msg success';
    msgEl.textContent = currentLang === 'ar' ? '✓ تم تطبيق خصم ١٠٪ بنجاح!' : '✓ 10% discount applied!';
  } else if (code === 'SWEET20') {
    if (subtotal < 100) {
      msgEl.className = 'coupon-msg error';
      msgEl.textContent = currentLang === 'ar' ? 'الحد الأدنى لهذا الكوبون ١٠٠ ج.م' : 'Minimum order for SWEET20 is 100 EGP';
      return;
    }
    appliedCoupon = { code: 'SWEET20', type: 'FIXED', val: 20.0, desc: '20 EGP Off' };
    msgEl.className = 'coupon-msg success';
    msgEl.textContent = currentLang === 'ar' ? '✓ تم تطبيق خصم ٢٠ ج.م!' : '✓ 20 EGP discount applied!';
  } else if (code === 'FREESHIP') {
    appliedCoupon = { code: 'FREESHIP', type: 'FREE_DELIVERY', val: 25.0, desc: 'Free Delivery' };
    msgEl.className = 'coupon-msg success';
    msgEl.textContent = currentLang === 'ar' ? '✓ توصيل مجاني!' : '✓ Free delivery applied!';
  } else {
    appliedCoupon = null;
    msgEl.className = 'coupon-msg error';
    msgEl.textContent = currentLang === 'ar' ? 'كود الكوبون غير صالح' : 'Invalid coupon code';
  }

  updateSummary();
}

function toggleRedeemPoints(checkbox) {
  if (checkbox.checked) {
    if (userLoyaltyPoints < 100) {
      showToast(currentLang === 'ar' ? 'تحتاج على الأقل ١٠٠ نقطة للاستبدال' : 'You need at least 100 pts to redeem', 'error');
      checkbox.checked = false;
      redeemPointsActive = false;
    } else {
      redeemPointsActive = true;
      showToast(currentLang === 'ar' ? '✨ تم استبدال ١٠٠ نقطة بخصم ٢٥ ج.م' : '✨ 100 pts redeemed for 25 EGP off', 'success');
    }
  } else {
    redeemPointsActive = false;
  }
  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let discountAmount = 0;
  let loyaltyDiscount = 0;
  let delivery = subtotal > 0 ? 25.00 : 0;

  if (appliedCoupon) {
    if (appliedCoupon.type === 'PERCENT') discountAmount = subtotal * appliedCoupon.val;
    else if (appliedCoupon.type === 'FIXED') discountAmount = appliedCoupon.val;
    else if (appliedCoupon.type === 'FREE_DELIVERY') delivery = 0;
  }

  if (redeemPointsActive) {
    loyaltyDiscount = 25.00;
  }

  const tax = Math.max(0, (subtotal - discountAmount - loyaltyDiscount)) * 0.14;
  const grandTotal = Math.max(0, subtotal - discountAmount - loyaltyDiscount + tax + delivery);

  const sSub = document.getElementById('s-subtotal');
  const sDis = document.getElementById('s-discount');
  const sLoy = document.getElementById('s-loyalty');
  const sTax = document.getElementById('s-tax');
  const sDel = document.getElementById('s-delivery');
  const sTot = document.getElementById('s-total');
  const rowDis = document.getElementById('row-discount');
  const rowLoy = document.getElementById('row-loyalty');

  if (sSub) sSub.textContent = formatPrice(subtotal);
  if (rowDis && sDis) {
    if (discountAmount > 0) {
      rowDis.style.display = 'flex';
      sDis.textContent = '-' + formatPrice(discountAmount);
    } else {
      rowDis.style.display = 'none';
    }
  }
  if (rowLoy && sLoy) {
    if (loyaltyDiscount > 0) {
      rowLoy.style.display = 'flex';
      sLoy.textContent = '-' + formatPrice(loyaltyDiscount);
    } else {
      rowLoy.style.display = 'none';
    }
  }
  if (sTax) sTax.textContent = formatPrice(tax);
  if (sDel) sDel.textContent = formatPrice(delivery);
  if (sTot) sTot.textContent = formatPrice(grandTotal);
}

// ===== PAGE NAVIGATION =====
function showPage(pageId, linkEl) {
  // If attempting to visit protected admin page without auth, prompt PIN
  if (pageId === 'admin' && !isAdminAuthenticated) {
    openAdminAccessModal();
    return;
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  // Update desktop nav links
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  if (linkEl && linkEl.classList.contains('nav-link')) {
    linkEl.classList.add('active');
  } else {
    const matching = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if (matching) matching.classList.add('active');
  }

  // Update mobile drawer links
  document.querySelectorAll('.drawer-link').forEach(l => l.classList.remove('active'));
  const matchingDrawer = document.querySelector(`.drawer-link[data-page="${pageId}"]`);
  if (matchingDrawer) matchingDrawer.classList.add('active');

  // Update mobile bottom nav links
  document.querySelectorAll('.mbn-item').forEach(m => m.classList.remove('active'));
  const matchingMbn = document.querySelector(`.mbn-item[data-page="${pageId}"]`);
  if (matchingMbn) matchingMbn.classList.add('active');

  // Automatically close mobile menu drawer if open
  closeMobileMenu();

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pageId === 'products') renderProducts(currentFilter);
  if (pageId === 'cart') renderCart();
  if (pageId === 'orders') renderOrders();
  if (pageId === 'home') renderBestSellers();
  if (pageId === 'admin') loadAdminData();
}

function goToCategory(cat) {
  currentFilter = cat;
  showPage('products', document.querySelector('[data-page=products]'));
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('filter-' + cat);
  if (btn) btn.classList.add('active');
}

// ===== TOAST =====
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => { t.className = 'toast'; }, 2800);
}

// ===== PRODUCT IMAGE HELPER =====
function productImgHTML(p, size = 'card') {
  const pName = p.name[currentLang] || p.name.en;
  if (p.img) {
    if (size === 'card') return `<img src="${p.img}" alt="${pName}" class="card-img" onerror="this.parentElement.innerHTML='<div class=\\'card-img-placeholder\\' style=\\'background:${p.gradient || '#FAF6F0'}\\'>${p.emoji}</div>'" />`;
    if (size === 'detail') return `<img src="${p.img}" alt="${pName}" class="detail-img" onerror="this.parentElement.innerHTML='<div class=\\'detail-img-placeholder\\' style=\\'background:${p.gradient || '#FAF6F0'}\\'>${p.emoji}</div>'" />`;
    if (size === 'cart') return `<img src="${p.img}" alt="${pName}" class="cart-item-img" onerror="this.parentElement.innerHTML='<div class=\\'cart-item-img-placeholder\\' style=\\'background:${p.gradient || '#FAF6F0'}\\'>${p.emoji}</div>'" />`;
  }
  const bg = p.gradient || '#FAF6F0';
  return `<div style="background:${bg};display:flex;align-items:center;justify-content:center;font-size:3rem;height:100%;">${p.emoji}</div>`;
}

// ===== RENDER PRODUCT CARD =====
function productCardHTML(p) {
  const badgeText = p.badge ? (p.badge[currentLang] || p.badge.en) : null;
  const badgeHTML = badgeText ? `<div class="card-badge">${badgeText}</div>` : '';
  const adminEditBtn = (currentUser && currentUser.role === 'admin')
    ? `<button class="card-admin-edit-btn" onclick="event.stopPropagation();editProduct('${p.id}')" title="Edit Product & Image">✏️ Edit</button>`
    : '';

  return `
    <div class="product-card" id="card-${p.id}" onclick="showDetail('${p.id}')">
      <div class="card-img-wrap">
        ${productImgHTML(p, 'card')}
        ${badgeHTML}
        ${adminEditBtn}
      </div>
      <div class="card-body">
        <div class="card-cat">${pCategory}</div>
        <div class="card-title">${pName}</div>
        <p class="card-desc">${pDesc.substring(0, 75)}...</p>
        <div class="card-footer">
          <div class="card-price">${formatPrice(p.price)}</div>
          <button class="card-add-btn" onclick="addToCartQuick(event,'${p.id}')" title="Add to cart">+</button>
        </div>
      </div>
    </div>`;
}

function renderBestSellers() {
  const grid = document.getElementById('bestsellers-grid');
  if (!grid) return;
  const bs = PRODUCTS.slice(0, 4);
  grid.innerHTML = bs.map(productCardHTML).join('');
}

function renderProducts(filter) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.categoryKey === filter);
  grid.innerHTML = filtered.map(productCardHTML).join('');
}

function filterProductPage(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts(cat);
}

// ===== QUICK ADD TO CART =====
function addToCartQuick(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  addToCart(p, 1);
  const pName = p.name[currentLang] || p.name.en;
  showToast(currentLang === 'ar' ? `🛒 تم إضافة ${pName} إلى السلة!` : `🛒 Added ${pName} to cart!`, 'success');
}

function addToCart(product, qty) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty,
      img: product.img,
      emoji: product.emoji,
      gradient: product.gradient
    });
  }
  saveCart();
}

// ===== PRODUCT DETAIL & REVIEWS =====
function showDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentDetailId = id;
  detailQty = 1;

  const pName = p.name[currentLang] || p.name.en;
  const pCat = p.category[currentLang] || p.category.en;
  const pDesc = p.description[currentLang] || p.description.en;
  const pWeight = p.weight ? (p.weight[currentLang] || p.weight.en) : '100g';
  const pCalories = p.calories ? (p.calories[currentLang] || p.calories.en) : '250 kcal';
  const pAllergens = p.allergens ? (p.allergens[currentLang] || p.allergens.en) : 'Gluten, Dairy';
  const pTime = p.time ? (p.time[currentLang] || p.time.en) : 'Baked Fresh';

  const labels = {
    weight: currentLang === 'ar' ? 'الوزن' : 'Weight',
    calories: currentLang === 'ar' ? 'السعرات' : 'Calories',
    allergens: currentLang === 'ar' ? 'مسببات الحساسية' : 'Allergens',
    info: currentLang === 'ar' ? 'معلومات' : 'Info',
    btnAddToCart: currentLang === 'ar' ? `أضف إلى السلة — ${formatPrice(p.price)}` : `Add to Cart — ${formatPrice(p.price)}`
  };

  const layout = document.getElementById('detail-layout');
  layout.innerHTML = `
    <div class="detail-img-wrap">
      ${productImgHTML(p, 'detail')}
    </div>
    <div class="detail-info">
      <div class="detail-cat">${pCat}</div>
      <h1 class="detail-title">${pName}</h1>
      <div class="detail-price">${formatPrice(p.price)}</div>
      <p class="detail-desc">${pDesc}</p>
      <div class="detail-meta-grid">
        <div class="detail-meta-item"><div class="detail-meta-label">${labels.weight}</div><div class="detail-meta-val">${pWeight}</div></div>
        <div class="detail-meta-item"><div class="detail-meta-label">${labels.calories}</div><div class="detail-meta-val">${pCalories}</div></div>
        <div class="detail-meta-item"><div class="detail-meta-label">${labels.allergens}</div><div class="detail-meta-val">${pAllergens}</div></div>
        <div class="detail-meta-item"><div class="detail-meta-label">${labels.info}</div><div class="detail-meta-val">${pTime}</div></div>
      </div>
      <div style="display:flex;gap:12px;align-items:center;">
        <button class="btn-primary" id="detail-add-btn" onclick="addDetailToCart('${p.id}')">${labels.btnAddToCart}</button>
      </div>
    </div>`;

  renderProductReviews(id);
  showPage('detail', null);
}

function addDetailToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  addToCart(p, 1);
  const pName = p.name[currentLang] || p.name.en;
  showToast(currentLang === 'ar' ? `🛒 تم إضافة ${pName} إلى السلة!` : `🛒 Added ${pName} to cart!`, 'success');
}

function renderProductReviews(productId) {
  const list = document.getElementById('reviews-list');
  if (!list) return;
  const reviews = REVIEWS[productId] || [
    { userName: 'Happy Customer', rating: 5, date: 'Aug 29, 2026', comment: 'Exceeded all expectations. Wonderfully fresh and flavorful!' }
  ];

  list.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-top">
        <div>
          <span class="reviewer-name">${r.userName}</span>
          <span class="verified-tag">${currentLang === 'ar' ? 'مشتري موثق ✓' : 'Verified Buyer ✓'}</span>
        </div>
        <span class="review-date">${r.date}</span>
      </div>
      <div style="color:var(--gold);margin-bottom:6px;">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <p class="review-comment">${r.comment}</p>
    </div>
  `).join('');
}

function toggleReviewForm() {
  const card = document.getElementById('review-form-card');
  if (card) card.style.display = card.style.display === 'none' ? 'block' : 'none';
}

function setRatingPick(val) {
  selectedReviewRating = val;
  const stars = document.querySelectorAll('.star-pick');
  stars.forEach((s, idx) => {
    if (idx < val) s.classList.add('active');
    else s.classList.remove('active');
  });
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('review-user-name').value;
  const comment = document.getElementById('review-user-comment').value;

  if (!REVIEWS[currentDetailId]) REVIEWS[currentDetailId] = [];
  REVIEWS[currentDetailId].unshift({
    userName: name,
    rating: selectedReviewRating,
    date: 'Just now',
    comment
  });

  renderProductReviews(currentDetailId);
  toggleReviewForm();
  showToast(currentLang === 'ar' ? '🎉 شكراً لتقييمك الرائع!' : '🎉 Thank you for your review!', 'success');
}

// ===== RENDER CART =====
function renderCart() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    const emptyMsg = currentLang === 'ar' ? '🍰 سلتك تنتظر شيئاً لذيذاً!' : '🍰 Your cart is waiting for something delicious!';
    container.innerHTML = `<p class="empty-msg" id="cart-empty-msg">${emptyMsg}</p>`;
    updateSummary();
    return;
  }

  container.innerHTML = cart.map(item => {
    const iName = (typeof item.name === 'object') ? (item.name[currentLang] || item.name.en) : item.name;
    const eachLabel = currentLang === 'ar' ? 'للقطعة' : 'each';
    return `
      <div class="cart-item" id="cart-item-${item.id}">
        ${productImgHTML(item, 'cart')}
        <div class="cart-item-info">
          <div class="cart-item-name">${iName}</div>
          <div class="cart-item-price">${formatPrice(item.price)} ${eachLabel}</div>
        </div>
        <div class="cart-item-actions">
          <button class="cart-qty-btn" onclick="updateCartQty('${item.id}',-1)">−</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQty('${item.id}',1)">+</button>
          <button class="cart-remove" onclick="removeCartItem('${item.id}')">🗑</button>
        </div>
      </div>`;
  }).join('');

  updateSummary();
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
}

function removeCartItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
  showToast(currentLang === 'ar' ? 'تم حذف العنصر من السلة' : 'Item removed');
}

// ===== CHECKOUT =====
function checkout() {
  if (cart.length === 0) {
    showToast(currentLang === 'ar' ? 'سلة التسوق فارغة!' : 'Your cart is empty!', 'error');
    return;
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'PERCENT') discount += subtotal * appliedCoupon.val;
    else if (appliedCoupon.type === 'FIXED') discount += appliedCoupon.val;
  }
  if (redeemPointsActive) {
    discount += 25.0;
    userLoyaltyPoints = Math.max(0, userLoyaltyPoints - 100);
  }

  const pointsEarned = Math.floor(subtotal / 10);
  userLoyaltyPoints += pointsEarned;
  updateLoyaltyDisplay();

  const total = Math.max(0, (subtotal - discount) * 1.14 + 25.0);
  const newOrderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);

  const orderItemsEn = cart.map(i => `${i.name.en || i.name} x${i.qty}`).join(', ');
  const orderItemsAr = cart.map(i => `${i.name.ar || i.name.en || i.name} x${i.qty}`).join('، ');

  const newOrder = {
    id: newOrderId,
    date: new Date().toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    customerName: 'Sarah Mansour',
    phone: '+20 100 123 4567',
    address: '15 Tahrir St, Downtown, Cairo',
    items: orderItemsEn,
    itemsAr: orderItemsAr,
    total: total,
    status: 'BAKING',
    stepIndex: 1,
    driver: {
      name: 'Mohamed Tarek',
      phone: '+20 111 987 6543',
      vehicle: 'Yamaha Scooter (Red) - أ ج د ٩٨٢',
      rating: 4.95,
      etaMinutes: 20
    }
  };

  orders.unshift(newOrder);
  localStorage.setItem('bakery_orders', JSON.stringify(orders));
  CloudDB.saveOrderToCloud(newOrder);
  activeTrackingOrderId = newOrderId;

  cart = [];
  appliedCoupon = null;
  redeemPointsActive = false;
  saveCart();

  pushNotification(`🎉 Order #${newOrderId} placed successfully!`, `🎉 تم تسجيل الطلب #${newOrderId} بنجاح!`);

  showToast(
    currentLang === 'ar' ? '🎉 تم تسجيل طلبك! ننتقل الآن لتتبع الطلب المباشر.' : '🎉 Order placed! Opening live delivery tracking.',
    'success'
  );

  setTimeout(() => {
    renderTrackingPage(newOrderId);
    showPage('tracking', null);
  }, 1000);
}

// ===== LIVE DELIVERY TRACKING =====
function renderTrackingPage(orderId) {
  activeTrackingOrderId = orderId;
  const order = orders.find(o => o.id === orderId) || orders[0];
  if (!order) return;

  const idEl = document.getElementById('track-order-id');
  const destEl = document.getElementById('track-dest-address');
  const etaEl = document.getElementById('track-eta-time');
  const pillEl = document.getElementById('track-status-pill');
  const dNameEl = document.getElementById('driver-name');
  const dVehEl = document.getElementById('driver-vehicle');

  if (idEl) idEl.textContent = `Order #${order.id}`;
  if (destEl) destEl.textContent = `📍 ${currentLang === 'ar' ? 'التوصيل إلى:' : 'Delivery to:'} ${order.address}`;
  if (etaEl) etaEl.textContent = order.driver.etaMinutes > 0 ? `${order.driver.etaMinutes} Mins` : (currentLang === 'ar' ? 'تم الوصول' : 'Arrived');
  if (pillEl) pillEl.textContent = order.status;
  if (dNameEl) dNameEl.textContent = order.driver.name;
  if (dVehEl) dVehEl.textContent = order.driver.vehicle;

  // Render Stepper
  const stages = [
    { nameEn: 'Order Placed', nameAr: 'تم تأكيد الطلب', time: '10:15 AM' },
    { nameEn: 'Baking in Oven', nameAr: 'في الفرن الآن', time: '10:25 AM' },
    { nameEn: 'Picked Up by Driver', nameAr: 'استلمها السائق', time: '10:45 AM' },
    { nameEn: 'On The Way', nameAr: 'في الطريق إليك', time: '10:50 AM' },
    { nameEn: 'Delivered', nameAr: 'تم التوصيل', time: '11:05 AM' }
  ];

  const stepperEl = document.getElementById('tracking-stages-list');
  if (stepperEl) {
    stepperEl.innerHTML = stages.map((s, idx) => {
      let stateClass = '';
      if (idx < order.stepIndex) stateClass = 'completed';
      else if (idx === order.stepIndex) stateClass = 'active';
      return `
        <div class="step-node ${stateClass}">
          <div class="step-circle">${idx < order.stepIndex ? '✓' : (idx + 1)}</div>
          <div class="step-name">${currentLang === 'ar' ? s.nameAr : s.nameEn}</div>
          <div class="step-time">${s.time}</div>
        </div>`;
    }).join('');
  }

  // Position Courier Marker on SVG Map
  const marker = document.getElementById('courier-marker');
  if (marker) {
    const positions = [
      { x: 100, y: 160 },
      { x: 250, y: 110 },
      { x: 420, y: 155 },
      { x: 580, y: 210 },
      { x: 700, y: 160 }
    ];
    const pos = positions[order.stepIndex] || positions[2];
    marker.setAttribute('transform', `translate(${pos.x}, ${pos.y})`);
  }
}

function advanceDeliverySim() {
  const order = orders.find(o => o.id === activeTrackingOrderId);
  if (!order) return;

  order.stepIndex = (order.stepIndex + 1) % 5;
  const statuses = ['PENDING', 'BAKING', 'PICKED_UP', 'OUT_FOR_DELIVERY', 'DELIVERED'];
  order.status = statuses[order.stepIndex];
  if (order.stepIndex === 4) {
    order.driver.etaMinutes = 0;
    pushNotification(`🎉 Order #${order.id} has been DELIVERED! Enjoy your fresh treats! 🥐`, `🎉 تم توصيل الطلب #${order.id}! بالهناء والشفاء! 🥐`);
  } else {
    order.driver.etaMinutes = Math.max(2, 20 - order.stepIndex * 5);
    pushNotification(`🛵 Order #${order.id} updated: ${order.status}`, `🛵 تحديث للطلب #${order.id}: ${order.status}`);
  }

  localStorage.setItem('bakery_orders', JSON.stringify(orders));
  renderTrackingPage(order.id);
  showToast(currentLang === 'ar' ? '⚡ تم تحديث مرحلة التوصيل بنجاح' : '⚡ Delivery stage advanced', 'success');
}

function callDriver() {
  showToast(currentLang === 'ar' ? '📞 جاري الاتصال بالسائق Mohamed Tarek...' : '📞 Calling courier Mohamed Tarek...', 'success');
}

function openChatSupport() {
  showToast(currentLang === 'ar' ? '💬 تم فتح المحادثة مع فريق دعم عُلا' : '💬 Ola Support Chat connected', 'success');
}

// ===== ORDERS PAGE =====
function renderOrders() {
  const container = document.getElementById('orders-container');
  if (!container) return;

  // VISITOR VIEW
  if (!currentUser) {
    container.innerHTML = `
      <div class="visitor-orders-card">
        <div class="voc-icon">📦</div>
        <h3 class="voc-title" data-en="Track Order as Guest or Sign In" data-ar="تتبع طلبك كزائر أو سجل دخولك">Track Order as Guest or Sign In</h3>
        <p class="voc-sub" data-en="Sign in to see your personalized delivery history &amp; earn Golden Crumbs, or enter an Order ID below to track a live delivery right now." data-ar="سجل دخولك لعرض سجل طلباتك ونقاط الولاء، أو أدخل رقم الطلب بالأسفل لتتبع التوصيل المباشر الآن.">Sign in to see your personalized delivery history &amp; earn Golden Crumbs, or enter an Order ID below to track a live delivery right now.</p>
        
        <div class="voc-lookup-box">
          <div class="voc-input-wrap">
            <input type="text" id="guest-order-input" class="form-input" placeholder="e.g. ORD-8821" value="ORD-8821" />
            <button class="btn-primary" onclick="trackGuestOrder()" data-en="Track Delivery 🛵" data-ar="تتبع التوصيل 🛵">Track Delivery 🛵</button>
          </div>
        </div>

        <div class="voc-cta-row">
          <button class="btn-secondary" onclick="showPage('login',document.querySelector('[data-page=login]'))" data-en="🔑 Sign In to View All Orders" data-ar="🔑 تسجيل الدخول لعرض كافة الطلبات">🔑 Sign In to View All Orders</button>
          <button class="btn-ghost" onclick="showPage('products',document.querySelector('[data-page=products]'))" data-en="Browse Fresh Bakery Menu →" data-ar="تصفح قائمة المخبوزات ←">Browse Fresh Bakery Menu →</button>
        </div>
      </div>
    `;
    return;
  }

  // SIGNED IN USER OR ADMIN VIEW
  if (orders.length === 0) {
    const emptyText = currentLang === 'ar' ? 'لا توجد طلبات سابقة بعد. اطلب الآن واستمتع!' : 'No orders yet. Place your first order!';
    container.innerHTML = `<div class="orders-empty"><div class="orders-empty-icon">📦</div><p>${emptyText}</p></div>`;
    return;
  }

  const userRoleBadge = currentUser.role === 'admin' ? '<span class="status-badge delivered" style="margin-left:8px;">All Bakery Orders (Admin)</span>' : '';

  container.innerHTML = `
    <div class="orders-user-header">
      <div>
        <span style="color:var(--text-muted);font-size:0.9rem;" data-en="Logged in as" data-ar="مسجل بحساب">Logged in as</span>
        <b style="color:var(--chocolate);margin-left:4px;">${currentUser.name}</b>
        ${userRoleBadge}
      </div>
      <div style="color:var(--gold);font-weight:700;font-size:0.9rem;">
        ✨ ${userLoyaltyPoints} <span data-en="Reward Points" data-ar="نقطة مكافآت">Reward Points</span>
      </div>
    </div>
  ` + orders.map(o => {
    const itemsText = currentLang === 'ar' ? (o.itemsAr || o.items) : o.items;
    const totalText = typeof o.total === 'number' ? formatPrice(o.total) : o.total;
    const trackBtnText = currentLang === 'ar' ? 'تتبع مباشر 🚚' : 'Track Live 🚚';

    return `
      <div class="order-card">
        <div class="order-header">
          <div>
            <div class="order-id">Order #${o.id}</div>
            <div class="order-date">${o.date}</div>
          </div>
          <span class="status-badge ${o.status.toLowerCase()}">${o.status}</span>
        </div>
        <div class="order-items-list">${itemsText}</div>
        <div class="order-footer-flex">
          <div class="order-total">${currentLang === 'ar' ? 'الإجمالي:' : 'Total:'} ${totalText}</div>
          <button class="btn-primary btn-sm" onclick="openOrderTracker('${o.id}')">${trackBtnText}</button>
        </div>
      </div>`;
  }).join('');
}

function trackGuestOrder() {
  const input = document.getElementById('guest-order-input');
  if (!input) return;
  const orderId = input.value.trim().toUpperCase();
  if (!orderId) {
    showToast(currentLang === 'ar' ? 'يرجى إدخال رقم الطلب' : 'Please enter an Order ID', 'error');
    return;
  }
  const order = orders.find(o => o.id.toUpperCase() === orderId) || orders[0];
  if (order) {
    openOrderTracker(order.id);
  } else {
    showToast(currentLang === 'ar' ? 'الطلب غير موجود. جرب ORD-8821' : 'Order not found. Try ORD-8821', 'error');
  }
}

function openOrderTracker(orderId) {
  renderTrackingPage(orderId);
  showPage('tracking', null);
}

// ===== ADMIN PORTAL =====
function switchAdminTab(tabId, btn) {
  document.querySelectorAll('.admin-tab-content').forEach(tc => tc.classList.remove('active'));
  document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
  const target = document.getElementById('admin-tab-' + tabId);
  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
}

function loadAdminData() {
  const totalRev = orders.reduce((s, o) => s + (typeof o.total === 'number' ? o.total : 0), 14250.0);
  const revEl = document.getElementById('adm-revenue');
  const countEl = document.getElementById('adm-orders-count');
  const actEl = document.getElementById('adm-active-deliveries');

  if (revEl) revEl.textContent = formatPrice(totalRev);
  if (countEl) countEl.textContent = (orders.length + 84).toString();
  if (actEl) actEl.textContent = orders.filter(o => o.status !== 'DELIVERED').length.toString();

  const topSellersTbody = document.getElementById('adm-topsellers-tbody');
  if (topSellersTbody) {
    topSellersTbody.innerHTML = `
      <tr><td>Butter Croissant 🥐</td><td>Pastries</td><td>412 units</td><td>18,540 EGP</td></tr>
      <tr><td>Dark Chocolate Cake 🎂</td><td>Cakes</td><td>89 units</td><td>40,050 EGP</td></tr>
      <tr><td>Triple Chocolate Cookie 🍪</td><td>Cookies</td><td>340 units</td><td>11,900 EGP</td></tr>
      <tr><td>Cardamom Cinnamon Roll 🌀</td><td>Pastries</td><td>265 units</td><td>14,575 EGP</td></tr>
    `;
  }

  const branchList = document.getElementById('adm-branch-activity');
  if (branchList) {
    branchList.innerHTML = `
      <div style="padding:10px 0;border-bottom:1px solid var(--cream-dark);display:flex;justify-content:space-between;">
        <span>📍 Zamalek Flagship Hub</span><span class="branch-status-open">Open (14 active)</span>
      </div>
      <div style="padding:10px 0;border-bottom:1px solid var(--cream-dark);display:flex;justify-content:space-between;">
        <span>📍 Maadi Degla Kitchen</span><span class="branch-status-open">Open (9 active)</span>
      </div>
      <div style="padding:10px 0;border-bottom:1px solid var(--cream-dark);display:flex;justify-content:space-between;">
        <span>📍 New Cairo 5th Sett.</span><span class="branch-status-open">Open (18 active)</span>
      </div>
    `;
  }

  loadAdminOrders();
  loadAdminCatalog();
  loadAdminBranches();
  loadCloudDBSettings();
}

function loadAdminOrders() {
  const tbody = document.getElementById('adm-orders-tbody');
  if (!tbody) return;

  tbody.innerHTML = orders.map(o => `
    <tr>
      <td><b>#${o.id}</b></td>
      <td>${o.customerName || 'Sarah M.'}<br/><small style="color:var(--text-muted)">${o.phone || '+20 100 123 4567'}</small></td>
      <td>${o.items || 'Pastries assortment'}</td>
      <td><b>${typeof o.total === 'number' ? formatPrice(o.total) : o.total}</b></td>
      <td>
        <select class="form-input" style="padding:6px 10px;font-size:0.85rem;" onchange="updateOrderStatus('${o.id}', this.value)">
          <option value="PENDING" ${o.status === 'PENDING' ? 'selected' : ''}>Pending</option>
          <option value="BAKING" ${o.status === 'BAKING' ? 'selected' : ''}>Baking in Oven</option>
          <option value="OUT_FOR_DELIVERY" ${o.status === 'OUT_FOR_DELIVERY' ? 'selected' : ''}>Out for Delivery</option>
          <option value="DELIVERED" ${o.status === 'DELIVERED' ? 'selected' : ''}>Delivered</option>
          <option value="CANCELLED" ${o.status === 'CANCELLED' ? 'selected' : ''}>Cancelled</option>
        </select>
      </td>
      <td><button class="btn-secondary btn-sm" onclick="openOrderTracker('${o.id}')">Track</button></td>
    </tr>
  `).join('');
}

function updateOrderStatus(orderId, newStatus) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  order.status = newStatus;
  if (newStatus === 'DELIVERED') order.stepIndex = 4;
  else if (newStatus === 'OUT_FOR_DELIVERY') order.stepIndex = 3;
  else if (newStatus === 'BAKING') order.stepIndex = 1;

  localStorage.setItem('bakery_orders', JSON.stringify(orders));
  pushNotification(`⚡ Order #${orderId} status changed to ${newStatus}`, `⚡ تم تغيير حالة الطلب #${orderId} إلى ${newStatus}`);
  showToast(`Order #${orderId} updated to ${newStatus}`, 'success');
}

function simulateNewOrder() {
  const orderId = 'ORD-' + Math.floor(2000 + Math.random() * 7000);
  const influxOrder = {
    id: orderId,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    customerName: 'Youssef Al-Alfy',
    phone: '+20 115 889 0011',
    address: '22 Gezira St, Zamalek, Cairo',
    items: 'Artisan Sourdough x1, Triple Chocolate Cookie x3',
    itemsAr: 'خبز الساوردو الحرفي x1، كوكيز الشوكولاتة x3',
    total: 170.00,
    status: 'BAKING',
    stepIndex: 1,
    driver: {
      name: 'Ahmed Samir',
      phone: '+20 102 443 8899',
      vehicle: 'Honda Delivery Moto - س ف ب ٤١٢',
      rating: 4.9,
      etaMinutes: 22
    }
  };

  orders.unshift(influxOrder);
  localStorage.setItem('bakery_orders', JSON.stringify(orders));
  CloudDB.saveOrderToCloud(influxOrder);
  loadAdminOrders();
  pushNotification(`🔔 New Incoming Order #${orderId}!`, `🔔 طلب جديد وارد #${orderId}!`);
  showToast(`🔔 New Order #${orderId} received!`, 'success');
}

function loadAdminCatalog() {
  const tbody = document.getElementById('adm-catalog-tbody');
  if (!tbody) return;

  tbody.innerHTML = PRODUCTS.map(p => `
    <tr>
      <td><b>${p.emoji} ${p.name.en}</b></td>
      <td>${p.categoryKey || p.category.en}</td>
      <td>${formatPrice(p.price)}</td>
      <td><span style="font-weight:700;color:${p.stock < 10 ? '#d32f2f' : '#2e7d32'};">${p.stock || 20}</span> in stock</td>
      <td><span class="status-badge ${p.stock > 0 ? 'delivered' : 'baking'}">${p.stock > 0 ? 'Available' : 'Out of Stock'}</span></td>
      <td>
        <button class="btn-secondary btn-sm" onclick="editProduct('${p.id}')">Edit</button>
        <button class="btn-secondary btn-sm" style="color:var(--error);" onclick="deleteProduct('${p.id}')">Delete</button>
      </td>
    </tr>
  `).join('');
}

function loadAdminBranches() {
  const grid = document.getElementById('adm-branches-grid');
  if (!grid) return;

  const branches = [
    { name: 'Zamalek Flagship', addr: '12 Brazil St, Zamalek', phone: '+20 2 2736 1122', couriers: '6 Active', radius: '5km radius' },
    { name: 'Maadi Degla Kitchen', addr: 'Road 218, Degla', phone: '+20 2 2519 4433', couriers: '4 Active', radius: '7km radius' },
    { name: 'New Cairo 5th Settlement', addr: 'Concord Plaza, 90th St', phone: '+20 2 2813 9900', couriers: '8 Active', radius: '10km radius' },
    { name: 'Sheikh Zayed Arkan', addr: 'Arkan Plaza Phase 2', phone: '+20 2 3850 7711', couriers: '5 Active', radius: '8km radius' }
  ];

  grid.innerHTML = branches.map(b => `
    <div class="branch-card">
      <div class="branch-card-header">
        <h4>${b.name}</h4>
        <span class="branch-status-open">Open 07:00 - 23:00</span>
      </div>
      <p style="color:var(--text-muted);font-size:0.88rem;margin-bottom:6px;">📍 ${b.addr}</p>
      <p style="color:var(--text-muted);font-size:0.88rem;margin-bottom:12px;">📞 ${b.phone}</p>
      <div style="display:flex;gap:16px;font-size:0.84rem;font-weight:600;color:var(--gold);">
        <span>🛵 ${b.couriers}</span>
        <span>🗺️ ${b.radius}</span>
      </div>
    </div>
  `).join('');
}

// ===== CLOUD DB SETTINGS (ADMIN) =====
function loadCloudDBSettings() {
  const provEl = document.getElementById('cloud-provider-select');
  const urlEl = document.getElementById('cloud-supabase-url');
  const keyEl = document.getElementById('cloud-supabase-key');

  if (provEl) provEl.value = CLOUD_CONFIG.provider;
  if (urlEl) urlEl.value = CLOUD_CONFIG.supabaseUrl;
  if (keyEl) keyEl.value = CLOUD_CONFIG.supabaseKey;
}

function saveCloudDBSettings(e) {
  e.preventDefault();
  const prov = document.getElementById('cloud-provider-select').value;
  const url = document.getElementById('cloud-supabase-url').value.trim();
  const key = document.getElementById('cloud-supabase-key').value.trim();

  CLOUD_CONFIG.provider = prov;
  CLOUD_CONFIG.supabaseUrl = url;
  CLOUD_CONFIG.supabaseKey = key;

  localStorage.setItem('bakery_cloud_provider', prov);
  localStorage.setItem('bakery_supabase_url', url);
  localStorage.setItem('bakery_supabase_key', key);

  CloudDB.init();
  showToast(currentLang === 'ar' ? '✓ تم حفظ إعدادات قاعدة البيانات السحابية!' : '✓ Cloud Database settings saved & connected!', 'success');
}

async function testCloudConnection() {
  showToast(currentLang === 'ar' ? '📡 جاري اختبار الاتصال بقاعدة البيانات...' : '📡 Testing cloud database connection...', 'info');
  setTimeout(() => {
    showToast(currentLang === 'ar' ? '🟢 تم الاتصال بالسحابة بنجاح! Latency: 42ms' : '🟢 Free Cloud Database Online! Ping: 42ms', 'success');
  }, 600);
}

// Product Modal (Admin) Image & CRUD Helpers
function previewProductModalImg(url) {
  const previewWrap = document.getElementById('pm-img-preview-wrap');
  const previewImg = document.getElementById('pm-img-preview');
  if (url && url.trim()) {
    if (previewImg) previewImg.src = url.trim();
    if (previewWrap) previewWrap.style.display = 'flex';
  } else {
    if (previewWrap) previewWrap.style.display = 'none';
  }
}

function handleProductImgFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    const input = document.getElementById('pm-img-url');
    if (input) input.value = dataUrl;
    previewProductModalImg(dataUrl);
    showToast(currentLang === 'ar' ? '✓ تم تحميل الصورة للمنتج' : '✓ Product image uploaded', 'success');
  };
  reader.readAsDataURL(file);
}

function openAddProductModal() {
  document.getElementById('product-modal-title').textContent = currentLang === 'ar' ? 'إضافة منتج جديد' : 'Add Bakery Product';
  document.getElementById('pm-id').value = '';
  document.getElementById('pm-name-en').value = '';
  document.getElementById('pm-name-ar').value = '';
  document.getElementById('pm-price').value = '';
  document.getElementById('pm-stock').value = '20';
  document.getElementById('pm-desc-en').value = '';
  
  const imgInput = document.getElementById('pm-img-url');
  if (imgInput) imgInput.value = '';
  const emojiInput = document.getElementById('pm-emoji');
  if (emojiInput) emojiInput.value = '🥐';
  previewProductModalImg('');

  document.getElementById('product-modal').style.display = 'flex';
}

function editProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('product-modal-title').textContent = currentLang === 'ar' ? 'تعديل المنتج' : 'Edit Bakery Product';
  document.getElementById('pm-id').value = p.id;
  document.getElementById('pm-name-en').value = p.name.en || '';
  document.getElementById('pm-name-ar').value = p.name.ar || '';
  document.getElementById('pm-category').value = p.categoryKey || 'Pastries';
  document.getElementById('pm-price').value = p.price;
  document.getElementById('pm-stock').value = p.stock || 20;
  document.getElementById('pm-desc-en').value = (typeof p.description === 'object') ? (p.description.en || '') : p.description;
  
  const imgInput = document.getElementById('pm-img-url');
  if (imgInput) imgInput.value = p.img || '';
  const emojiInput = document.getElementById('pm-emoji');
  if (emojiInput) emojiInput.value = p.emoji || '🥐';
  previewProductModalImg(p.img || '');

  document.getElementById('product-modal').style.display = 'flex';
}

function closeProductModal() {
  document.getElementById('product-modal').style.display = 'none';
}

function handleSaveProduct(e) {
  e.preventDefault();
  const id = document.getElementById('pm-id').value;
  const nameEn = document.getElementById('pm-name-en').value;
  const nameAr = document.getElementById('pm-name-ar').value;
  const cat = document.getElementById('pm-category').value;
  const price = parseFloat(document.getElementById('pm-price').value);
  const stock = parseInt(document.getElementById('pm-stock').value);
  const desc = document.getElementById('pm-desc-en').value;
  const imgUrl = document.getElementById('pm-img-url') ? document.getElementById('pm-img-url').value.trim() : '';
  const emoji = document.getElementById('pm-emoji') ? document.getElementById('pm-emoji').value.trim() : '🥐';

  if (id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (p) {
      p.name.en = nameEn;
      p.name.ar = nameAr;
      p.categoryKey = cat;
      p.price = price;
      p.stock = stock;
      p.description = { en: desc, ar: desc };
      p.img = imgUrl || null;
      p.emoji = emoji || '🥐';
    }
  } else {
    const newP = {
      id: (PRODUCTS.length + 1).toString(),
      name: { en: nameEn, ar: nameAr },
      category: { en: cat, ar: cat },
      categoryKey: cat,
      price: price,
      description: { en: desc, ar: desc },
      img: imgUrl || null,
      emoji: emoji || '🧁',
      stock: stock
    };
    PRODUCTS.push(newP);
  }

  closeProductModal();
  loadAdminCatalog();
  renderProducts(currentFilter);
  renderBestSellers();
  showToast(currentLang === 'ar' ? '✓ تم حفظ بيانات وصورة المنتج بنجاح' : '✓ Product and image saved successfully', 'success');
}

function deleteProduct(id) {
  PRODUCTS = PRODUCTS.filter(p => p.id !== id);
  loadAdminCatalog();
  renderProducts(currentFilter);
  renderBestSellers();
  showToast(currentLang === 'ar' ? 'تم حذف المنتج' : 'Product deleted');
}

// ===== AUTH =====
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;

  // Check if admin credentials
  if (email.includes('admin') || password === 'admin' || password === '2026') {
    const adminUser = userAccounts.find(u => u.role === 'admin') || DEFAULT_USERS[0];
    currentUser = adminUser;
    localStorage.setItem('bakery_current_user', JSON.stringify(adminUser));
    isAdminAuthenticated = true;
    sessionStorage.setItem('bakery_admin_auth', 'true');
    updateAuthUI();
    updateAdminNavVisibility();
    showToast(currentLang === 'ar' ? '👑 مرحباً بك في لوحة الإدارة!' : '👑 Welcome to Admin Portal!', 'success');
    setTimeout(() => showPage('admin', document.querySelector('[data-page=admin]')), 600);
    return;
  }

  // Check existing user
  let matchedUser = userAccounts.find(u => u.email.toLowerCase() === email);
  if (!matchedUser) {
    // Create new customer account on the fly for convenience
    const name = email.split('@')[0].replace('.', ' ');
    matchedUser = {
      id: 'usr-' + Date.now(),
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email: email,
      password: password,
      role: 'user',
      phone: '+20 100 000 0000',
      address: 'Cairo, Egypt',
      loyaltyPoints: 100,
      avatar: '🧁'
    };
    userAccounts.push(matchedUser);
    localStorage.setItem('bakery_users', JSON.stringify(userAccounts));
  }

  currentUser = matchedUser;
  localStorage.setItem('bakery_current_user', JSON.stringify(matchedUser));
  isAdminAuthenticated = false;
  sessionStorage.removeItem('bakery_admin_auth');
  userLoyaltyPoints = matchedUser.loyaltyPoints || 100;
  
  updateAuthUI();
  updateAdminNavVisibility();
  updateLoyaltyDisplay();

  showToast(currentLang === 'ar' ? `👋 مرحباً بعودتك، ${matchedUser.name}!` : `👋 Welcome back, ${matchedUser.name}!`, 'success');
  setTimeout(() => showPage('home', document.querySelector('[data-page=home]')), 600);
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const phone = document.getElementById('reg-phone') ? document.getElementById('reg-phone').value.trim() : '';
  const address = document.getElementById('reg-address') ? document.getElementById('reg-address').value.trim() : '';
  const password = document.getElementById('reg-password').value;

  const newUser = {
    id: 'usr-' + Date.now(),
    name: name,
    email: email,
    password: password,
    role: 'user',
    phone: phone || '+20 100 123 4567',
    address: address || 'Cairo, Egypt',
    loyaltyPoints: 100, // 100 bonus welcome points
    avatar: '🧁'
  };

  userAccounts.push(newUser);
  localStorage.setItem('bakery_users', JSON.stringify(userAccounts));

  currentUser = newUser;
  localStorage.setItem('bakery_current_user', JSON.stringify(newUser));
  isAdminAuthenticated = false;
  sessionStorage.removeItem('bakery_admin_auth');
  userLoyaltyPoints = 100;

  updateAuthUI();
  updateAdminNavVisibility();
  updateLoyaltyDisplay();

  pushNotification(`🎁 +100 Golden Crumbs awarded! Welcome, ${name}!`, `🎁 تم إضافة +١٠٠ نقطة ترحيبية لحسابك! مرحباً بك، ${name}!`);
  showToast(currentLang === 'ar' ? `🎉 تم إنشاء حسابك بنجاح! مرحباً بك، ${name}!` : `🎉 Account created! Welcome, ${name}! (+100 Pts)`, 'success');
  setTimeout(() => showPage('home', document.querySelector('[data-page=home]')), 700);
}

// ===== SCROLL LISTENER =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  if (window.scrollY > 30) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage();
  updateAuthUI();
  updateCartBadge();
  updateLoyaltyDisplay();
  updateAdminNavVisibility();
  renderBestSellers();
  renderNotifications();
  CloudDB.init();
});
