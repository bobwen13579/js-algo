/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const { length } = strs;
    const samestrs = [];
    let isSame = true;
    let index = 0;
    while (isSame) {
        for (let i = 0; isSame && i < length; i++) {
            if (!samestrs[index]) samestrs.push(i);
            else if (samestrs[index] !== strs[i][index]) isSame = false;
        }
    }
    return samestrs;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));