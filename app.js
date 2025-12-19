// ================================================================
// LEONHARD'S PORTFOLIO - MAIN JAVASCRIPT
// Updated: December 18, 2025
// ================================================================

// ==== LOADER ====
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// ==== SCROLL PROGRESS BAR ====
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    const scrollPercentage = (scrolled / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercentage + '%';
});

// ==== HEADER SCROLL EFFECT ====
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==== MOBILE MENU TOGGLE ====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when link clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ==== SMOOTH SCROLL & ACTIVE NAV LINK ====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// ==== TYPING ANIMATION ====
const typingText = document.getElementById('typingText');
const roles = [
    'Data Engineer',
    'Backend Developer',
    'Cloud Specialist',
    'Problem Solver',
    'Tech Enthusiast'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, 1500);
    } else if (isDeleting && charIndex === 0) {
        roleIndex = (roleIndex + 1) % roles.length;
        isDeleting = false;
        setTimeout(typeRole, 500);
    } else {
        setTimeout(typeRole, 100);
    }
}

typeRole();

// ==== COUNTER ANIMATION ====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Trigger counters on scroll
let countersTriggered = false;

window.addEventListener('scroll', () => {
    if (!countersTriggered) {
        const expCounter = document.getElementById('expCounter');
        const projCounter = document.getElementById('projCounter');
        const certCounter = document.getElementById('certCounter');
        
        const heroSection = document.querySelector('.hero');
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        
        if (window.scrollY + window.innerHeight >= heroSection.offsetTop + 200) {
            countersTriggered = true;
            animateCounter(expCounter, 4, 1500);
            animateCounter(projCounter, 12, 1500);
            animateCounter(certCounter, 41, 1500);
        }
    }
});

// ==== SCROLL TO TOP BUTTON ====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==== INTERSECTION OBSERVER FOR ANIMATIONS ====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and cert cards
document.querySelectorAll('.project-card, .cert-card, .publication-card').forEach(el => {
    observer.observe(el);
});

// ==== SMOOTH SCROLL BEHAVIOR FOR INTERNAL LINKS ====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==== EXTERNAL LINKS TRACKING ====
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const url = link.getAttribute('href');
        console.log('Navigating to:', url);
    });
});

// ==== KEYBOARD SHORTCUTS ====
document.addEventListener('keydown', (e) => {
    // Press 'h' to go to Home
    if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
        const element = document.activeElement;
        if (element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA') {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Press '/' to focus on search (future feature)
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        console.log('Search shortcut triggered');
    }
});

// ==== PERFORMANCE: Lazy load images ====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==== RANDOM GREETING ====
const greetings = [
    'Welcome! 👋',
    'Glad you\'re here! 😊',
    'Let\'s build something amazing! 🚀',
    'Explore my work! 💻',
    'Thanks for visiting! 🙏'
];

// Log on page load
window.addEventListener('load', () => {
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    console.log(greeting);
    console.log('='.repeat(40));
    console.log('Leonhard Satria Suharjo');
    console.log('Data Engineer | Backend Developer');
    console.log('Email: leonhard.suharjo@gmail.com');
    console.log('='.repeat(40));
});

// ==== FORM VALIDATION (for future contact form) ====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
}

// ==== RESPONSIVE IMAGE SRCSET SUPPORT ====
function loadResponsiveImages() {
    const images = document.querySelectorAll('img[data-srcset]');
    images.forEach(img => {
        if ('srcset' in img) {
            img.srcset = img.dataset.srcset;
        }
    });
}

window.addEventListener('load', loadResponsiveImages);

// ==== DETECT BROWSER SUPPORT ====
const hasWebP = (() => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
})();

console.log('WebP Support:', hasWebP);

// ==== ANALYTICS (placeholder for future implementation) ====
function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
    // Future: Send to analytics service
}

// Track page views
trackEvent('page_view', {
    page: document.title,
    url: window.location.href,
    timestamp: new Date().toISOString()
});

// ==== CSS ANIMATION KEYFRAMES (via JavaScript) ====
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
        }
        50% {
            box-shadow: 0 0 40px rgba(0, 212, 255, 0.8);
        }
    }
`;
document.head.appendChild(style);

// ==== ACCESSIBILITY: SKIP TO CONTENT LINK ====
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to content';
skipLink.style.cssText = `
    position: absolute;
    left: -9999px;
    z-index: 999;
    padding: 10px 20px;
    background: #000;
    color: #fff;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.left = '50%';
    skipLink.style.top = '20px';
    skipLink.style.transform = 'translateX(-50%)';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.left = '-9999px';
});

document.body.prepend(skipLink);

// ==== THEME DETECTION ====
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
console.log('Prefers dark scheme:', prefersDarkScheme.matches);

// ==== ERROR TRACKING ====
window.addEventListener('error', (event) => {
    console.error('Error detected:', event.error);
    // Future: Send to error tracking service
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled rejection:', event.reason);
    // Future: Send to error tracking service
});