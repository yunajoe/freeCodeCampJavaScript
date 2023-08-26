function isPrimeNumber(val) {
  for (let i = 2; i < val; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
}

function getCommonthings(val) {
  let result = [];
  if (val >= 2) {
    for (let i = 2; i <= val; i++) {
      if (isPrimeNumber(i) && val % i === 0) {
        result.push(i);
      }
    }
  }
  return result;
}

function smallestCommons(arr) {
  let final = [];
  let result = [];
  arr.sort((a, b) => a - b);
  const [start, end] = arr;
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 1) {
      continue;
    }
    let primeArr = getCommonthings(result[i]);
    let frequency = [];
    while (primeArr.length) {
      let val = primeArr.shift();
      let quotient = result[i] / val;
      frequency.push(val);
      while (quotient % val === 0) {
        quotient = quotient / val;
        frequency.push(val);
      }
    }

    // 각각의 숫자를 key로 잡고, 갯수를 count하는 obj를 array마다 만들기
    let obj = frequency.reduce((obj, value) => {
      obj[value] ? (obj[value] += +1) : (obj[value] = 1);
      return obj;
    }, {});
    final.push(obj);
  }

  let finalObj = {};
  final.map((obj) => {
    for (let key in obj) {
      if (!finalObj[key]) {
        finalObj[key] = obj[key];
      } else {
        let maxNum = finalObj[key] > obj[key] ? finalObj[key] : obj[key];
        finalObj[key] = maxNum;
      }
    }
  });

  let answer = 1;
  for (let key in finalObj) {
    answer *= (+key) ** finalObj[key];
  }
  return answer;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([23, 18]));
console.log(smallestCommons([1, 13]));
