var twoSum = function(nums, target) {
    const targetTable = new Map();
    nums.forEach = nums.map((num, index) => targetTable.set(target - num, index));
    console.log(targetTable);
    for (let i = 0; i < nums.length; i ++) {
        if (targetTable.has(nums[i]) && targetTable.get(nums[i]) !== i) return [i, targetTable.get(nums[i])];
    }
    return [];
};

console.log(twoSum([3,2,4], 6));