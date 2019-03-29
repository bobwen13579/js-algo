
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        const currentHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, (right - left) * currentHeight);
        if (height[left] < height[right]) left += 1;
        else right -= 1;
    }

    return maxArea;
};

console.log(maxArea([1,2,4,3]));