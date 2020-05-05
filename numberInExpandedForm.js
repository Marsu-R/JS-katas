// May 30, 2020
// Write Number in Expanded Form, 6kyu
// https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // turn number into string
  const input = num.toString();
  const output = [];
  // initiate a multiplier for each digit
  let multiplier = 1;

  // loop through the input string, starting at index 1
  for (let i = 1; i <= input.length; i++) {
    // take digit by digit, going from the last digit of the number
    const digit = input[input.length - i];
    //console.log("digit:", digit)

    // skip if the digit is a zero; add the digit
    digit > 0 && output.unshift(digit * multiplier);

    // increase the multiplier times 10 with each iteration as we move through the number
    multiplier *= 10;
    //console.log("output:", output)
  }
  // join the output into a string using plus sign
  return output.join(" + ");
}

//expandedForm(70304)
