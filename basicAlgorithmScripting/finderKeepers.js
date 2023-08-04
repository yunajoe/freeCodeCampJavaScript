function findElement(arr, func) {
  let num = 0;
  let newArr = arr.map((num) => func(num));
  return newArr.every((bol, idx) => bol === false)
    ? undefined
    : arr[newArr.findIndex((bol) => bol === true)];
}

// sol2)
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
