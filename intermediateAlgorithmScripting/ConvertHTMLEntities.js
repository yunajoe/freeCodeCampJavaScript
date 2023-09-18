const obj = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
function convertHTML(str) {
  return [...str]
    .map((val) => {
      if (obj[val]) {
        return obj[val];
      } else {
        return val;
      }
    })
    .join("");
}
