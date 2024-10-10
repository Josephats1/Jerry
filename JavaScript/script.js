// script.js

// Select the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode is enabled
const isDarkMode = localStorage.getItem('dark-mode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save dark mode preference in local storage
    const isDarkModeNow = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkModeNow);
});

