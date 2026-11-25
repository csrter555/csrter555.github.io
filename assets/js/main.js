document.addEventListener('DOMContentLoaded', () => {
    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ========== ELEMENTS ==========
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');
    const emptyState = document.getElementById('empty-state');

    // A card is a "category card" if its h3 says "Category" (case-insensitive)
    // or if it has data-type="category"
    function isCategoryCard(card) {
        if (card.dataset.type === 'category') return true;
        const title = card.querySelector('h3')?.textContent?.trim().toLowerCase();
        return title === 'category';
    }

    // Separate category cards vs actual work items
    const categoryCards = [];
    const itemCards = [];
    workCards.forEach(card => {
        if (isCategoryCard(card)) {
            categoryCards.push(card);
        } else {
            itemCards.push(card);
        }
    });

    // Count real items per category (used to hide empty filter buttons)
    const itemCounts = {};
    itemCards.forEach(card => {
        const cat = card.dataset.category;
        if (cat) itemCounts[cat] = (itemCounts[cat] || 0) + 1;
    });

    // Also count category cards (so a category with only a category card still shows the button)
    const categoryCardCounts = {};
    categoryCards.forEach(card => {
        const cat = card.dataset.category;
        if (cat) categoryCardCounts[cat] = (categoryCardCounts[cat] || 0) + 1;
    });

    // Hide filter buttons that have neither items nor a category card
    filterBtns.forEach(btn => {
        const filter = btn.dataset.filter;
        if (filter && filter !== 'all') {
            const hasItems = (itemCounts[filter] || 0) > 0;
            const hasCategoryCard = (categoryCardCounts[filter] || 0) > 0;
            btn.style.display = (hasItems || hasCategoryCard) ? '' : 'none';
        }
    });

    // ========== APPLY FILTER ==========
    function applyFilter(filter) {
        // Update active button
        filterBtns.forEach(b => {
            b.classList.toggle('active', b.dataset.filter === filter);
        });

        let visibleCount = 0;

        if (filter === 'all') {
            // Show ONLY category cards
            categoryCards.forEach(card => {
                card.style.display = '';
                visibleCount++;
            });
            itemCards.forEach(card => {
                card.style.display = 'none';
            });
        } else {
            // Show ONLY real items in this category (hide category cards)
            categoryCards.forEach(card => {
                card.style.display = 'none';
            });
            itemCards.forEach(card => {
                if (card.dataset.category === filter) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
        }

        if (emptyState) {
            emptyState.classList.toggle('hidden', visibleCount > 0);
        }
    }

    // Filter button clicks
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            applyFilter(btn.dataset.filter);
        });
    });

    // Make category cards clickable → filter to that category
    categoryCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const cat = card.dataset.category;
            if (cat) applyFilter(cat);
        });
    });

    // Start on "All Work" (category overview)
    applyFilter('all');

    // ========== NAV ACTIVE STATE ON SCROLL ==========
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    function updateActiveNav() {
        const scrollY = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    // ========== REVEAL ON SCROLL ==========
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));

    document.querySelectorAll('.work-card, #reviews-grid > div').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(i % 6) * 0.05}s`;
        observer.observe(el);
    });

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Mobile menu placeholder
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            console.log('Mobile menu clicked - extend as needed');
        });
    }
});
