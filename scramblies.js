// Apr 24, 2020
// Scramblies - 5kyu
// https://www.codewars.com/kata/scramblies/

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  let arr1 = str1.split("");
  console.log(arr1);
  let arr2 = str2.split("");
  console.log(arr2);

  //console.log(str1.includes(str2[0]))

  for (let i = 0; i < arr2.length; i++) {
    while (arr1.includes(arr2[i])) {
      //console.log(arr1.indexOf(arr2[i]))
      let foundLetter = arr1.indexOf(arr2[i]);
      console.log(foundLetter);
      arr1.splice(foundLetter, 1);
      console.log(arr1);

      arr2.splice(i, 1);
      console.log(arr2);
      //return true
    }
    //console.log("not included")
    //return false
    if (arr2.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
