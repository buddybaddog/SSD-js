
String(25)
console.log('25' - 5);
console.log('25' + 5);

// window.document
// window.console.log('window');
// window.alert('')

function handleCostKeydown(event) {
  // console.log(event.key);
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  // console.log(cost);
  // console.log(typeof cost);

  // reset message
  document.querySelector('.js-total-cost')
    .innerHTML = '';
  document.querySelector('.js-error-message')
    .innerHTML = '';

  if (cost < 0) {
    document.querySelector('.js-error-message').innerHTML = 'Error: cost cannot be less than $0';
  
    return;
  } else if(cost < 40) {
    cost += 10;
    // console.log(cost);
  }
  
  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}


function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remover('is-subscribed');
  }
}

