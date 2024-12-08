let people = [
  { name: "Alex" },
  { name: "Bob", gender: "M" },
  { name: "Tom", gender: "F" },
  { name: "Mary", gender: "f" },
];

let result = people.map(function (people) {
  if (people.gender === "m" || people.gender === "M") {
    people.gender = "Male";
  } else if (people.gender === "f" || people.gender === "F") {
    people.gender = "Female";
  } else {
    people.gender = "Unknown";
  }

  return people;
});

console.log(result);
