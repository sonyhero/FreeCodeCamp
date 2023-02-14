/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

// испоьзование flat()
function steamrollArray(arr) {
  return arr.flat(Infinity);
}

//через reduce() и рекурсию
function steamrollArray(arr) {
  return Infinity > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(
            Array.isArray(val) ? steamrollArray(val, Infinity - 1) : val
          ),
        []
      )
    : arr.slice();
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
