document.addEventListener('DOMContentLoaded', function () {
  const categories = document.querySelectorAll('.category');
  const infoContainer = document.getElementById('info-container');

  categories.forEach((category) => {
    category.addEventListener('click', () => showInfo(category.id));
  });

  function showInfo(categoryId) {
    // Clear existing content with fade-out effect
    infoContainer.classList.add('fade-out');
    setTimeout(() => {
      infoContainer.innerHTML = getWorkoutInfo(categoryId);
      infoContainer.classList.remove('fade-out');
      infoContainer.classList.add('fade-in');
    }, 500);
  }

  function getWorkoutInfo(categoryId) {
    // Return the workout information based on the selected category
    // You can customize this function to include the specific workout details
    // for each category.
    switch (categoryId) {
      case 'weight-loss':
        return `<p>Weight Loss Workout Info...</p>`;
      case 'strength':
        return `<p>Strength Workout Info...</p>`;
      case 'hypertrophy':
        return `<p>Hypertrophy Workout Info...</p>`;
      default:
        return '';
    }
  }
});
