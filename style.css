* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg: #070B14;
    --bg-elevated: #0D1526;
    --bg-elevated-2: #111C33;
    --border: #1D2A45;
    --border-soft: #16203A;

    --blue: #3B82F6;
    --blue-light: #60A5FA;
    --violet: #8B5CF6;

    --text: #E8ECF4;
    --text-muted: #8D96AC;
    --text-dim: #5D6478;

    --radius: 14px;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: "Inter", sans-serif;
    line-height: 1.65;
    font-size: 16px;
}

a {
    color: inherit;
    text-decoration: none;
}

h1, h2, h3, .logo {
    font-family: "Space Grotesk", sans-serif;
}

.gradient-text {
    background: linear-gradient(90deg, var(--blue-light), var(--violet));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}


/* BUTTONS */

.btn {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    padding: 14px 26px;

    font-size: 14px;
    font-weight: 600;

    border-radius: 999px;

    border: 1px solid transparent;

    cursor: pointer;

    transition: transform .2s ease, border-color .2s ease, background .2s ease;
}

.btn-solid {
    background: var(--blue);
    color: #fff;
}

.btn-solid:hover {
    transform: translateY(-2px);
    background: #4c8bf7;
}

.btn-outline {
    background: transparent;
    border-color: var(--border);
    color: var(--text);
}

.btn-outline:hover {
    border-color: var(--blue);
    color: var(--blue-light);
}


/* NAVIGATION */

.navbar {
    height: 76px;
    padding: 0 5vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    background: rgba(7, 11, 20, 0.82);
    backdrop-filter: blur(14px);

    border-bottom: 1px solid var(--border-soft);
}

.logo {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: .5px;
    white-space: nowrap;
}

.logo span {
    color: var(--blue-light);
}

.navbar nav {
    display: flex;
    gap: 8px;
    margin-left: auto;
}

.navbar nav a {
    font-size: 13.5px;
    font-weight: 500;
    color: var(--text-muted);
    padding: 8px 14px;
    border-radius: 999px;
    transition: .2s;
}

.navbar nav a:hover {
    color: var(--text);
    background: var(--bg-elevated-2);
}

.nav-contact {
    padding: 10px 22px;
    font-size: 13.5px;
}

.menu-btn {
    display: none;
    flex-direction: column;
    gap: 5px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 6px;
}

.menu-btn span {
    width: 20px;
    height: 2px;
    background: var(--text);
}


/* HERO */

.hero {
    position: relative;
    min-height: 100vh;

    padding: 150px 5vw 80px;

    display: grid;
    grid-template-columns: 1fr 0.85fr;
    align-items: center;
    gap: 40px;

    overflow: hidden;
}

.hero-grid-bg {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(var(--border-soft) 1px, transparent 1px),
        linear-gradient(90deg, var(--border-soft) 1px, transparent 1px);
    background-size: 44px 44px;
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 30% 35%, black, transparent);
    mask-image: radial-gradient(ellipse 70% 60% at 30% 35%, black, transparent);
    opacity: .6;
    z-index: 0;
}

.hero-text {
    position: relative;
    z-index: 1;
}

.hero h1 {
    font-size: clamp(48px, 6.2vw, 84px);
    line-height: 1.02;
    letter-spacing: -2.5px;
    font-weight: 700;
}

.hero-role {
    margin-top: 18px;
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 500;
    color: var(--text-muted);
}

.rule {
    width: 70px;
    height: 3px;
    margin: 22px 0 26px;
    background: linear-gradient(90deg, var(--blue), var(--violet));
    border-radius: 3px;
}

.hero-description {
    max-width: 560px;
    font-size: 16.5px;
    color: var(--text-muted);
}

.hero-description strong {
    color: var(--blue-light);
    font-weight: 600;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 38px;
}

.hero-visual {
    position: relative;
    z-index: 1;
}

.hero-svg {
    width: 100%;
    height: auto;
    display: block;
}


/* MARQUEE */

.marquee-container {
    overflow: hidden;
    padding: 22px 0;
    border-top: 1px solid var(--border-soft);
    border-bottom: 1px solid var(--border-soft);
    background: var(--bg-elevated);
}

