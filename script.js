/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("menu-btn");

const nav =
    document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                nav.classList.toggle("open");


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    document
        .querySelectorAll("#nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove("open");


                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });


    document.addEventListener(
        "click",
        event => {

            const clickedNav =
                nav.contains(event.target);


            const clickedButton =
                menuButton.contains(event.target);


            if (
                !clickedNav &&
                !clickedButton &&
                nav.classList.contains("open")
            ) {

                nav.classList.remove("open");


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.10,

                rootMargin:
                    "0px 0px -30px 0px"
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}

else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}



/* =====================================================
   EXPERIENCE TIMELINE
===================================================== */

const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );


timelineItems.forEach(item => {

    const head =
        item.querySelector(
            ".timeline-head"
        );


    if (!head) return;


    head.addEventListener(
        "click",
        () => {

            const isOpen =
                item.classList.contains(
                    "open"
                );


            timelineItems.forEach(
                otherItem => {

                    if (
                        otherItem === item
                    ) {
                        return;
                    }


                    otherItem
                        .classList
                        .remove("open");


                    const otherHead =
                        otherItem.querySelector(
                            ".timeline-head"
                        );


                    if (otherHead) {

                        otherHead.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );


            item.classList.toggle(
                "open",
                !isOpen
            );


            head.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        }
    );

});



/* Open first role automatically */

const firstTimelineItem =
    document.querySelector(
        "#timeline .timeline-item"
    );


if (firstTimelineItem) {

    firstTimelineItem
        .classList
        .add("open");


    const firstHead =
        firstTimelineItem.querySelector(
            ".timeline-head"
        );


    if (firstHead) {

        firstHead.setAttribute(
            "aria-expanded",
            "true"
        );

    }

}



/* =====================================================
   HERO GEAR
===================================================== */

(function drawGearTeeth() {

    const teethGroup =
        document.getElementById(
            "teeth"
        );


    if (!teethGroup) return;


    const svgNS =
        "http://www.w3.org/2000/svg";


    const toothCount = 12;

    const radius = 70;

    const toothLength = 10;


    for (
        let i = 0;
        i < toothCount;
        i++
    ) {

        const angle =
            (
                i /
                toothCount
            )
            *
            Math.PI
            *
            2;


        const x1 =
            Math.cos(angle)
            *
            radius;


        const y1 =
            Math.sin(angle)
            *
            radius;


        const x2 =
            Math.cos(angle)
            *
            (
                radius +
                toothLength
            );


        const y2 =
            Math.sin(angle)
            *
            (
                radius +
                toothLength
            );


        const line =
            document.createElementNS(
                svgNS,
                "line"
            );


        line.setAttribute(
            "x1",
            x1.toFixed(2)
        );


        line.setAttribute(
            "y1",
            y1.toFixed(2)
        );


        line.setAttribute(
            "x2",
            x2.toFixed(2)
        );


        line.setAttribute(
            "y2",
            y2.toFixed(2)
        );


        teethGroup.appendChild(
            line
        );

    }

})();



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        "#nav a"
    );


if (
    "IntersectionObserver" in window &&
    sections.length &&
    navigationLinks.length
) {

    const navigationObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const sectionId =
                        entry.target.id;


                    navigationLinks.forEach(
                        link => {

                            const target =
                                link.getAttribute(
                                    "href"
                                );


                            link.classList.toggle(
                                "active",
                                target ===
                                `#${sectionId}`
                            );

                        }
                    );

                });

            },

            {
                rootMargin:
                    "-30% 0px -55% 0px",

                threshold: 0
            }

        );


    sections.forEach(section => {

        navigationObserver.observe(
            section
        );

    });

}



/* =====================================================
   IMAGE LIGHTBOX
===================================================== */

const galleryImages =
    document.querySelectorAll(
        ".gallery-image"
    );


const photoLightbox =
    document.getElementById(
        "photo-lightbox"
    );


const photoLightboxImage =
    document.getElementById(
        "photo-lightbox-image"
    );


const photoLightboxClose =
    document.getElementById(
        "photo-lightbox-close"
    );


function openPhotoLightbox(image) {

    if (
        !photoLightbox ||
        !photoLightboxImage
    ) {
        return;
    }


    photoLightboxImage.src =
        image.src;


    photoLightboxImage.alt =
        image.alt;


    photoLightbox
        .classList
        .add("open");


    photoLightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


function closePhotoLightbox() {

    if (!photoLightbox) {
        return;
    }


    photoLightbox
        .classList
        .remove("open");


    photoLightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    if (photoLightboxImage) {

        photoLightboxImage.src = "";

    }

}


galleryImages.forEach(
    image => {

        image.addEventListener(
            "click",
            () => {

                openPhotoLightbox(
                    image
                );

            }
        );

    }
);


if (photoLightboxClose) {

    photoLightboxClose
        .addEventListener(
            "click",
            closePhotoLightbox
        );

}


if (photoLightbox) {

    photoLightbox
        .addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    photoLightbox
                ) {

                    closePhotoLightbox();

                }

            }
        );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closePhotoLightbox();

        }

    }
);



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const submitButton =
                contactForm.querySelector(
                    "button[type='submit']"
                );


            if (!submitButton) {
                return;
            }


            const originalLabel =
                submitButton.textContent;


            submitButton.textContent =
                "Form service not connected";


            submitButton.disabled =
                true;


            setTimeout(
                () => {

                    submitButton.textContent =
                        originalLabel;


                    submitButton.disabled =
                        false;

                },

                2200
            );

        }
    );

}
