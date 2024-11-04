// Callback function
function twice(num, fun) {
  let result = fun(num);
  return result * 2;
}

twice(5, function (x) {
  return x + 1;
});

// console.log(
//   twice(5, function (x) {
//     return x + 1;
//   })
// );
