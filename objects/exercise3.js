let user = {
  name: "Bob",
  hello: function () {
    return `Hello, I'm ${this.name}`;
  },
};

console.log(user.name);
user.name = "Alice";
console.log(user.hello());

// short form

/** 
let user = {
    name: "Bob",
    hello() {
        return `Hello, I'm ${this.name}`;
    }
}
**/
