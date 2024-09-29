let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCal();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  // instead of console.log
  displayCal();

  localStorage.setItem('calculation', calculation);
}

function displayCal() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}