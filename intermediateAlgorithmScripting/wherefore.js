function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  return collection.filter((obj) => {
    for (let key of keys) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

// sol2)
function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  let arr = collection.filter((obj) => {
    return keys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  return arr;
}

// sol3)
function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  let result = collection.map((obj) => {
    return keys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  // [ false, false, true ]
  return result
    .map((ele, idx) => {
      if (ele) {
        return collection[idx];
      }
    })
    .filter((ele) => ele);
}
