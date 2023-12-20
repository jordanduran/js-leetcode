// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Regex for alphanumeric only: /^[a-z0-9]+$/i

// Two pointers solution

const isPalindrome = (s) => {
  // Set two pointers for first index and last index of string
  let first = 0;
  let last = s.length - 1;

  // Check while first < last
  while (first < last) {
    // Check while first < last and char in both first and last index is not an alphanumeric value
    while (first < last && !s[first].match(/^[a-z0-9]+$/i)) first++;
    while (first < last && !s[last].match(/^[a-z0-9]+$/i)) last--;

    // If characters at both ends dont match, return false
    if (s[first].toLowerCase() !== s[last].toLowerCase()) return false;

    // Else, increment and decrement pointers to keep going through string
    first++;
    last--;
  }
  // If the two pointers crossed, the string is a palindrome
  return true;
};

// TEST CASE 1
isPalindrome('A man, a plan, a canal, Panama!'); // TRUE

// TEST CASE 2
// isPalindrome('Was it a car or a cat I saw?'); // TRUE
