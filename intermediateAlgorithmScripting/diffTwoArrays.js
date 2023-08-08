// return a new array with any items only found in one of the two given arrays
function diffArray(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  } else {
    let newArr = arr2.filter((ele) => !arr1.includes(ele));
    let newArr2 = arr1.filter((ele) => !arr2.includes(ele));
    return [...new Set([...newArr, ...newArr2])];
  }
}

// sol2)
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}
