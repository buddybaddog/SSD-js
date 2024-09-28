// function greet(name) {
//   if (!name) {
//     console.log('Hi there!');
//   } else {
//     console.log(`Hello ${name}!`);
//   }
// }

// greet('Simon');
// greet('Bao');
// greet('Hoang');
// greet('Peperoni');

// greet();

function convertToFahrenheit(celsius) {
  fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit) {
  celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

console.log(convertToCelsius(86));

function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    result = convertToFahrenheit(degrees);
    return `${result}F`;
  } else if (unit === 'F') {
    result = convertToCelsius(degrees);
    return `${result}C`;
  }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));

function convertLength(length, from, to) {
  if (from !== 'miles' && from !== 'km' && from !== 'ft') {
    return `Invalid unit: ${from}`;
  } else if (to !== 'miles' && to !== 'km' && to !== 'ft') {
    return `Invalid unit: ${to}`;
  } else if (from === 'miles' && to === 'km') {
    result = length * 1.6;
    return `${result} ${to}`;
  } else if (from === 'miles' && to === 'ft') {
    result = length  * 5280;
    return `${result} ${to}`;
  } else if (from === 'km' && to === 'miles') {
    result = length / 1.6;
    return `${result} ${to}`;
  } else if (from === 'km' && to === 'ft') {
    result = length * 3281;
    return `${result} ${to}`;
  } else if (from === 'ft' && to === 'miles') {
    result = length / 5280;
    return `${result} ${to}`;
  } else if (from === 'ft' && to === 'km') {
    result = length / 3281;
    return `${result} ${to}`;
  } else if (from === to)
    return `${length} ${from}`;
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));
console.log(convertLength(50, 'miles', 'miles'));

console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));

console.log(convertLength(5, 'lbs', 'lbs'));