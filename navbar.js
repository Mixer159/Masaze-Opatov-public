// Select the hamburger menu and the navbar
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

// Add an event listener to toggle the mobile menu
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
  // Select all nav links
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      var targetId = this.getAttribute("href").substring(1); // Get the target id (removing the '#')
      var targetElement = document.getElementById(targetId); // Get the target element

      if (targetElement) {
        var targetPosition = targetElement.offsetTop - 60; // Calculate position of the element, subtracting 60px

        // Smoothly scroll to the target position
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle the hamburger menu
  hamburger.addEventListener("click", function () {
    navbar.classList.toggle(".active");
  });

  // Handle nav link clicks for smooth scrolling and closing the menu
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link action

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 60;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // If in mobile view, close the menu upon selecting an item
        if (window.innerWidth <= 768 && navbar.classList.contains("active")) {
          navbar.classList.remove("active");
        }
      }
    });
  });
});
