/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const validOpen = ["(", "[", "{"];
  const matchParentheses = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stacks = [];

  for (let i = 0; i < s.length; i++) {
    // console.log(stacks, "previous");
    // console.log(s[i]);
    const isOpenParentheses = validOpen.includes(s[i]);
    if (isOpenParentheses) {
      stacks.push(s[i]);
    } else {
      const relation = matchParentheses[s[i]];
      if (stacks[stacks.length - 1] === relation) {
        stacks.pop();
      } else {
        return false;
      }
    }
    // console.log(stacks, "after");
    // console.log("========================================");
  }

  return stacks.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
console.log(isValid("({{{{}}}))")); // false
