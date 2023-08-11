// Base pairs are represented by the characters AT and CG
function pairElement(str) {
  return str.split("").map((letter) => {
    let subArr = [];
    if (letter === "G") {
      subArr.push(letter, "C");
      return subArr;
    } else if (letter === "C") {
      subArr.push(letter, "G");
      return subArr;
    } else if (letter === "A") {
      subArr.push(letter, "T");
      return subArr;
    } else if (letter === "T") {
      subArr.push(letter, "A");
      return subArr;
    }
  });
}

// sol2)
function caluatePair(initial) {
  if (initial === "A") {
    return "T";
  } else if (initial === "T") {
    return "A";
  } else if (initial === "G") {
    return "C";
  } else if (initial === "C") {
    return "G";
  }
}

function pairElement(str) {
  return str.split("").map((value) => {
    return [value, caluatePair(value)];
  });
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
