// November 9, 2020
// Sum of Numbers, 7kyu
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
  // if both numbers are equal, return a:
  if (a === b) {
    return a;
  } else {
    // create an array with the input
    let input = [a, b];
    //console.log(input)

    // create a variable for the result:
    let sum = 0;

    // sort the input array in case it's not sorted:
    input.sort(function (x, y) {
      return x - y;
    });
    //console.log("sorted input", input);

    // loop through the input array, add up all the numbers within the range:
    for (let i = input[0]; i <= input[1]; i++) {
      sum += i;
    }

    return sum;
  }
}
