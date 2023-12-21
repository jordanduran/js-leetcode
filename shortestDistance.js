// Given an array of strings words and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

// Example
// Input: words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], word1 = "fox", word2 = "dog"
// Output: 5

const shortestDistance = (words, word1, word2) => {
  // Initialize var at length of words array
  let shortestDistance = words.length;

  // Initialize vars to start at -1 to indicate word not found yet
  let position1 = -1;
  let position2 = -1;

  // Loop over words array
  for (let i = 0; i < words.length; i++) {
    // Check if words[i] equals word1, if so position1 becomes i
    if (words[i] === word1) position1 = i;

    // Check if words[i] equals word2, if so position2 becomes i
    if (words[i] === word2) position2 = i;

    // If position vars have changed, calculate shortest distance
    if (position1 !== -1 && position2 !== -1) {
      shortestDistance = Math.min(
        shortestDistance,
        Math.abs(position1 - position2)
      );
    }
  }
  // Return shortest distance
  return shortestDistance;
};

// TEST CASE 1
shortestDistance(
  ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'],
  'fox',
  'dog'
);
