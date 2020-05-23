// May 23, 2020
// Only Duplicates, 6kyu
// https://www.codewars.com/kata/only-duplicates/train/javascript

// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
  let duplicates = "";
  for (const char of str) {
    if (str.lastIndexOf(char) !== str.indexOf(char)) {
      duplicates += char;
    }
  }

  return duplicates;
}
