/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [[]];
    nums.forEach((i) => {
       res.forEach((item) => {
           res.push([...item,i]);
       })
    });
    return res;
};
console.log(subsets([1,2,3]));