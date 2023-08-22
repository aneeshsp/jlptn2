document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const navList = document.querySelector(".nav-container ul");

    hamburgerIcon.addEventListener("click", function() {
        navList.classList.toggle("show");
    });
});

