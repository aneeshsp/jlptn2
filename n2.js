document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const navList = document.querySelector(".nav-container ul");

    hamburgerIcon.addEventListener("click", function() {
        navList.classList.toggle("show");
    });
});

// Define a function to toggle the display of the dropdown content
function toggleDropdown(menu) {
    // Get the dropdown content element by its id
    var dropdown = document.getElementById(menu);
    // Check if the dropdown content is hidden or shown
    if (dropdown.style.display === "none") {
        // If hidden, show it
        dropdown.style.display = "block";
    } else {
        // If shown, hide it
        dropdown.style.display = "none";
    }
}