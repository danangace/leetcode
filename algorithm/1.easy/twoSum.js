/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function(nums, target) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i]
    if (hash[compliment] >= 0) {
      return [i, hash[compliment]]
    }
    hash[nums[i]] = i
  }
};

console.log(twoSum([1,2,3,8,5], 6))