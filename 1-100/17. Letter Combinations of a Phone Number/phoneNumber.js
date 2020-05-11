const phone = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numstr = digits.split('');
    let res = [];
    numstr.forEach((i) => {
        const currentStr = phone[i].split('');
        if(!res.length) res.push(...currentStr);
        else {
            const temp = [];
            res.forEach((j) => {
                currentStr.forEach((item) => {
                   temp.push((j + item));
                });
            });
            res = temp;
        }
    });
    return res;
};
console.log(letterCombinations('34'));