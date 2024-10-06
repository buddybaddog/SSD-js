// const multiply = (num1, num2) => {
//   return num1 * num2;
// }

// console.log(multiply(2, 3));
// console.log(multiply(7, 10));

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
console.log(multiply(7, 10));

const countPositive = (nums) => {
  let count = 0;
  nums.forEach(element => {
    
    if (element > 0) {
      count++;
    }
    
  });
  return count;
};

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

const addNum = (array, num) => {
  return array.map((value) => value + num);
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

const removeEgg = (foods) => {
  let eggRemoved = 0;
  return foods.filter(food => {
    if (food === 'egg' && eggRemoved < 2) {
      eggRemoved++;
      return false;
    }
    return true;
  });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

