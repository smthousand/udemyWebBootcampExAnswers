// DEFINE YOUR FUNCTION BELOW:
let week =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function returnDay(day) {
  if (0 >= day || 7 < day) {
    return null;
  } else {
    return day = week[day - 1];
  }
}

console.log(returnDay(0));
console.log(returnDay(1));
console.log(returnDay(2));
console.log(returnDay(3));
console.log(returnDay(4));
console.log(returnDay(5));
console.log(returnDay(6));
console.log(returnDay(7));