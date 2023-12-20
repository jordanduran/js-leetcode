// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Two-pointers solution

const reverseVowels = (s) => {
  // Set pointers at beginning and end of string
  let first = 0;
  let last = s.length - 1;

  // Turn string into array
  let strArr = [...s];
  const vowels = 'aeiouAEIOU';

  // While first is less than last
  while (first < last) {
    // Check while first < last and character is not a vowel from both ends
    while (first < last && vowels.indexOf(strArr[first]) === -1) first++;
    while (first < last && vowels.indexOf(strArr[last]) === -1) last--;

    // Swap array elements with destructuring
    [strArr[first], strArr[last]] = [strArr[last], strArr[first]];

    // Increment first and decrement last
    first++;
    last--;
  }

  // Return strArr reformatted to string
  return strArr.join('');
};

// TEST CASE 1
reverseVowels('hello'); // holle

// TEST CASE 2
// reverseVowels('leetcode'); // leotcede
