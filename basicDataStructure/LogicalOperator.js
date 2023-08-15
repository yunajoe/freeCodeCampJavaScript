// 아래 두개는 같은함수
function testLogicalAnd(val) {
  if (val > 5) {
    if (val < 10) {
      return "YES";
    }
  }
  return "No";
}
function testLogicalAnd2(val) {
  if (val > 5 && val < 10) {
    return "Yes";
  }
  return "No";
}

// 아래두개는 같음 함수
// 즉, val이 10보다 크거나 5보다 작으면은 NO
// YES가 되기위해서는 val이 5와 10을 포함해서 사이여야 한다
function testLogicalOr(val) {
  if (val > 10) {
    return "No";
  }
  if (val < 5) {
    return "No";
  }
  return "Yes";
}

function testLogicalOr2(val) {
  if (val > 10 || val < 5) {
    return "No";
  }
  return "Yes";
}
