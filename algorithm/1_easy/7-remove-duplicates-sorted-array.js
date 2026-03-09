/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let unique = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[unique - 1] !== nums[i]) {
      nums[unique] = nums[i];
      unique++;
    }
  }

  return unique;
};

console.log(removeDuplicates([1, 1, 2])); // [1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0,1,2,3,4]
