/*
const nums= [10, 20, 30];

nums[2] = 99;
console.log(nums);

nums[nums.length - 1] = 9;
console.log(nums);

function getLastValue(array) {
  lastIndex = array[array.length - 1];
  return lastIndex;
}

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'good']));

function arraySwap(array) {
  const firstValue = array[0];
  const lastValue = array[array.length - 1];

  array[0] = lastValue;
  array[array.length - 1] = firstValue;
  return array;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));

for(let i = 0;i <= 10; i += 2) {
  console.log(i);
}

for(let i = 5;i >= 0; i--) {
  console.log(i);
}

let i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}

let x = 5;

while (x >= 0) {
  console.log(x);
  x--;
}

const myArray = [1, 2, 3];
const result = [];

for(let i = 0;i < myArray.length; i++) {
  result.push(myArray[i] + 1);
}

console.log(result);


function addOne(array) {
  const result = [];
  for(let i = 0;i < array.length; i++) {
    result.push(array[i] + 1);
  }
  return result;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));


function addArrays(array, num) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);

  }
  return result;
}

console.log(addArrays([1, 2, 3], 2));
console.log(addArrays([1, 2, 3], 3));



function addArrays(array1, array2) {
  const result = [];
  for(let i = 0;i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));


function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] > 0) {
      count++;
    }
    // return count; 
  }

  return count; 
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));


function minMax(nums) {
  let min = null;
  let max = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min || min === null) {
      min = nums[i];
    } 
    if (nums[i] > max || max === null) {
      max = nums[i];
    }
  }
  return {'min': min, 'max': max};
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax([3]));

function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    
    // result[word] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    // If word = 'apple', result[word] will do result['apple']
    // If word = 'grape', result[word] will do result['grape']
    const word = words[i];
    if(!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }
  
  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));

let words = ['hello', 'world', 'search', 'good'];

let index = -1;
for (let i = 0; i < words.length; i++) {
  if(words[i] === 'search') {
    index = i;
  }
}

console.log(index);

words = ['not', 'found'];
index = -1;

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'search') {
    index = i;
  }
}

console.log(index);


let words = ['hello', 'world','search', 'good', 'search'];

index = -1;

for(let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}


console.log(index);


function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }

  return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));

console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));


function removeEgg(foods) {
  const result = [];
  for (let i = 0; i < foods.length; i++) {
    if(foods[i] === 'egg') {
      continue;
    }
    result.push(foods[i]);
  }

  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


function removeEggs(foods) {
  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;

    }
    
    result.push(foods[i]);
  }

  return result;
}

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));
*/

/*
function removeEgg(foods) {
  const result = [];
  const reverseFoods = foods.reverse();
  let eggsRemoved = 0;

  for (let i = 0; i < foods.length; i++) {
    if (reverseFoods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }
    
    result.push(reverseFoods[i]);
  }

  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'hamm']));


function removeEgg(foods) {
  let eggsRemoved = 0;
  const result = [];
  const foodsCopy = foods.slice() 
  const reverseFoods = foodsCopy.reverse();

  for (let i = 0; i < foods.length; i++) {
    if (eggsRemoved < 2 && reverseFoods[i] === 'egg') {
      eggsRemoved++;
      continue;
    }

    result.push(reverseFoods[i]);
  }

  return result.reverse();
}

// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);
*/

/*
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
  console.log(i);
  }
}
*/

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i]; // lấy phần tử thứ i trong mảng
    if (findIndex(result, word) === -1) { // kiểm tra có trong mảng hay chưa nếu - 1 ;à chưa có
      result.push(word); // chưa có thì thêm vào result dùng push
    }
  }
  return result;
}

// console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));

// console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

console.log(unique(['green', 'red', 'blue', 'red']));

console.log(unique(['red', 'green', 'green', 'red']));