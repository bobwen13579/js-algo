/**
 * @param {string} s
 * @return {boolean}
 */
const parentthesesMap = {
    '(':')',
    '{':'}',
    '[':']',
};
const stack = [];

var isValid = function(s) {
    for (let i = 0; i < s.length; i = i + 1) {
        if (!stack.length) stack.push(s[i]);
        else {
            const pop = stack[stack.length - 1];
            if(parentthesesMap[pop] !== s[i]) stack.push(s[i]);
            else stack.pop();
        }
        console.log(stack);
    }
    console.log(stack);
    if (stack.length) return false;
    return true;
};
console.log(isValid('{[]}'));
