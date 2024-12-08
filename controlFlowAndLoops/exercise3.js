let people = [
  { name: "Alex" },
  { name: "Bob", gender: "M" },
  { name: "Tom", gender: "f" },
  { name: "Mary", gender: "F" },
];

let result = people.map(function (people) {
  switch (people.gender) {
    case "m":
    case "M":
      people.gender = "Male";
      break;
    case "f":
    case "F":
      people.gender = "Female";
      break;
    default:
      people.gender = "Unknown";
      break;
  }

  return people;
});

console.log(result);
