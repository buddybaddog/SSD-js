const add = function() {
  console.log(2 + 3);
}

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
})

runTwice(add);

document.querySelector('.js-start-button')
  .addEventListener('click', () => {
  const buttonElement = document.querySelector('.js-start-button');
  buttonElement.innerHTML = 'Loading...';

  setTimeout(() => {
      buttonElement.innerHTML = 'Finished';
    
  }, 1000);
});

let timeoutId;

document.querySelector('.js-add-to-cart-button')
  .addEventListener('click', () => {
  const messageElement = document.querySelector('.js-message');
  messageElement.innerHTML = 'Added';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    messageElement.innerHTML = '';
  }, 2000);
});

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    messages++;
    displayNotification();
  });

document.querySelector('.js-remove-button')
  .addEventListener('click', () => {
    messages--;
    displayNotification();
  })

let messages = 2;
let intervalId;

let isDisplayingNotification;

displayNotification();

function displayNotification() {
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(() => {
    // document.title = 'App';
    if(document.title === 'App' && messages > 0) {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);
}

function stopNotification() {
  isDisplayingNotification = false;
  clearInterval(intervalId)
  document.title = 'App';
}