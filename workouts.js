document.addEventListener('DOMContentLoaded', function () {
  const categories = document.querySelectorAll('.category');
  const explanations = document.querySelectorAll('.explanation');

  categories.forEach((category, index) => {
    category.addEventListener('click', () => showExplanation(index));
  });

  function showExplanation(index) {
    // Hide all explanations
    explanations.forEach((explanation) => {
      explanation.style.display = 'none';
    });

    // Show the selected explanation
    explanations[index].style.display = 'block';
  }
});
