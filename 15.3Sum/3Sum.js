/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let left = 0;
    const targets = [];
    const alearySet = new Set();
    for (; left< nums.length - 2;){
        for (let i = left + 1; i < nums.length - 1; i ++ ) {
            console.log(nums[left], nums[i],alearySet.has(nums[left]), alearySet.has(nums[i]));
            if (!(alearySet.has(nums[left]) && alearySet.has(nums[i]))){
                let target = nums[left] + nums[i];
                for (let right = i + 1; right < nums.length; right ++) {
                    console.log([nums[left], nums[i], nums[right]]);
                    if (!(nums[right] + target)
                        && !(alearySet.has(nums[left]) && alearySet.has(nums[i]) && alearySet.has(nums[right]))) {
                        const sums = [nums[left], nums[i], nums[right]];
                        sums.sort();
                        targets.push(sums);
                        alearySet.add(nums[left]);
                        alearySet.add(nums[i]);
                        alearySet.add(nums[right]);
                    }
                }
            }
        }
        left ++;
    }
    console.log(alearySet);
    return targets;
};
console.log(threeSum([3,0,-2,-1,1,2]));