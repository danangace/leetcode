/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const dict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }

  if (s.length < 1) {
      return 0
  } else if (dict[s[0]] < dict[s[1]]) {
      return (dict[s[1]] - dict[s[0]]) + romanToInt(s.slice(2))
  } else {
      return dict[s[0]] + romanToInt(s.slice(1))
  }
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("MMDLXVIII"))
console.log(romanToInt("CMXCIX"))
console.log(romanToInt("MDCCCXCVIII"))