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
