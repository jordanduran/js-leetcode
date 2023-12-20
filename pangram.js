// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

const checkIfPangram = (s) => {
  // Create a set to keep track of unique characters
  const unique = new Set();

  // Reformat all characters to be lowercase
  const reformattedString = s
    .split('')
    .map((char) => char.toLowerCase())
    .filter((x) => x !== ' ');

  for (let i = 0; i < reformattedString.length; i++) {
    // If unique does not have the character stored, then add it
    if (!unique.has(reformattedString[i])) unique.add(reformattedString[i]);
  }

  // After looping over entire string, if the size of the set isnt equal to 26, then not all letters of the alphabet are present
  return unique.size === 26;
};
// TEST CASE 1
// checkIfPangram('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'); // TRUE

// TEST CASE 2
// checkIfPangram('leetcode'); // FALSE
