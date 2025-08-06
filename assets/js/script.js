// Language Switch
const langEs = document.getElementById('lang-es');
const langEn = document.getElementById('lang-en');

// English translations
const translations = {
    'inicio': 'Home',
    'descarga': 'Download',
    'caracteristicas': 'Features',
    'avances': 'Progress',
    'documentacion': 'Documentation',
    'comunidad': 'Community',
    'titulo-hero': 'Genesis Engine',
    'subtitulo-hero': 'The ultimate modding engine for Friday Night Funkin\' with improved performance and full mod support',
    'btn-descargar': 'Download Now',
    'btn-documentacion': 'Documentation',
    'btn-jugar': 'Play Now',
    'caracteristicas-principales': 'Main Features',
    'rendimiento': 'Improved Performance',
    'rendimiento-desc': 'Optimized for smooth performance even on modest hardware.',
    'personalizacion': 'Customization',
    'personalizacion-desc': 'Fully customizable with theme and skin support.',
    'mods': 'Mod Support',
    'mods-desc': 'Easy-to-use mod system with complete documentation.',
    'multijugador': 'Multiplayer',
    'multijugador-desc': 'Coming soon',
    'derechos': '© 2023 Genesis Engine. All rights reserved.'
};

// Detect color scheme function
function detectColorScheme() {
    // Esta función puede estar vacía o implementar detección de tema
    console.log('Color scheme detected');
}

langEs.addEventListener('click', () => {
    langEs.classList.add('active');
    langEn.classList.remove('active');

    // Reset all texts to Spanish (default)
    document.querySelectorAll('[class^="lang-"]').forEach(el => {
        const className = el.className.replace('lang-', '');
        if (translations[className]) {
            el.textContent = el.getAttribute('data-original') || el.textContent;
        }
    });
});

langEn.addEventListener('click', () => {
    langEn.classList.add('active');
    langEs.classList.remove('active');

    // Translate to English
    document.querySelectorAll('[class^="lang-"]').forEach(el => {
        const className = el.className.replace('lang-', '');
        if (translations[className]) {
            // Save original text if not already saved
            if (!el.getAttribute('data-original')) {
                el.setAttribute('data-original', el.textContent);
            }
            el.textContent = translations[className];
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('nav-links');
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        if (navLinks) {
            navLinks.classList.add('scrolled');
        }
    } else {
        navbar.classList.remove('scrolled');
        if (navLinks) {
            navLinks.classList.remove('scrolled');
        }
    }
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check color scheme on load
    detectColorScheme();
    
    // Listen for changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectColorScheme);
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Apply scroll class if already scrolled
            if (window.scrollY > 100) {
                navLinks.classList.add('scrolled');
            }
        });

        // Close mobile menu when clicking on a link
        const navLinksItems = document.querySelectorAll('.nav-links a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target) || menuToggle.contains(event.target);
            
            if (!isClickInsideNav && navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});