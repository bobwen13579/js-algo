/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const final = [];
    candidates.forEach((item) => {
        let res = target;
        let count = 0;
        while (res - item >= 0) {
           res = res - item;
           count++;
        }
        const sums = new Array(count).fill(item);
        if (res > 0) {
            candidates.forEach((i) => {
                console.log(i, res);
                if (i === res) {
                    sums.push(i);
                    final.push(sums);
                }
            })
        } else if (res === 0) final.push(sums);
    });
    return final;
};
console.log(combinationSum([2,3,6,7], 7));