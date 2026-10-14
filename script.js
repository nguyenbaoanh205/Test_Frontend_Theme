document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".ddn-menu-toggle"), mobile = document.querySelector(".ddn-mobile-nav");
    if (toggle && mobile) { toggle.setAttribute("aria-expanded", "false"); toggle.addEventListener("click", () => { const open = mobile.classList.toggle("ddn-open"); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu") }); mobile.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { mobile.classList.remove("ddn-open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu") })) }
    document.querySelectorAll(".ddn-accordion-header").forEach(button => button.addEventListener("click", () => { const box = button.closest(".ddn-accordion"), content = box && box.querySelector(".ddn-accordion-content"), icon = button.querySelector(".ddn-accordion-icon"); if (!content) return; const open = content.classList.contains("ddn-accordion-open"); content.classList.toggle("ddn-accordion-open", !open); button.setAttribute("aria-expanded", String(!open)); if (icon) icon.textContent = open ? "+" : "−" }));
    document.querySelectorAll(".ddn-faq-question").forEach(button => button.addEventListener("click", () => { const answer = button.nextElementSibling, icon = button.querySelector(".ddn-faq-icon"), open = button.getAttribute("aria-expanded") === "true"; button.setAttribute("aria-expanded", String(!open)); if (answer) answer.hidden = open; if (icon) icon.textContent = open ? "+" : "−" }));
    const year = document.getElementById("ddn-current-year"); if (year) year.textContent = new Date().getFullYear();
    const sections = document.querySelectorAll("#home,#about,#services,#pricing,#contact,#faq"), links = document.querySelectorAll(".ddn-nav-link"); if ("IntersectionObserver" in window && sections.length && links.length) { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) links.forEach(link => link.classList.toggle("ddn-active", link.getAttribute("href") === "#" + entry.target.id)) }), { rootMargin: "-30% 0px -60% 0px" }); sections.forEach(section => observer.observe(section)) }
});

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".ddn-nav");
    if (!nav) return;

    const placeholder = document.createElement("div");
    placeholder.className = "ddn-nav-placeholder";
    nav.parentNode.insertBefore(placeholder, nav);

    let navOriginalTop = 0;

    function updateNavPosition() {
        // Đo vị trí gốc khi nav chưa fixed
        if (!nav.classList.contains("ddn-nav-fixed")) {
            navOriginalTop = nav.getBoundingClientRect().top + window.scrollY;
        }

        if (window.scrollY + 100 >= navOriginalTop) {
            if (!nav.classList.contains("ddn-nav-fixed")) {
                placeholder.style.height = nav.offsetHeight + "px";
                placeholder.classList.add("is-active");
                nav.classList.add("ddn-nav-fixed");
            }
        } else {
            nav.classList.remove("ddn-nav-fixed");
            placeholder.classList.remove("is-active");
            placeholder.style.height = "0";
        }
    }

    window.addEventListener("scroll", updateNavPosition, { passive: true });
    window.addEventListener("resize", updateNavPosition);

    updateNavPosition();
});
