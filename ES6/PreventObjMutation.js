// let obj = {
//   name: "FreeCodeCamp",
//   review: "Awesome",
// };

// obj["name"] = "YuNa";
// console.log(obj); // { name: 'YuNa', review: 'Awesome' }

// Object.freeze(obj);
// obj["name"] = "YuNa2"; // doesn't work
// console.log(obj); // { name: 'YuNa', review: 'Awesome' }

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
