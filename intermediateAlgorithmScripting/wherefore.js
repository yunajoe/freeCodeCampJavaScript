function compareTwoObjects(sub, total) {
  let keys = Object.keys(sub);
  let objKeys = Object.keys(total);

  if (keys.length > objKeys.length) {
    return false;
  }
  for (let key in sub) {
    if (!objKeys.includes(key) || total[key] !== sub[key]) {
      return false;
    }
  }
  return total;
}

function whatIsInAName(collection, source) {
  return collection.filter((obj) => {
    return compareTwoObjects(source, obj);
  });
}

// sol2)
function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  return collection.filter(function (obj) {
    for (let key of keys) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

// sol3)
function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  return collection.filter((obj) => {
    return keys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
    bat: 2,
  })
);
