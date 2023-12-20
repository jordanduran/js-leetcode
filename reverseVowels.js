// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Two-pointers solution

const reverseVowels = (s) => {
  let first = 0;
  let last = s.length - 1;
  let strArr = [...s];
  const vowels = 'aeiouAEIOU';

  while (first < last) {
    while (first < last && vowels.indexOf(strArr[first]) === -1) first++;
    while (first < last && vowels.indexOf(strArr[last]) === -1) last--;

    [strArr[first], strArr[last]] = [strArr[last], strArr[first]];
    first++;
    last--;
  }

  return strArr.join('');
};

// TEST CASE 1
reverseVowels('hello'); // holle

// TEST CASE 2
// reverseVowels('leetcode'); // leotcede
