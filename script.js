// External JavaScript

// Function to validate email using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (validateEmail(email)) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email.');
        }
    });
}

// Custom order form submission
const customOrderForm = document.getElementById('custom-order-form');
if (customOrderForm) {
    customOrderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const item = document.getElementById('item').value;
        const quantity = document.getElementById('quantity').value;
        const instructions = document.getElementById('special-instructions').value;
        
        alert(`Order received!\nItem: ${item}\nQuantity: ${quantity}\nSpecial Instructions: ${instructions}`);
        customOrderForm.reset();
    });
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        if (validateEmail(email)) {
            alert(`Message received!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
            contactForm.reset();
        } else {
            alert('Please enter a valid email.');
        }
    });
}

// Function to fetch a random baking quote (simulating an API call)
function fetchBakingQuote() {
    const quotes = [
        "Baking is love made visible.",
        "Life is what you bake it.",
        "Happiness is the smell of freshly baked bread.",
        "A balanced diet is a cookie in each hand.",
        "Baking is a science and an art."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Display a random baking quote on the home page
const quoteElement = document.createElement('p');
quoteElement.id = 'baking-quote';
quoteElement.style.textAlign = 'center';
quoteElement.style.fontStyle = 'italic';
quoteElement.style.margin = '2rem 0';

const mainElement = document.querySelector('main');
if (mainElement) {
    mainElement.appendChild(quoteElement);
    quoteElement.textContent = fetchBakingQuote();
}

// Change quote every 10 seconds
setInterval(() => {
    if (quoteElement) {
        quoteElement.textContent = fetchBakingQuote();
    }
}, 10000);
