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



// Javascript for the bodytype page.
document.getElementById('bodyTypeForm').addEventListener('submit', function(event) {
   console.log('Form submitted');
    event.preventDefault();

    var age = parseInt(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var bmi = calculateBMI(weight, height);
    var bodyType = determineBodyType(bmi, age);
    var workoutSuggestion = suggestWorkout(bodyType);

    displayResults(bmi, bodyType, workoutSuggestion);
});

function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

function determineBodyType(bmi, age) {
    // This is a simplified example. You might want to use more complex logic
    if (bmi < 18.5) {
        return 'Ectomorph';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Mesomorph';
    } else {
        return 'Endomorph';
    }
}

function suggestWorkout(bodyType) {
    switch(bodyType) {
        case 'Ectomorph': return 'Strength and Hypertrophy';
        case 'Mesomorph': return 'Balanced Mix of All Workouts';
        case 'Endomorph': return 'Weight Loss and Strength';
        default: return 'Custom';
    }
}

function displayResults(bmi, bodyType, workoutSuggestion) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your BMI is: ${bmi}</p>
                           <p>Your body type is: ${bodyType}</p>
                           <p>Suggested Workout: ${workoutSuggestion}</p>`;
    resultDiv.style.display = 'block';
}
