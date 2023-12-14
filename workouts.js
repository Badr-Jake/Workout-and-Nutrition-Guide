document.addEventListener('DOMContentLoaded', function () {
  const categories = document.querySelectorAll('.category');
  const explanations = document.querySelectorAll('.explanation');

  categories.forEach((category, index) => {
    category.addEventListener('click', () => showExplanation(index));
  });

  function showExplanation(index) {
    // Hide all explanations
    explanations.forEach((explanation) => {
      explanation.classList.remove('active');
    });

    // Show the selected explanation
    explanations[index].classList.add('active');

    // Get the current day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getDay()];

    // Find and highlight lines corresponding to the current day
    const lines = document.querySelectorAll(`.explanation-list li`);
    lines.forEach((line) => {
      line.style.border = '2px solid transparent'; // Set initial border style

      // Check if the line contains the current day
      if (line.textContent.includes(`${currentDay}:`)) {
        // Apply dynamic border color
        line.style.borderImage = 'linear-gradient(90deg, violet, indigo, blue, green, yellow, orange, red)';
        line.style.borderImageSlice = 1;
        line.style.animation = 'rainbow-border 6s linear infinite';
      }
    });
  }
});
