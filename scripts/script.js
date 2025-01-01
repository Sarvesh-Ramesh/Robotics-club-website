// script.js

// Get the buttons and the image container
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const imageContainers = document.querySelectorAll('.image_container');

nextButton.addEventListener('click', function () {
    imageContainers.forEach(container => {
        container.classList.add('translate');
        container.style.transition = 'transform 0.3s ease';// Apply the translate effect to each container
    });
});

// Add event listener for the "Previous" button
prevButton.addEventListener('click', function () {
    imageContainers.forEach(container => {
        container.classList.remove('translate');
        container.style.transition = 'transform 0.3s ease';// Remove the translate effect from each container
    });
});