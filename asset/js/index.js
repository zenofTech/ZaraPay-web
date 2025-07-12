
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                header.style.background = 'rgba(10, 26, 42, 0.98)';
            } else {
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
                header.style.background = 'rgba(10, 26, 42, 0.95)';
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                }
            });
        });

        // Animation on scroll
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.feature-card, .step, .section-header, .hero-text, .stats, .features-extra-text, .features-extra-image, .cta-content, .new-feature-card');

            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                } else {
                    // Reset opacity and transform if element is out of view
                    element.style.opacity = "0";
                    if (element.classList.contains('section-header') || element.classList.contains('hero-text') || element.classList.contains('stats') || element.classList.contains('cta-content') || element.classList.contains('new-feature-card')) {
                        element.style.transform = "translateY(30px)";
                    } else if (element.classList.contains('features-extra-text')) {
                        element.style.transform = "translateX(-30px)";
                    } else if (element.classList.contains('features-extra-image')) {
                        element.style.transform = "translateX(30px)";
                    } else if (element.classList.contains('feature-card') || element.classList.contains('step')) {
                         element.style.transform = "translateY(30px)"; // Keep original for these
                    }
                }
            });
        };

        // Initialize
        window.addEventListener('scroll', animateOnScroll);
        // Call once on load to animate elements already in view
        window.addEventListener('load', animateOnScroll);
        
        // Add rotation animation to service items
        document.addEventListener('DOMContentLoaded', function() {
            const serviceItems = document.querySelectorAll('.service-item');
            let angle = 0;
            
            function rotateItems() {
                angle = (angle + 0.2) % 360;
                
                serviceItems.forEach((item, index) => {
                    const radius = 140;
                    const itemAngle = angle + (index * 120);
                    const radian = itemAngle * (Math.PI / 180);
                    
                    const x = Math.cos(radian) * radius;
                    const y = Math.sin(radian) * radius;
                    
                    item.style.transform = `translate(${x}px, ${y}px) rotate(${-angle}deg)`;
                });
                
                requestAnimationFrame(rotateItems);
            }
            
            rotateItems();
        });