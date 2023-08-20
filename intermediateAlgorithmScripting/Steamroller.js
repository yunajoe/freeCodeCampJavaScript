function steamrollArray(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      let result = steamrollArray(val);
      acc = acc.concat(...result);
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

// sol2)
function steamrollArray(arr) {
  let arrCopy = [...arr];
  let result = [];
  while (arrCopy.length) {
    let val = arrCopy.pop();
    if (!Array.isArray(val)) {
      result.push(val);
    } else {
      arrCopy.push(...val);
    }
  }
  return result.reverse();
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
