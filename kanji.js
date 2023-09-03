// This script adds some interactivity and style to the webpage

// Get the elements from the HTML document
const container = document.querySelector(".container");
const resources = document.querySelectorAll(".resource");
const video = document.querySelector("iframe");

// Define some colors for the background
const colors = ["#F0F8FF", "#F5F5DC", "#FFE4E1", "#E6E6FA", "#FFFACD"];

// Define a function to change the background color randomly
function changeColor() {
  // Get a random index from the colors array
  let index = Math.floor(Math.random() * colors.length);
  // Set the container's background color to the corresponding color
  container.style.backgroundColor = colors[index];
}

// Define a function to toggle the visibility of the resources
function toggleResources() {
  // Loop through each resource element
  for (let resource of resources) {
    // If the resource is visible, hide it
    if (resource.style.display !== "none") {
      resource.style.display = "none";
    } else {
      // Otherwise, show it
      resource.style.display = "block";
    }
  }
}

// Define a function to play or pause the video
function playPauseVideo() {
  // If the video is paused, play it
  if (video.paused) {
    video.play();
  } else {
    // Otherwise, pause it
    video.pause();
  }
}

// Add an event listener to the container element
container.addEventListener("click", function (event) {
  // Get the target element that was clicked
  let target = event.target;
  // If the target is the container itself, change the color
  if (target === container) {
    changeColor();
  }
  // If the target is a link, toggle the resources
  if (target.tagName === "A") {
    toggleResources();
  }
  // If the target is the video, play or pause it
  if (target === video) {
    playPauseVideo();
  }
  // Add an event listener to the toggle resources button
const toggleResourcesButton = document.getElementById("toggle-resources-button");
toggleResourcesButton.addEventListener("click", toggleResources);

// Add an event listener to the kanji video for play/pause functionality
const kanjiVideo = document.getElementById("kanjiVideo");
kanjiVideo.addEventListener("click", playPauseVideo);

// Add an event listener to the main content for changing the background color
const mainContent = document.getElementById("main-content");
mainContent.addEventListener("click", function (event) {
  let target = event.target;
  if (target === mainContent) {
    changeColor();
  }
});

// Define your changeColor, toggleResources, and playPauseVideo functions here (as in your original kanji.js)
// This script adds some interactivity and style to the webpage

// Get the elements from the HTML document
const container = document.querySelector(".container");
const resources = document.querySelectorAll(".resource");
const video = document.querySelector("iframe");

// Define some colors for the background
const colors = ["#F0F8FF", "#F5F5DC", "#FFE4E1", "#E6E6FA", "#FFFACD"];

// Define a function to change the background color randomly
function changeColor() {
  // Get a random index from the colors array
  let index = Math.floor(Math.random() * colors.length);
  // Set the container's background color to the corresponding color
  container.style.backgroundColor = colors[index];
}

// Define a function to toggle the visibility of the resources
function toggleResources() {
  // Loop through each resource element
  for (let resource of resources) {
    // If the resource is visible, hide it
    if (resource.style.display !== "none") {
      resource.style.display = "none";
    } else {
      // Otherwise, show it
      resource.style.display = "block";
    }
  }
}

// Define a function to play or pause the video
function playPauseVideo() {
  // If the video is paused, play it
  if (video.paused) {
    video.play();
  } else {
    // Otherwise, pause it
    video.pause();
  }
}

// Add an event listener to the container element
container.addEventListener("click", function (event) {
  // Get the target element that was clicked
  let target = event.target;
  // If the target is the container itself, change the color
  if (target === container) {
    changeColor();
  }
  // If the target is a link with the class "kanji-link", toggle the resources
  if (target.classList.contains("kanji-link")) {
    toggleResources();
  }
  // If the target is the video, play or pause it
  if (target === video) {
    playPauseVideo();
  }
});



