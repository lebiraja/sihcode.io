// JavaScript code for interactive features

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Sticky Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const closeLightbox = document.querySelector('.close-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(src, alt) {
    lightbox.style.display = 'block';
    lightboxImg.src = src;
    lightboxCaption.textContent = alt;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

// Contact Form Submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Add your form submission logic here
    console.log(name, email, message);
}

// Add event listeners for lightbox
document.querySelectorAll('.gallery-grid img').forEach((img) => {
    img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
    });
});

// Add event listener for contact form submission
document.getElementById('contact-form').addEventListener('submit', submitForm);
