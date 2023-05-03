function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = [];
  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];
    reverseWord.push(char);
  }
  return reverseWord.join('') === word;
}

console.log(isPalindrome('racecar'));

/* 
  Add your pseudocode here
  receive word
  iterate through each letter of the word
  if iteration is the same with the letters starting from beginning of word as 
  it is as starting from the end of the word 
  then 'word' is a palindrome
*/

/*
  Add written explanation of your solution here
  I know in order to check if a word is a palindrome or not that I would need to
  be able to iterate through the characters of a word which is why I decided to
  use a traditional for loop.

  I decided to start at the end of the 'word' that I was given as a parameter
  and push each letter to an array (that I would later 'join()' to form a word).

  Outside of my for loop I will return my 'reverseWord' and check if it is equal
  to the 'word' I was given as a parameter.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
