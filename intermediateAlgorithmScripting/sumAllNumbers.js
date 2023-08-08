function sumAll(arr) {
  let sum =0;
  const [start, end] = arr
  for(let i=Math.min(...arr); i<=Math.max(...arr); i++){
    sum += i  
  }
  return sum
}

console.log(sumAll([1, 4])); // 10  
console.log(sumAll([5, 10])); // 45