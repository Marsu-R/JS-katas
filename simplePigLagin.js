// May 29, 2020
// Simple Pig Latin, 5kyu
// https://www.codewars.com/kata/simple-pig-latin/train/javascript

function pigIt(str) {
  let input = str.split(" ");
  let result;
  console.log(input);
  //console.log(input.length)
  //console.log(str.charAt(str.length - 1))

  if (
    str.charAt(str.length - 1) === "!" ||
    str.charAt(str.length - 1) === "?" ||
    str.charAt(str.length - 1) === "."
  ) {
    punctuationMark = str.charAt(str.length - 1);
    console.log(punctuationMark);
    input.pop(input.length - 1);
    console.log(input);

    return (
      input
        .map((element) => {
          let letters = element.split("");
          //console.log(letters)
          let firstLetter = letters[0];
          let remainingLetters = letters.slice(1).join("");
          let reversedWord = remainingLetters + firstLetter;
          let newWord = reversedWord + "ay";
          return newWord;
          //console.log(newWord)
        })
        .join(" ") +
      " " +
      punctuationMark
    );
  } else {
    return input
      .map((element) => {
        let letters = element.split("");
        //console.log(letters)
        let firstLetter = letters[0];
        let remainingLetters = letters.slice(1).join("");
        let reversedWord = remainingLetters + firstLetter;
        let newWord = reversedWord + "ay";
        return newWord;
        //console.log(newWord)
      })
      .join(" ");
  }
}
