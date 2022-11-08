/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
 var twoSum = function(nums, target) {
  let counter = 0
  while (counter < Math.floor(target/2)) {
      const counterPartNum = target - counter
      const targetIndex = nums.findIndex(el => el === target)
      const counterPartNumIndex = nums.findIndex(el => el === counterPartNum)
      if (targetIndex && counterPartNum) {
          return [targetIndex, counterPartNumIndex]
      } else {
          counter++
      }
  }
};

console.log(twoSum([2,7,5,1]))