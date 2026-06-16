// ========== WHATSAPP ORDER FUNCTION ==========
function orderNow(dishName) {
    // 🔴 GANTI NOMOR INI DENGAN NOMOR WHATSAPP ANDA
    const phoneNumber = '6282338516014'; // Contoh: 6281234567890 (tanpa +62, gunakan 62)
    const message = `Halo, saya ingin memesan ${dishName} dari website katalog menu Anda.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// ========== FILTER MENU ==========
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            menuCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'semua' || category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// ========== SMOOTH SCROLL ==========
const jelajahiBtn = document.querySelector('.btn-primary');
if (jelajahiBtn) {
    jelajahiBtn.addEventListener('click', function() {
        const menuSection = document.getElementById('menu');
        menuSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

console.log('🍽️ 3G Moms Kitchen Website Loaded Successfully! ✨');