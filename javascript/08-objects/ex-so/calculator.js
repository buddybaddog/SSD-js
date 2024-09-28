// let calculation = '';

let calculation = localStorage.getItem('calculation') || '';
function updateCalculation (value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}