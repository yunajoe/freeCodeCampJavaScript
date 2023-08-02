// filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
// Waiting:filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]
// Waiting:filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]
// Waiting:filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []
// arr은 nested array이다
function filteredArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(target)) {
      // splice메서드는 원본을 변경한다
      arr.splice(i, 1);
      // splice로 삭제가 되면은 해당 본래 arr들의 원소들의 인덱스들이 -1이 된다 (즉, 인덱스 1에 해당하는 원소가 인덱스 0이됨)
      //i--를 해줘야 본래 검증하려고 했던 원소들이 그냥 무시가 안되고 검증이 됨
      i--;
    }
  }
  return arr;
}

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
);
console.log(
  filteredArray(
    [
      ["trumpets", 2],
      ["flutes", 4],
      ["saxophones", 2],
    ],
    2
  )
);
console.log(
  filteredArray(
    [
      ["amy", "beth", "sam"],
      ["dave", "sean", "peter"],
    ],
    "peter"
  )
);
