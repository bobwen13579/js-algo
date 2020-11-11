/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
	const vals = [];
	if (!root) return [];
	travel(root);
	return vals;
};

const travel = (node) => {
	if (!node) return;
	vals.push(node.val);
	node.children.forEach((c) => {
		travel(c, vals);
	});
};
// @lc code=end
