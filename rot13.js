// June 30, 2020
// Rot13, 5kyu
// https://www.codewars.com/kata/rot13-1/train/javascript

function rot13(message) {
  let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  let index = (x) => input.indexOf(x);
  let translate = (x) => (index(x) > -1 ? output[index(x)] : x);
  return message.split("").map(translate).join("");
}
