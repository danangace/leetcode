/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var numString = x.toString()
  for (let i = 0; i < Math.floor(numString.length / 2); i++) {
    if (numString[i] !== numString[numString.length - 1 - i]) return false
  }
  return true
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))