function addTogether() {
  let arr = [...arguments];
  if (arr.length === 2) {
    const [a, b] = arr;
    if (typeof a !== "number" || typeof b !== "number") {
      return undefined;
    } else {
      return a + b;
    }
  } else if (arr.length === 1) {
    const [a] = arr;
    if (typeof a !== "number") {
      return undefined;
    }
    return function () {
      const [num] = [...arguments];
      if (typeof num === "number") {
        return num + a;
      }
      return undefined;
    };
  }
}

console.log(addTogether(2, 3));
console.log(addTogether("2", 3));
console.log(addTogether(undefined, 3));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));

console.log(addTogether(2));
console.log(addTogether(2)(3));
console.log(addTogether(2)([3]));
