document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent.trim();
            portfolioItems.forEach(item => {
                item.style.display = item.getAttribute('data-category') === category || category === 'All' ? 'block' : 'none';
            });
        });
    });
});
