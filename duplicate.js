// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Hash table solution

// const containsDuplicate = (nums) => {
//   const hTable = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] in hTable) {
//       return true;
//     }
//     hTable[nums[i]] = 1;
//   }
//   return false;
// };

// Brute force solution

const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    console.log('nums[i]', nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      console.log('nums[j]', nums[j]);

      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

// Set solution

// const containsDuplicate = (nums) => {
//   const numberMap = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     if (numberMap.has(nums[i])) return true;
//     numberMap.add(nums[i]);
//   }
//   return false;
// };

// TEST CASE 1
// containsDuplicate([1, 2, 3, 1]); // TRUE

// TEST CASE 2
containsDuplicate([1, 2, 3, 4]); // FALSE

// TEST CASE 3
// containsDuplicate([1,1,1,3,3,4,3,2,4,2]); // TRUE
