function repeatStringNumTimes(str, num) {
  let answer = "";
  for (let i = 0; i < num; i++) {
    answer += str;
  }
  return answer;
}

function repeatStringNumTimes(str, num) {
  let answer = "";
  while (num >= 1) {
    answer += str;
    num--;
  }
  return answer;
}

repeatStringNumTimes("abc", 3);

// repeatStringNumTimes("*", 3)
