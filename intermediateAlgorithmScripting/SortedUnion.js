function uniteUnique(arr) {
  let result = [];
  let newArr = Array.from(arguments);
  newArr.forEach((arr) => {
    arr.forEach((ele) => {
      result.push(ele);
    });
  });
  return result.filter((num, idx) => {
    return result.indexOf(num) === idx;
  });
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
