window.onscroll = function() {
    var topNavbar = document.getElementById('topNavbar');
    if (window.scrollY > 50) {
        topNavbar.classList.add('scrolled');
    } else {
        topNavbar.classList.remove('scrolled');
    }
};
