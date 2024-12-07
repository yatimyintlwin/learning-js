let people = [
  { name: "Alice", age: 21, gender: "Female" },
  { name: "Bob", age: 22, gender: "Male" },
  { name: "Dana", age: 20, gender: "Female" },
  { name: "Zack", age: 24, gender: "Male" },
];

console.log(people.map((p) => p.name));

console.log(people.filter((p) => p.gender === "Male"));
