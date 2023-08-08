// Only change code below this line
// The output should be all lower-cased letters
// The output should not have any spaces
function urlSlug(title) {
  let answer = "";
  let newtitle = title.toLowerCase().trim();
  let arr = newtitle.split(" ").filter((ele) => ele);
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      answer += arr[i] + "-";
    } else {
      answer += arr[i];
    }
  }
  return answer;
}

// sol2)
function urlSlug(title) {
  let answer = "";
  return title
    .split(" ")
    .filter((word) => word)
    .join("-")
    .toLowerCase();
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug("Winter Is  Coming"));
console.log(urlSlug("Hold The Door"));
