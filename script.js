/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    document
        .querySelectorAll("#nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


    /* Close mobile navigation when clicking outside */

    document.addEventListener("click", event => {

        const clickedInsideNav =
            nav.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);


        if (
            !clickedInsideNav &&
            !clickedMenuButton &&
            nav.classList.contains("open")
        ) {

            nav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");


                        /*
                         Stop observing after the animation
                         has run once.
                        */

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.10,
                rootMargin: "0px 0px -30px 0px"
            }

        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

}
else {

    /*
     Fallback for old browsers.
    */

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}



/* =====================================================
   EXPERIENCE TIMELINE
===================================================== */

const timelineItems =
    document.querySelectorAll(".timeline-item");


timelineItems.forEach(item => {

    const head =
        item.querySelector(".timeline-head");


    if (!head) return;


    head.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("open");


        /*
         Close other timeline items.
        */

        timelineItems.forEach(otherItem => {

            if (otherItem === item) return;


            otherItem.classList.remove("open");


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

        });


        /*
         Toggle current item.
        */

        item.classList.toggle(
            "open",
            !isOpen
        );


        head.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

    });

});



/*
 Open first professional experience
 automatically.
*/

const firstTimelineItem =
    document.querySelector(
        "#timeline .timeline-item"
    );


if (firstTimelineItem) {

    firstTimelineItem
        .classList
        .add("open");


    const firstTimelineHead =
        firstTimelineItem.querySelector(
            ".timeline-head"
        );


    if (firstTimelineHead) {

        firstTimelineHead.setAttribute(
            "aria-expanded",
            "true"
        );

    }

}



/* =====================================================
   GENERATE GEAR TEETH
===================================================== */

(function drawGearTeeth() {

    const teethGroup =
        document.getElementById("teeth");


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
            (i / toothCount)
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
                radius
                +
                toothLength
            );


        const y2 =
            Math.sin(angle)
            *
            (
                radius
                +
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


        teethGroup.appendChild(line);

    }

})();



/* =====================================================
   CONTACT FORM
===================================================== */

/*
 IMPORTANT:

 This website is hosted as a static site,
 so JavaScript alone cannot send email.

 For now, this prevents a visitor from
 receiving a false "message sent" confirmation.

 Later you can connect the form to:
 - Formspree
 - EmailJS
 - Web3Forms
 - A serverless backend
*/

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener(

        "submit",

        event => {

            event.preventDefault();


            const submitButton =
                contactForm.querySelector(
                    "button[type='submit']"
                );


            if (!submitButton) return;


            const originalLabel =
                submitButton.textContent;


            submitButton.textContent =
                "Form service not connected";


            submitButton.disabled = true;


            setTimeout(() => {

                submitButton.textContent =
                    originalLabel;


                submitButton.disabled = false;

            }, 2200);

        }

    );

}



/* =====================================================
   ACTIVE NAVIGATION LINK
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
    "IntersectionObserver" in window
    &&
    sections.length
    &&
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

                            const matches =
                                link.getAttribute(
                                    "href"
                                )
                                ===
                                `#${sectionId}`;


                            link.classList.toggle(
                                "active",
                                matches
                            );

                        }
                    );

                });

            },

            {
                threshold: 0.35
            }

        );


    sections.forEach(section => {

        navigationObserver.observe(section);

    });

}
