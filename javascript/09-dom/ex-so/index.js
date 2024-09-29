// const buttonElement = document.querySelector('button');
// console.log(buttonElement);

// document.querySelector('.js-9b-button')
//   .innerHTML = '9b done!';

function handleCostKeydown(event) {
  if(event.key === 'Enter') {
    displayName();
  }
}

function displayMessage() {
  const inputElement = document.querySelector('.js-name-input');
  document.querySelector('.js-message')
    .innerHTML = `Your name is: ${inputElement.value}`;
}