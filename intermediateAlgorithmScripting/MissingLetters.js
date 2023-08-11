function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // str의 첫번째와 마지막 문자를 가지고와서
  let firstLetter = str[0];
  let lastLetter = str[str.length - 1];
  let firstIndex = alphabet.indexOf(firstLetter);
  let lastIndex = alphabet.indexOf(lastLetter);
  let matchUpLetter = alphabet.slice(firstIndex, lastIndex + 1);
  if (matchUpLetter === str) {
    return undefined;
  }
  return [...matchUpLetter]
    .filter((letter) => ![...str].includes(letter))
    .join("");
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
