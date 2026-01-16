// ============================================
// SCROLL-BASED ANIMATIONS & INTERACTIONS
// ============================================

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// AOS (Animate On Scroll) Implementation
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            // Get delay from data attribute
            const delay = entry.target.getAttribute('data-aos-delay');
            if (delay) {
                entry.target.style.transitionDelay = `${delay}ms`;
            }
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ============================================
// PARALLAX EFFECTS
// ============================================
const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-parallax-speed'));
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Parallax for hero video
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        
        if (scrolled < heroHeight) {
            const yPos = scrolled * 0.5;
            heroVideo.style.transform = `translateY(${yPos}px)`;
        }
    });
}

// ============================================
// HORIZONTAL SCROLLING GALLERY
// ============================================
const galleryTrack = document.getElementById('galleryTrack');

// Duplicate gallery items for seamless loop
if (galleryTrack) {
    const galleryItems = galleryTrack.innerHTML;
    galleryTrack.innerHTML = galleryItems + galleryItems;
    
    // Reset animation when it completes
    galleryTrack.addEventListener('animationiteration', () => {
        // Smooth reset handled by CSS animation
    });
}

// Pause animation on hover (handled by CSS, but adding JS for extra control)
if (galleryTrack) {
    galleryTrack.addEventListener('mouseenter', () => {
        galleryTrack.style.animationPlayState = 'paused';
    });
    
    galleryTrack.addEventListener('mouseleave', () => {
        galleryTrack.style.animationPlayState = 'running';
    });
}

// ============================================
// FLOATING CARDS ANIMATION
// ============================================
const floatingCards = document.querySelectorAll('.floating-card');

// Add staggered animation delays
floatingCards.forEach((card, index) => {
    const delay = index * 0.2;
    card.style.animationDelay = `${delay}s`;
});

// ============================================
// INTERACTIVE IMAGE ZOOM ON SCROLL
// ============================================
const galleryItems = document.querySelectorAll('.gallery-item, .gallery-grid-item');

galleryItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / centerX * 10;
        const moveY = (y - centerY) / centerY * 10;
        
        const img = item.querySelector('img');
        if (img) {
            img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1) translate(0, 0)';
        }
    });
});

// ============================================
// SMOOTH SCROLL REVEAL FOR SECTIONS
// ============================================
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -150px 0px'
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    sectionObserver.observe(section);
});

// ============================================
let cursor = document.querySelector('.custom-cursor');
if (!cursor) {
    cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
}

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .menu-item, .event-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'rgba(255, 0, 51, 0.3)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// ============================================
// BUTTON INTERACTIONS
// ============================================
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .reserve-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ============================================
// VIDEO AUTOPLAY HANDLING
// ============================================
const heroVideoElement = document.querySelector('.hero-video');
if (heroVideoElement) {
    // Ensure video plays on load
    heroVideoElement.play().catch(error => {
        console.log('Video autoplay prevented:', error);
    });
    
    // Pause/play on visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            heroVideoElement.pause();
        } else {
            heroVideoElement.play();
        }
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Throttle scroll events
let ticking = false;

function updateOnScroll() {
    // All scroll-based updates happen here
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Fade in hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

// ============================================
// MOBILE MENU TOGGLE (if needed for responsive)
// ============================================
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.display = 'block';
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
};

// Check on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// ============================================
// PREVENT LAYOUT SHIFT ON IMAGE LOAD
// ============================================
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    // Set initial opacity
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease-in';
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🐅 TIGER CLUB', 'font-size: 20px; font-weight: bold; color: #FF0033;');
console.log('%cPremium Bar & Dance Club Website', 'font-size: 12px; color: #FFD700;');
