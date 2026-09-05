
/* =========================
   MOBILE MENU
========================= */

const menuIcon = document.getElementById("menuIcon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* CLOSE MOBILE MENU */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Python Learner",
    "Software Developer",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}

typeEffect();


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SKILL ANIMATION
========================= */

const skillSection = document.querySelector("#skills");

let skillAnimated = false;

function animateSkills() {

    if (
        window.scrollY + window.innerHeight >
        skillSection.offsetTop + 100
        && !skillAnimated
    ) {

        skillAnimated = true;

        document.querySelectorAll(".progress-bar").forEach(bar => {

            const width = bar.getAttribute("data-width");

            bar.style.width = width;

        });

    }

}

window.addEventListener("scroll", animateSkills);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    if (!validateEmail(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    contactForm.reset();

});


function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


/* =========================
   SCROLL TOP
========================= */

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


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();