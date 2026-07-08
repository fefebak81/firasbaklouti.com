// ==========================
// Mobile Navigation
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    // Open / Close menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("open");
        document.body.classList.toggle("menu-open");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            document.body.classList.remove("menu-open");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {

        if (
            navLinks.classList.contains("active") &&
            !navLinks.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            document.body.classList.remove("menu-open");
        }

    });

}
