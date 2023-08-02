// while문
function factorialize(num) {
  let answer = 1;

  while (num > 1) {
    answer = answer * (num * (num - 1));
    num = num - 2;
  }
  return answer;
}

// while문 2번째
function factorialize(num) {
  let answer = 1;

  while (num > 0) {
    answer *= num;
    num--;
  }
}

//for문
function factorialize(num) {
  let answer = 1;
  for (let i = num; i >= 1; i--) {
    answer *= i;
  }
  return answer;
}

factorialize(5);
