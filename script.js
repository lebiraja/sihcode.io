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

// Create a function to handle the AI explanation request
function getAiExplanation(apiKey, text) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    const data = { contents: [{ parts: [{ text }] }] };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const responseContainer = document.getElementById('ai-explanation-response');
        responseContainer.innerHTML = data.contents[0].parts[0].text;
    })
    .catch(error => console.error('Error:', error));
}

// Add an event listener to the button to trigger the AI explanation request
document.getElementById('ai-explanation-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const apiKey = 'AIzaSyAHkd4j8VHssbK2ZN0R1XS0Nr5OqiPNHps';
    const text = 'Explain how AI works'; // You can change this to any text you want
    getAiExplanation(apiKey, text);
});
