/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    const midlen = Math.trunc((nums1.length + nums2.length + 1) / 2);
    let start = 0, end = nums1.length - 1, x = findmid(0, end), y = midlen - x;
};
findmid = (start, end = 0) => {
    return Math.trunc((start + end + 1) / 2);
};

console.log(findMedianSortedArrays([3],[-2, -1]));