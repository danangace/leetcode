/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const baseStr = strs[0];
  const baseLen = baseStr.length;
  for (let i = 1; i < strs.length; i++) {
    let str = strs[i];
    while (baseStr !== str.substring(0, baseLen)) {
      baseLen--;
      if (baseLen === 0) return "";
      baseStr = baseStr.substring(0, baseLen);
    }
  }

  return baseStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
