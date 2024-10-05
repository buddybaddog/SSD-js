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

function start() {
  const buttonElement = document.querySelector('.js-start-button');
  buttonElement.innerHTML = 'Loading...';

  setTimeout(function() {
      buttonElement.innerHTML = 'Finished';
    
  }, 1000);
}

let timeoutId;

function addToCart() {
  const messageElement = document.querySelector('.js-message');
  messageElement.innerHTML = 'Added';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function() {
    messageElement.innerHTML = '';
  }, 2000);
}
let messages = 2;
let intervalId;

let isDisplayingNotification;

displayNotification();

function displayNotification() {
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(function() {
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