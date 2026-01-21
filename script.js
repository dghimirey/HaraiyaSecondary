  document.addEventListener("DOMContentLoaded", () => {
            // Mobile Navigation Toggle
            const mobileToggle = document.getElementById('mobileToggle');
            const navMenu = document.getElementById('navMenu');

            if (mobileToggle && navMenu) {
                mobileToggle.addEventListener('click', () => {
                    mobileToggle.classList.toggle('active');
                    navMenu.classList.toggle('active');
                });
            }

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileToggle?.classList.remove('active');
                    navMenu?.classList.remove('active');
                });
            });

            // Back to Top Button
            const backToTop = document.getElementById('backToTop');

            window.addEventListener('scroll', () => {
                if (backToTop) {
                    backToTop.classList.toggle('visible', window.pageYOffset > 300);
                }
            });

            backToTop?.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Navbar Scroll Effect
            const navbar = document.getElementById('navbar');

            window.addEventListener('scroll', () => {
                if (navbar) {
                    navbar.classList.toggle('scrolled', window.pageYOffset > 50);
                }
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

        });
