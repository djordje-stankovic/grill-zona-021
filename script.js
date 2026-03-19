// ===== NAVBAR SCROLL =====
(function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
})();

// ===== MOBILE NAV =====
(function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close on link click
        const links = mobileNav.querySelectorAll('a');
        if (links.length > 0) {
            links.forEach(function(link) {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    }
})();

// ===== SCROLL ANIMATIONS =====
(function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    if (elements.length > 0) {
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

            elements.forEach(function(el) {
                observer.observe(el);
            });

            setTimeout(function() { elements.forEach(function(el) { el.classList.add('visible'); }); }, 2000);
        } else {
            elements.forEach(function(el) { el.classList.add('visible'); });
        }
    }
})();

// ===== MENU TABS =====
(function() {
    const tabs = document.querySelectorAll('.menu-tab');
    const categories = document.querySelectorAll('.menu-category');

    if (tabs.length > 0 && categories.length > 0) {
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                var target = this.getAttribute('data-tab');

                // Update active tab
                tabs.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');

                // Show/hide categories
                if (target === 'all') {
                    categories.forEach(function(cat) {
                        cat.style.display = 'block';
                    });
                } else {
                    categories.forEach(function(cat) {
                        if (cat.getAttribute('data-category') === target) {
                            cat.style.display = 'block';
                        } else {
                            cat.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
})();

// ===== LIGHTBOX =====
(function() {
    var lightbox = document.querySelector('.lightbox');
    var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
    var lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
    var galleryItems = document.querySelectorAll('.gallery-item');

    if (lightbox && lightboxImg && galleryItems.length > 0) {
        galleryItems.forEach(function(item) {
            item.addEventListener('click', function() {
                var img = this.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener('click', function() {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
})();

// ===== BACK TO TOP =====
(function() {
    var backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();

// ===== SMOOTH SCROLL FOR ANCHORS =====
(function() {
    var anchors = document.querySelectorAll('a[href^="#"]');
    if (anchors.length > 0) {
        anchors.forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var href = this.getAttribute('href');
                if (href && href.length > 1) {
                    var target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
})();
