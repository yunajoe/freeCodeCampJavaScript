function largestOfFour(arr) {
  return arr.map((subArr) => {
    let MaxNum = Math.max(...subArr);
    return MaxNum;
  });
}

//sol2)
function largestOfFour(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (largestNumber <= arr[i][j]) {
        largestNumber = arr[i][j];
      }
    }
    answer.push(largestNumber);
  }
  return answer;
}

// test
console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
