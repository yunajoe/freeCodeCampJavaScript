// - 자음으로 시작을 하면은 첫번째 자음, 자음까지의 단어를 떼서?
// 단어의 끝으로 옮긴다음에, ay를 붙인다

// - 모음으로 시작을 하면은 way 를 끝에 붙인다
function isVowel(firstLetter) {
  if (
    firstLetter === "a" ||
    firstLetter == "i" ||
    firstLetter == "e" ||
    firstLetter === "o" ||
    firstLetter === "u"
  ) {
    return true;
  }
}

function translatePigLatin(str) {
  let firstLetter = str[0];
  let vowelArr = ["a", "i", "e", "o", "u"];
  // 첫글자가 모음인경우
  if (isVowel(firstLetter)) {
    return str + "way";
  }
  // 첫글자가 자음인경우
  let firstVowelIdx = [...str].findIndex((val, idx) => {
    if (isVowel(val)) {
      return idx;
    }
  });

  // 첫글자가 자음이긴 하나, string에 모음이 하나도 없는경우
  if (firstVowelIdx === -1) {
    return str + "ay";
  }
  return str.slice(firstVowelIdx) + str.slice(0, firstVowelIdx) + "ay";
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
