/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
var twoSum = function (nums, target) {
  let Obj = {};
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (Obj[temp] !== undefined) {
      return [Obj[temp], i];
    }
    Obj[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
