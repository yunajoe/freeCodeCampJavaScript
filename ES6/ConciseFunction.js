// within objects in ES5, we have to use the keyword function as follows
const person = {
  name: "Yuna",
  sayHello: function () {
    return `Hello, Myname is ${this.name}`;
  },
};

// With ES6, you can remove the function keyword and colon altogether

const person2 = {
  name: "Yuna",
  sayHello() {
    return `Hello, Myname is ${this.name}`;
  },
};

console.log(person.sayHello()); // Hello, Myname is Yuna
console.log(person2.sayHello()); // Hello, Myname is Yuna