.marquee {
    display: flex;
    width: max-content;
    gap: 14px;
    animation: marquee 28s linear infinite;
}

.pill {
    padding: 9px 18px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-muted);
    white-space: nowrap;
}

@keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}


/* SECTIONS */

.section {
    width: min(1140px, 90vw);
    margin: auto;
    padding: 110px 0;
}

.section-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--blue-light);
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-soft);
}

.section-heading {
    font-size: clamp(36px, 4.6vw, 56px);
    line-height: 1.08;
    letter-spacing: -1.5px;
    font-weight: 600;
}

.section-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 30px;
    padding: 55px 0 50px;
}

.section-title p {
    max-width: 280px;
    color: var(--text-muted);
    font-size: 14.5px;
}


/* ABOUT */

.about-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 8vw;
    padding-top: 55px;
}

.about-text {
    color: var(--text-muted);
    font-size: 16px;
}

.about-text p + p {
    margin-top: 18px;
}

.about-stats {
    display: flex;
    gap: 50px;
    margin-top: 34px;
    padding-top: 26px;
    border-top: 1px solid var(--border-soft);
}

.stat-label {
    display: block;
    font-size: 11.5px;
    color: var(--text-dim);
    margin-bottom: 6px;
}

.stat-value {
    display: block;
    font-size: 14.5px;
    color: var(--text);
    font-weight: 500;
}

.competencies-heading {
    margin-top: 40px;
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
}

.tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
}

.tag {
    padding: 8px 14px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 12.5px;
    color: var(--text-muted);
}

.tag-row.small .tag {
    font-size: 11.5px;
    padding: 6px 12px;
}

.about-footnote {
    margin-top: 26px;
    font-size: 14.5px;
    color: var(--text-dim);
}


/* TIMELINE */

.subsection-heading {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .5px;
    color: var(--text-dim);
    text-transform: uppercase;
    margin: 50px 0 6px;
}

.timeline:first-of-type {
    margin-bottom: 10px;
}

.timeline-item {
    border-top: 1px solid var(--border-soft);
}

.timeline-item:last-child {
    border-bottom: 1px solid var(--border-soft);
}

.timeline-head {
    width: 100%;
    display: grid;
    grid-template-columns: 0.32fr 1fr 30px;
    align-items: center;
    gap: 6vw;

    padding: 34px 0;

    background: none;
    border: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
}

.timeline-date {
    color: var(--text-dim);
    font-size: 12.5px;
    font-weight: 600;
}

.timeline-tag {
    display: block;
    color: var(--blue-light);
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: .4px;
    margin-bottom: 8px;
}

.timeline-main h3 {
    font-size: 24px;
    font-weight: 500;
}

.chevron {
    font-size: 20px;
    font-weight: 400;
    color: var(--text-dim);
    transition: transform .25s ease;
    justify-self: end;
}

.timeline-item.open .chevron {
    transform: rotate(45deg);
    color: var(--blue-light);
}

.timeline-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows .3s ease;
}

.timeline-item.open .timeline-body {
    grid-template-rows: 1fr;
}

.timeline-body > * {
    overflow: hidden;
}

.timeline-body ul {
    padding: 0 0 22px 40vw;
    margin-left: -34vw;
    color: var(--text-muted);
    font-size: 14.5px;
}

.timeline-body li {
    padding-left: 18px;
    position: relative;
}

.timeline-body li + li {
    margin-top: 9px;
}

.timeline-body li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--blue);
}

.timeline-body .tag-row {
    padding-left: 6vw;
    padding-bottom: 30px;
}


/* RESEARCH */

.research-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.research-card {
    padding: 32px;
    background: var(--bg-elevated);
    border: 1px solid var(--border-soft);
    border-radius: var(--radius);
    transition: border-color .25s ease;
}

.research-card:hover {
    border-color: var(--border);
}

.research-status {
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: .4px;
    color: var(--blue-light);
    margin-bottom: 14px;
}

.research-card h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.25;
    max-width: 780px;
}

.research-card p {
    margin-top: 14px;
    color: var(--text-muted);
    font-size: 14.5px;
    max-width: 720px;
}


