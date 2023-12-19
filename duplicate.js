// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
  const hTable = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hTable) {
      return true;
    }
    hTable[nums[i]] = 1;
  }
  return false;
};

// TEST CASE 1
containsDuplicate([1, 2, 3, 1]); // TRUE

// TEST CASE 2
// containsDuplicate([1,2,3,4]); // FALSE

// TEST CASE 3
// containsDuplicate([1,1,1,3,3,4,3,2,4,2]); // TRUE
