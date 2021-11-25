var scroll = new SmoothScroll('a[href*="#"]');
var mobileNav = document.getElementById("mobile-nav");

document.getElementById("menu_checkbox").addEventListener("click", () => {
    mobileNav.classList.toggle("mystyle");
});

for (let child of mobileNav.children) {
    child.addEventListener("click", () => {
        mobileNav.classList.remove("mystyle");
    });
}