// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// const isAnagram = (s, t) => {
//   // If string lengths do not match then it cannot be an anagram
//   if (s.length !== t.length) return false;

//   // Create maps to keep track of character count for each string
//   const sMap = {};
//   const tMap = {};

//   // Loop over the any strings length as they are both equal
//   for (let i = 0; i < s.length; i++) {
//     // Check if character for both strings exists in the maps, if not make first entry
//     if (!sMap[s[i]]) sMap[s[i]] = 0;
//     if (!tMap[t[i]]) tMap[t[i]] = 0;

//     // If they do exist then increment the count for the character
//     sMap[s[i]]++;
//     tMap[t[i]]++;
//   }

//   // Loop over any given map and check if the count for the current character is equal in both maps, if not then it is not an anagram
//   for (let char in sMap) {
//     if (sMap[char] !== tMap[char]) return false;
//   }
//   return true;
// };

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!sMap[s[i]]) sMap[s[i]] = 0;
    if (!tMap[t[i]]) tMap[t[i]] = 0;
    sMap[s[i]]++;
    tMap[t[i]]++;
  }

  for (let char in sMap) {
    if (sMap[char] !== tMap[char]) return false;
  }
  return true;
};

// TEST CASE 1
isAnagram('anagram', 'nagaram'); // TRUE

// TEST CASE 2
// isAnagram('car', 'rat'); // FALSE
