// 소수의 합
// 소수란 1과 자기자신의 수로만! 나눠지는수
// false를 return하면은 소수가 아니구 true면은 소수맍음
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