/* CERTIFICATIONS */

.cert-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.cert-card {
    padding: 28px;
    background: var(--bg-elevated);
    border: 1px solid var(--border-soft);
    border-radius: var(--radius);
}

.cert-eyebrow {
    font-size: 11px;
    color: var(--text-dim);
    letter-spacing: .3px;
}

.cert-card h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 10px 0 8px;
}

.cert-card p {
    color: var(--text-muted);
    font-size: 13.5px;
}

.education-card {
    grid-column: span 1;
    background: var(--bg-elevated-2);
    border-color: var(--border);
}

.education-card .stats {
    margin-top: 18px;
}

.education-card strong {
    font-family: "Space Grotesk", sans-serif;
    font-size: 26px;
}

.education-card strong small {
    font-size: 14px;
    color: var(--text-dim);
    font-weight: 400;
}

.education-card .stats small {
    display: block;
    margin-top: 4px;
    font-size: 10.5px;
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: .5px;
}


/* ACTIVITIES */

.activity-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.activity-card {
    padding: 30px;
    background: var(--bg-elevated);
    border: 1px solid var(--border-soft);
    border-radius: var(--radius);
}

.activity-card h3 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 12px;
}

.activity-card p {
    color: var(--text-muted);
    font-size: 14px;
}


/* CONTACT */

.contact-heading {
    margin: 30px 0 18px;
}

.contact-sub {
    color: var(--text-muted);
    font-size: 15px;
    max-width: 520px;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 8vw;
    margin-top: 55px;
}

.form-row {
    margin-bottom: 20px;
}

.form-row label {
    display: block;
    font-size: 12.5px;
    color: var(--text-dim);
    margin-bottom: 8px;
}

.form-row input,
.form-row textarea {
    width: 100%;
    padding: 13px 16px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text);
    font-family: inherit;
    font-size: 14.5px;
    resize: vertical;
}

.form-row input:focus,
.form-row textarea:focus {
    outline: none;
    border-color: var(--blue);
}

.contact-side {
    padding-top: 6px;
}

.prefer-email {
    color: var(--text-muted);
    font-size: 14.5px;
}

.prefer-email a {
    display: block;
    margin-top: 10px;
    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
    color: var(--blue-light);
    border-bottom: 1px solid var(--border);
    padding-bottom: 4px;
    width: fit-content;
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 34px;
    font-size: 13.5px;
    font-weight: 600;
}

.social-links a {
    color: var(--text-muted);
}

.social-links a:hover {
    color: var(--blue-light);
}


/* FOOTER */

footer {
    background: var(--bg-elevated);
    color: var(--text-dim);
    border-top: 1px solid var(--border-soft);
    padding: 25px 5vw;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}


/* ANIMATION */

.reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .7s ease, transform .7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; transition: none; }
    .marquee { animation: none; }
}


/* MOBILE */

@media (max-width: 900px) {

    .navbar nav {
        display: none;
        position: absolute;
        top: 76px;
        left: 0;
        width: 100%;
        padding: 20px 5vw;
        background: var(--bg);
        flex-direction: column;
        gap: 4px;
        border-bottom: 1px solid var(--border-soft);
    }

    .navbar nav.open {
        display: flex;
    }

    .nav-contact {
        display: none;
    }

    .menu-btn {
        display: flex;
    }

    .hero {
        grid-template-columns: 1fr;
        padding-top: 140px;
        text-align: left;
    }

    .hero-visual {
        order: -1;
        max-width: 260px;
        margin: 0 auto 20px;
    }

    .about-grid,
    .cert-grid,
    .activity-grid,
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .section-title {
        display: block;
    }

    .section-title p {
        max-width: none;
        margin-top: 18px;
    }

    .timeline-head {
        grid-template-columns: 1fr 24px;
        gap: 10px;
    }

    .timeline-date {
        grid-column: 1 / -1;
        order: -1;
        margin-bottom: 6px;
    }

    .timeline-body ul,
    .timeline-body .tag-row {
        padding-left: 0;
        margin-left: 0;
    }

    footer {
        flex-direction: column;
        gap: 8px;
    }
}
