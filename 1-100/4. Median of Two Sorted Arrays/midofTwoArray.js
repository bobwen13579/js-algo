/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    // 合并数组
    var s = nums1.concat(nums2);

    // 排序
    s.sort(function(a, b) {
        return a - b;
    });

    let len = s.length;

    // 根据数组长度求中位数
    if (len % 2 !== 0) return s[~~(len / 2)];
    else return (s[len / 2 - 1] + s[len / 2]) / 2;
};

console.log(findMedianSortedArrays([3],[-2, 6]));