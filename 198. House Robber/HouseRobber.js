/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let a = 0;
    let b = 0;
    nums.forEach((i,index) => {
        if (index % 2 ===0) {
            a = Math.max(a + i, b);
        } else {
            b = Math.max(a, b + i);
        }
    });
    return Math.max(a, b);
};