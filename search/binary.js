/*
 * @Author: your name
 * @Date: 2020-11-11 10:39:55
 * @LastEditTime: 2020-12-01 22:59:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-algo/search/binary.js
 */
const { normal } = require('./array');

// 二叉搜索树
const binarySearch = (nums = [], target) => {
	let left = 0;
	// 边界情况 [l, r]区间;
	let right = nums.length - 1;
	// 中止条件注意
	while (left <= right) {
		// right - left 防止溢出 （js只有float）
		const mid = left + ((right - left) >> 2);
		// 不要 else处理所有情况
		if (nums[mid] == target) {
			right = mid - 1;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		}
	}
	if (!left) return nums[left] === target ? left : -1;
	if (left === nums.length) return -1;
	return left;
};
console.log(binarySearch([1, 2, 2, 3], 2));
