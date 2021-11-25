var scroll = new SmoothScroll('a[href*="#"]');
var mobileNav = document.getElementById("mobile-nav");


document.getElementById("menu_checkbox").addEventListener("click", () => {
    mobileNav.classList.toggle("mystyle");
});