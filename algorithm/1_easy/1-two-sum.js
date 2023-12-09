/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var result = []
var twoSum = function(nums, target) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i]
    if (hash[compliment] >= 0) {
      return [i, hash[compliment]]
    } else {
      hash[nums[i]] = i
    }
  }
};

console.log(twoSum([2,7,11,15], 9)) // [1,0] atau [0,1]
console.log(twoSum([3,2,4], 6)) // [2,1] atau [1,2]
console.log(twoSum([3,3], 6)) // [1,0] atau [0,1]