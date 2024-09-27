const hour = 19;
const name = 'Hoang';
if (hour >= 6 && hour <= 12) {
  console.log(`Good morning! ${name}`);
} else if (hour >= 13 && hour <= 17) {
  console.log(`Good afternoon! ${name}`);
} else {
  console.log(`Good night! ${name}`);
}

const age = 66;
const isHoliday = false;
if ((age <= 6 || age >= 65) && !isHoliday) {
  console.log('Discount');
} else {
  console.log('No discount');
}