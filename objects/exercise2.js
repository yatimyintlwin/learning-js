let user = { name: "Bob", age: 22 };

function greet(name, age) {
  return `Hello ${name}, your are ${age} year old`;
}

// console.log(greet(...user));
let { name, age } = user;
console.log(name);
console.log(age);
