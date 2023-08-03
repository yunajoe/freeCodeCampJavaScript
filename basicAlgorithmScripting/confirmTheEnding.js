function confirmEnding(str, target) {
  let len = target.length;
  let partStr = str.substring(str.length - len);
  return partStr === target ? true : false;
}

// sol2)
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
