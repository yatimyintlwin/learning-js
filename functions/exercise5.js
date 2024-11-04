//Arrow Functions
let add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

//without return
let multi = (c, d) => c * d;
console.log(multi(2, 2));

//one parameter
let two = (n) => n / 2;
console.log(two(10));

//without parameter
let hello = () => "Hello, World";
console.log(hello());

// with underscore
let greet = (_) => "Hello, Bob";
console.log(greet());
