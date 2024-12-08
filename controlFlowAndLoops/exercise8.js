// for-in
let user = { name: "Bob", age: 22, gender: "Male" };

for (p in user) {
  console.log(`${p} is ${user[p]}`);
}

// for-of
let users = ["Alice", "Bob", "Tom", "Mary"];

for (u of users) {
  console.log(u);
}
