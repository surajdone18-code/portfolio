// Automatically display the current year

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Smooth reveal animation when sections enter the screen

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
});
