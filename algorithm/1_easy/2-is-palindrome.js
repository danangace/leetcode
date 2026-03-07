/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const numStr = x.toString();
  const ln = numStr.length;
  for (let i = 0; i < Math.floor(ln / 2); i++) {
    if (numStr[i] !== numStr[ln - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
