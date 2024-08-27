document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Select all links with hashes
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Scroll to the target section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const disclaimer = document.getElementById('disclaimer');
    const text = "Disclaimer: We sell only high-quality products to ensure the best experience for our customers.";
    let index = 0;
    let typingInterval;

    function type() {
        if (index < text.length) {
            disclaimer.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50);
        } else {
            setTimeout(resetTyping, 5000); // Restart typing after 5 seconds
        }
    }

    function resetTyping() {
        disclaimer.innerHTML = ''; // Clear the text
        index = 0; // Reset the index
        type(); // Start typing again
    }

    type(); // Start typing when the document is loaded
});
        // Music Toggle Script
        const musicToggle = document.getElementById('music-toggle');
        const backgroundMusic = document.getElementById('background-music');

        let isPlaying = false;

        musicToggle.addEventListener('click', function() {
            if (isPlaying) {
                backgroundMusic.pause();
                musicToggle.textContent = 'Play Music';
            } else {
                backgroundMusic.play();
                musicToggle.textContent = 'Pause Music';
            }
            isPlaying = !isPlaying;
        });

        // Auto play music when the page loads
        window.onload = function() {
            backgroundMusic.play();
            isPlaying = true;
            musicToggle.textContent = 'Pause Music';
        };







