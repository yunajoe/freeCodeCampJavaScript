// Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
// Only change code below this line
// ES5 Syntax
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
// ES6 Syntax
const { today, tomorrow } = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Objects
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
// Only change code below this line
const {
  today: { low: LowToday, high: HighToday },
} = LOCAL_FORECAST;

console.log(LOCAL_FORECAST); // 원본은 바뀌지 않는다
console.log(LowToday); // 64
console.log(HighToday); // 77
// Use Destructuring Assignment to Assign Variables from Arrays
// spread operator와 destructing의 가장 큰 차이점?
// spread operator는(...arr) arr안에있는 모든 원소를 spread한다
// destructing의은 [a, b,,c] = arr 은 원하는것만 pick해서 나열할 수 있다
let a = 8,
  b = 6;
[a, b] = [b, a];
