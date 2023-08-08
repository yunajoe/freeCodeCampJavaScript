// positive한 정수의 square값 구하기
const squareList = (arr) => {
  return arr
    .map((num) => {
      if (num > 0 && Number.isInteger(num)) {
        return item;
      }
    })
    .filter((item) => item)
    .map((ele) => ele ** 2);
};

// sol2)
const squareList2 = (arr) => {
  let positiveIntegersSquared = arr
    .filter((num) => {
      return Number.isInteger(num) && num > 0;
    })
    .map((num) => num * num);
  return positiveIntegersSquared;
};
