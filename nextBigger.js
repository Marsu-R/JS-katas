// Apr 23
// Next bigger Number with the same digits - 4 kyu
// https://www.codewars.com/kata/55983863da40caa2c900004e/javascript

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
  let inputArr = n.toString().split("");
  //console.log(inputArr)

  // find the pivot, the point (from right to left) where i > i-1
  let point = -1;
  for (let i = inputArr.length - 1; i > 0; i--) {
    if (inputArr[i] > inputArr[i - 1]) {
      point = i - 1;
      //console.log(point)
      break;
    }
  }

  // if there is no pivot point, skip
  if (point == -1) return point;

  // splice the digits at the pivot to get the tail of the number
  let tail = inputArr.splice(point);

  // use the pivot number
  let pivot = tail.splice(0, 1)[0];
  //console.log(pivot)

  // find the lowest number in the tail that is bigger than the pivot number
  let minimum = null;
  let minimumIndex = null;
  for (let i = 0; i < tail.length; i++) {
    if (tail[i] > pivot) {
      if (minimum == null || tail[i] < minimum) {
        minimum = tail[i];
        minimumIndex = i;
      }
    }
  }

  if (minimumIndex == null) return -1;

  tail.splice(minimumIndex, 1);
  tail.push(pivot);
  tail = tail.sort();

  // concatenate the left part, the new pivot and the tail
  let result = +inputArr.concat([minimum]).concat(tail).join("");
  if (result < n) return -1;
  //console.log(inputArr)
  //console.log(tail)

  return result;
}

//nextBigger(21581957621);
