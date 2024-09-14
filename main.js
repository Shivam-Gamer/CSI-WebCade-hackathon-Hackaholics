document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// MAIN BODY

document.getElementById('language').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const url = selectedOption.getAttribute('data-url');
    if (url) {
        window.location.href = url;
    }
});


// RECOMMENDED PRODUCTS

