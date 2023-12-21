// Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target. If no such pair exists return [-1, -1].

// Two pointer solution

const search = (arr, targetSum) => {
  // Initialize pointers for beginning and end of arr
  let first = 0;
  let last = arr.length - 1;

  // Check while first < last
  while (first < last) {
    const currentSum = arr[first] + arr[last];
    // If currentSum equals targetSum return first and last indexes
    if (currentSum === targetSum) return [first, last];

    // If currentSum is < targetSum, we need a number bigger
    if (currentSum < targetSum) {
      first += 1;
    } else {
      // If currentSum is > targetSum, we need a number smaller
      last -= 1;
    }
  }
  // Return [-1, -1] if no numbers paired equal target
  return [-1, -1];
};

// TEST CASE 1
search([1, 2, 3, 4, 6], 6); // [1, 3]
