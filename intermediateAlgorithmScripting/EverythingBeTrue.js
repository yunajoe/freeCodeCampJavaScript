// pre가 key값인데.. pre가 key로 하는 value
// falsey값은 null, defined, 0, "", NaN
function truthCheck(collection, pre) {
  let result = collection.map((obj) => {
    if (!obj.hasOwnProperty(pre)) {
      return false;
      //  NaN값이면은 false return
    } else if (
      Number.isNaN(obj[pre]) ||
      obj[pre] === "" ||
      obj[pre] === undefined ||
      obj[pre] === 0 ||
      obj[pre] === null ||
      obj[pre] === false
    ) {
      return false;
    } else {
      return true;
    }
  });
  //
  return result.indexOf(false) !== -1 ? false : true;
}
function truthCheck(collection, pre) {
  return collection.every((ele) => {
    return ele.hasOwnProperty(pre) && Boolean(ele[pre]);
  });
}
