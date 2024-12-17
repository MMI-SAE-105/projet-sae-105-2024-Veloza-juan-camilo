document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-btn");
    const nav = document.querySelector(".menu");
    const page = document.body;

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", !isOpen);
            nav.setAttribute("aria-hidden", isOpen);
            page.classList.toggle("noscroll", !isOpen);
        });
    }
});