// recursion을 사용해서 countDown함수 만들기
function countdown(n) {
  if (n <= 0) {
    return [];
  }
  let arr = [];
  arr.push(n);
  return [...arr, ...countdown(n - 1)];
}
