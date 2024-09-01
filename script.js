// JavaScript for Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('nav-active');
        menuToggle.classList.toggle('toggle');
    });
});

// Smooth Scrolling for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let link of anchorLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Hide Header on Scroll Down, Show on Scroll Up
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

// Contact Form Submission (Using Formspree)
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.createElement('p');
    contactForm.appendChild(formResponse);

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', contactForm.action, true);
        
        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    formResponse.textContent = "Message Sent Successfully!";
                    formResponse.style.color = "green";
                    contactForm.reset();
                    const submitButton = contactForm.querySelector('button[type="submit"]');
                    submitButton.disabled = true;
                    submitButton.textContent = "Sent";
                } else {
                    formResponse.textContent = `An error occurred: ${xhr.status} ${xhr.statusText}`;
                    formResponse.style.color = "red";
                    console.error(`Error: ${xhr.status} ${xhr.statusText}`, xhr.responseText);
                }
            }
        };

        xhr.onerror = function () {
            formResponse.textContent = "A network error occurred.";
            formResponse.style.color = "red";
            console.error("Network Error");
        };

        xhr.send(formData);
    });
});






