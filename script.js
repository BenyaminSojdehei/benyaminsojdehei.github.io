/* Mobile menu toggle */

const menuButton = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});


/* Scroll reveal */

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


/* Expandable experience timeline */

document.querySelectorAll(".timeline-item").forEach(item => {
    const head = item.querySelector(".timeline-head");

    head.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        document.querySelectorAll(".timeline-item.open").forEach(open => {
            if (open !== item) open.classList.remove("open");
        });

        item.classList.toggle("open", !isOpen);
    });
});

// Open the first professional experience item by default
const firstTimelineItem = document.querySelector("#timeline-pro .timeline-item");
if (firstTimelineItem) firstTimelineItem.classList.add("open");


/* Generate gear teeth for the hero illustration */

(function drawGearTeeth() {
    const teethGroup = document.getElementById("teeth");
    if (!teethGroup) return;

    const svgNS = "http://www.w3.org/2000/svg";
    const toothCount = 12;
    const radius = 70;
    const toothLength = 10;

    for (let i = 0; i < toothCount; i++) {
        const angle = (i / toothCount) * Math.PI * 2;
        const x1 = Math.cos(angle) * radius;
        const y1 = Math.sin(angle) * radius;
        const x2 = Math.cos(angle) * (radius + toothLength);
        const y2 = Math.sin(angle) * (radius + toothLength);

        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", x1.toFixed(2));
        line.setAttribute("y1", y1.toFixed(2));
        line.setAttribute("x2", x2.toFixed(2));
        line.setAttribute("y2", y2.toFixed(2));

        teethGroup.appendChild(line);
    }
})();


/* Gallery carousel */

(function initGallery() {
    const gallery = document.getElementById("gallery-carousel");
    if (!gallery) return;

    const slides = Array.from(gallery.querySelectorAll(".gallery-slide"));
    const dotsContainer = document.getElementById("gallery-dots");
    const captionEl = document.getElementById("gallery-caption");
    const prevBtn = gallery.querySelector(".gallery-prev");
    const nextBtn = gallery.querySelector(".gallery-next");

    let current = 0;

    slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "gallery-dot";
        dot.setAttribute("aria-label", `Go to photo ${i + 1}`);
        dot.addEventListener("click", () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll(".gallery-dot"));

    function goTo(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
        dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
        if (captionEl) captionEl.textContent = slides[current].dataset.caption || "";
    }

    prevBtn.addEventListener("click", () => goTo(current - 1));
    nextBtn.addEventListener("click", () => goTo(current + 1));

    goTo(0);

    /* Lightbox (click a photo to zoom) */

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");

    function openLightbox(src, alt) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt || "";
        lightbox.classList.add("open");
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("open");
        lightboxImg.src = "";
    }

    slides.forEach(slide => {
        const img = slide.querySelector("img");
        if (!img) return;
        img.addEventListener("click", () => {
            if (slide.classList.contains("is-empty")) return; // no real photo yet
            openLightbox(img.src, img.alt);
        });
    });

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightbox) {
        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) closeLightbox();
        });
    }
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeLightbox();
    });
})();


/* Contact form (static site — no backend wired up yet) */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector("button[type='submit']");
        const originalLabel = submitButton.textContent;

        submitButton.textContent = "Sent";
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = originalLabel;
            submitButton.disabled = false;
            contactForm.reset();
        }, 2200);

        // TODO: wire this up to an actual form backend (e.g. Formspree,
        // EmailJS, or a serverless function) so submissions are delivered.
    });
}
