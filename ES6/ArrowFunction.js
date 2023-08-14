// basic
const magic = () => new Date();

// with params
const myConcat = (arr1, arr2) => arr1.concat(arr2);

// set default params
const increment = (number, value = 1) => number + value;

// Use the Rest Parameter with Function Parameter
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
