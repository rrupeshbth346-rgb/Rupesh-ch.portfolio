
/* ===============================
   MOBILE MENU
================================ */

const menuIcon = document.getElementById("menuIcon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});


/* Close menu */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");

    });

});


/* ===============================
   TYPING EFFECT
================================ */

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Python Developer",
    "Software Developer",
    "Programmer",
    "Tech Enthusiast"
];

let word = 0;
let character = 0;
let deleting = false;

function typeEffect() {

    const current = words[word];

    if (!deleting) {

        typing.textContent =
            current.substring(0, character + 1);

        character++;

        if (character === current.length) {

            deleting = true;

            setTimeout(typeEffect, 1300);

            return;
        }

    } else {

        typing.textContent =
            current.substring(0, character - 1);

        character--;

        if (character === 0) {

            deleting = false;

            word++;

            if (word >= words.length) {
                word = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );

}

typeEffect();


/* ===============================
   ACTIVE NAVIGATION
================================ */

const sections =
    document.querySelectorAll("section");

const links =
    document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 150;

        if (window.scrollY >= top) {

            current =
                section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ===============================
   SKILL ANIMATION
================================ */

const skillSection =
    document.getElementById("skills");

let skillsStarted = false;

function startSkills() {

    const position =
        skillSection.getBoundingClientRect().top;

    if (
        position <
        window.innerHeight - 100
        && !skillsStarted
    ) {

        skillsStarted = true;

        document
            .querySelectorAll(".progress-bar")
            .forEach(bar => {

                bar.style.width =
                    bar.dataset.width;

            });

    }

}

window.addEventListener("scroll", startSkills);


/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-container, " +
        ".timeline-item, .skill-card, " +
        ".project-card, .service-card, " +
        ".contact-container"
    );

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition =
        "opacity .8s ease, transform .8s ease";

});


function revealOnScroll() {

    revealElements.forEach(element => {

        const position =
            element.getBoundingClientRect().top;

        if (
            position <
            window.innerHeight - 80
        ) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ===============================
   SCROLL TOP
================================ */

const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});

scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ===============================
   CONTACT FORM
================================ */

const form =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        !name ||
        !email ||
        !subject ||
        !message
    ) {

        formMessage.textContent =
            "⚠ Please fill all fields.";

        return;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "⚠ Please enter a valid email.";

        return;
    }


    formMessage.textContent =
        "✓ Message submitted successfully!";

    form.reset();

});


/* ===============================
   YEAR
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();

/* =================================
   RGB / NEON INTERACTIVE EFFECT
================================= */

const touchColors = [
    "#00f7ff",
    "#0066ff",
    "#9d00ff",
    "#ff00aa",
    "#ff003c",
    "#00ff88",
    "#ff7a00"
];

let colorIndex = 0;

const interactiveElements = document.querySelectorAll(
    ".btn, .project-card, .skill-card, .service-card, " +
    ".social-icons a, .navbar a, .project-link, " +
    ".contact-item, .scroll-top"
);

interactiveElements.forEach(element => {

    element.classList.add("rgb-glow");

    element.addEventListener("pointerdown", function () {

        const color = touchColors[colorIndex];

        colorIndex++;

        if (colorIndex >= touchColors.length) {
            colorIndex = 0;
        }

        this.style.setProperty("--touch-color", color);

        this.classList.add("touch-active");

        setTimeout(() => {
            this.classList.remove("touch-active");
        }, 700);

    });

});