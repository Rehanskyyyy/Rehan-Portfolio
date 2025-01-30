const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;
const image = document.querySelector('.theme-toggle'); // Select the image
const social = document.querySelectorAll(".social")
const social2 = document.querySelectorAll(".social2")

// Check localStorage for saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    image.src = "image/sun.svg"; // Set to moon icon in dark mode
    image.classList.add("invert")
    social.forEach((item) => {
        item.classList.add("invert");
    });
} else {
    toggleButton.src = "image/moon.svg";
    social2.forEach((item) => {
        item.classList.add("invert");
    });
}

// Toggle Theme on Button Click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        image.src = "image/sun.svg"; // Show moon in dark mode
        image.classList.add("invert")
        social.forEach((item) => {
            item.classList.add("invert");
        });
        social2.forEach((item) => {
            item.classList.remove("invert");
        });
        localStorage.setItem('theme', 'dark');
    } else {
        image.src = "image/moon.svg"; // Show sun in light mode
        image.classList.remove("invert")
        social.forEach((item) => {
            item.classList.remove("invert");
        });
        social2.forEach((item) => {
            item.classList.add("invert");
        });
        localStorage.setItem('theme', 'light');
    }
});

const hamburgericon = document.querySelector(".hamburgericon")
const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")

hamburgericon.addEventListener("click", () => {
    hamburger.style.transform = "translateX(0%)"
})

close.addEventListener("click", () => {
    hamburger.style.transform = "translateX(-100%)" 
})