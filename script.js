document.addEventListener('DOMContentLoaded', () => {

    // 1. ELIMINAR LOADER
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 1000);
        }, 2200);
    });

    // 2. CUSTOM CURSOR
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, input').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
    });

    // 3. REVEAL SCROLL
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});