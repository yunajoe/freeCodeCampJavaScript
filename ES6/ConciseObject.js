const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
// console.log(createPerson("yuna", 30, "women")); // { name: 'yuna', age: 30, gender: 'women' }
//ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once
const createPerson2 = (name, age, gender) => {
  return {
    name,
    age,
    gender,
  };
};
//console.log(createPerson2("yuna", 30, "women")); // { name: 'yuna', age: 30, gender: 'women' }
