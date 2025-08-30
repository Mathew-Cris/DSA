function checker(word) {
  // converts string to array form using .split() method
  let name = word.split("");
  // empty array
  let reversedName = [];
  // empty variable
  let converted;
  // loop for iterating all elements
  for (var i = 0; i < word.length; i++) {
    // pop all elements out then store on letters varible
    let letters = name.pop();
    // push each letters to the reversedName variable
    reversedName.push(letters);
    // converts back the array form to string
    converted = reversedName.join("");
  }
  // ternary operator
  let result =
    word == converted
      ? `${word} is a palindrome`
      : `${word}  is not a palindrome`;
  console.log(result);
}

checker("race")
