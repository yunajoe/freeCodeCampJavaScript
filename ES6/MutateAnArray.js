// it is important to understand
// that objects (including arrays and functions)
// assigned to a variable using const are still mutable.
// Using the const declaration only prevents reassignment of the variable identifier.
// const s = [5, 6, 7];
// s[0] = 100;
// console.log(s); // [ 100, 6, 7 ]
// s = [1, 2, 3]; // error!

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();
