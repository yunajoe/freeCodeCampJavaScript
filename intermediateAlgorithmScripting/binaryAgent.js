// 2진법> 10진법> 10진법을 알파벳으로
// fromcharcodeAt  (아스키코드를 문자열로 바꾸기)
function binaryAgent(str) {
  let answer = "";
  let letter = str.split(" ");
  let final = letter.map((letter) => {
    let sum = 0;
    for (let i = 0; i < letter.length; i++) {
      let value = letter[i] * 2 ** (letter.length - i - 1);
      sum += value;
    }
    answer += String.fromCharCode(sum);
    return answer[answer.length - 1];
  });
  return final.join("");
}
