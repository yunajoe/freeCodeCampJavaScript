function findLongestWordLength(str) {
  let arr = str.split(" ");
  return Math.max(...arr.map((ele) => ele.length));
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
