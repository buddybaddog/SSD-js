if (document.querySelector('.js-button').classList.contains('js-button')) {
  console.log('true');
} else {
  console.log('false');
}

if (document.querySelector('.add-to-cart-button').classList.contains('add-to-cart-button')) {
  console.log('true');
} else {
  console.log('false');
}

function toggleButton(selector) {
  const buttonElement = document.querySelector(selector) 
    if(!buttonElement.classList.contains('is-toggled')) {
      // function turn off previous button object many button ON at a time.
      turnOffPreviousButton();
      buttonElement.classList.add('is-toggled');
    } else {
      buttonElement.classList.remove('is-toggled');
    }
  }

  // add function
  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    // if exist previous button
    if(previousButton) {
      // remove its css styles
      previousButton.classList.remove('is-toggled');
    }
  }
