// Apr 21
// Simple Simple Simple String Expansion - 6kyu
// https://www.codewars.com/kata/5ae326342f8cbc72220000d2/train/javascript

// Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

// The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.

// stringExpansion('3D2a5d2f') === 'DDDaadddddff'
// stringExpansion('3abc') === 'aaabbbccc'      // correct
// stringExpansion('3abc') !== 'aaabc'          // wrong
// stringExpansion('3abc') !== 'abcabcabc'      // wrong
// If there are two consecutive numeric characters the first one is ignored.

// stringExpansion('3d332f2a') === 'dddffaa'
// If there are two consecutive alphabetic characters then the first character has no effect on the one after it.

// stringExpansion('abcde') === 'abcde'
// Your code should be able to work for both lower and capital case letters.

// stringExpansion('') === ''

function stringExpansion(s) {
  let input = s.split("");
  let result = [];
  let multiplier = 1;

  for (i = 0; i < input.length; i++) {
    if (input[i] % 1 == 0) {
      multiplier = parseInt(input[i]);
    } else if (input[i] % 1 != 0) {
      result.push(input[i].repeat(multiplier));
    }
  }
  return result.join("");
}

//--------------------------------------------------
// Apr 22
// Sums of Parts - 6 kyu
// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6]
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Some lists can be long.
// Please ask before translating: some translations are already written and published when/if the kata is approved.

function partsSums(ls) {
  let subtotal = ls.reduce((acc, val) => acc + val, 0);
  result = [subtotal];
  for (let i = 1; i <= ls.length; i++) {
    subtotal -= ls[i - 1];
    result.push(subtotal);
  }
  return result;
}

//--------------------------------------------------
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

//--------------------------------------------------
