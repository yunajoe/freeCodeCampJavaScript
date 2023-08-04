function titleCase(str) {
  let answer = "";
  const finalAnswer = str.split(" ").reduce((acc, ele) => {
    let first = ele[0].toUpperCase();
    let res = ele.slice(1).toLowerCase();
    let total = first + res;
    answer += total + " ";
    return answer;
  }, answer);
  return finalAnswer.trim();
}

// sol2)

function titleCase(str) {
  let arr = str.split(" ");
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        answer += arr[i][j].toUpperCase();
      } else {
        answer += arr[i][j].toLowerCase();
      }
    }
    if (i !== arr.length - 1) {
      answer += " ";
    }
  }
  return answer;
}
