/* Given an integer array nums of length n where all the integers of nums are in the range [1, n]  and each integer appears once or twice, return an array of all the integers that appears twice.
 You must write an algorithm that runs in O(n) time and uses only constant extra space.

*/

// The Math.abs() function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  console.time('findDuplicates');
  let result = [];
  for (const iterator of nums) {
    let index = Math.abs(iterator) - 1;
    if (nums[index] < 0) {
      result.push(Math.abs(iterator));
    } else {
      nums[index] = -nums[index];
    }
  }
  console.timeEnd('findDuplicates');
  return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
