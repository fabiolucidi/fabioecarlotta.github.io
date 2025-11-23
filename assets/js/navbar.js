/* assets/js/navbar.js */
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const headerHeight = navbar.offsetHeight;   // altezza originale del wrapper

    function toggleSticky() {
        if (window.scrollY > headerHeight) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    }

    // Aggiorna al caricamento e ad ogni scroll
    toggleSticky();
    window.addEventListener('scroll', toggleSticky);
});