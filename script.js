function toggleMenu() {
  var menu = document.getElementById("menu");
  var burger = document.getElementById("burger");

  if (menu.style.right === "-100%" || menu.style.right === "") {
    menu.style.right = "0";
    burger.innerHTML = "&#10006;";
    burger.classList.add("active"); // Add the "active" class
  } else {
    menu.style.right = "-100%";
    burger.innerHTML = "&#9776;";
    burger.classList.remove("active"); // Remove the "active" class
  }
}


let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  for (let slide of slides) {
    slide.style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function changeSlide(step) {
  showSlide(slideIndex += step);
}

showSlide(slideIndex); // Initial call to show the first slide

// to change slides every few seconds
setInterval(() => {
  changeSlide(1);
}, 2000);

// Function to open the login form modal
function openLoginForm() {
  document.getElementById('login-form').style.display = 'block';
}

// Function to open the sign up form modal
function openSignUpForm() {
  document.getElementById('signup-form').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'none';
}

// Function to display the welcome message and hide auth buttons
function displayWelcomeMessage(username) {
  document.getElementById('auth-buttons').style.display = 'none';
  document.getElementById('welcome-message').style.display = 'block';
  document.getElementById('user-name').textContent = username;
}

// Dummy function to simulate a successful login
// In a real application, you would replace this with a function that validates the user's credentials
function login() {
  // Simulate a login with a static username
  displayWelcomeMessage('User');
  closeModal();
}

// Add event listeners for login and sign up functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add your event listeners here
});








$(document).ready(function () {
  // Set the initial visibility of all exercise lines to hidden
  $('.exercise').hide();

  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Function to handle scroll events
  function handleScroll() {
    // Loop through each exercise element
    $('.exercise').each(function () {
      // Check if the exercise element is in the viewport
      if (isElementInViewport($(this))) {
        // If it's in the viewport, show the element (you can add animation effects here)
        $(this).show();
      }
    });
  }

  // Attach the handleScroll function to the scroll event
  $(window).on('scroll', handleScroll);

  // Trigger the handleScroll function on page load
  handleScroll();
});
