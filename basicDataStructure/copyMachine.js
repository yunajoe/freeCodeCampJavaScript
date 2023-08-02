// copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]
// Waiting:copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
// Waiting:copyMachine([true, true, null], 1) should return [[true, true, null]]
// Waiting:copyMachine(["it works"], 3) should return [["it works"], ["it works"], ["it works"]]
function copyMachine(arr, num) {
  let answer = [];
  while (num >= 1) {
    let copyArr = [...arr];
    answer.push(copyArr);
    num--;
  }
  return answer;
}

console.log(copyMachine([true, false, true], 2));
