/*
 * @Author: your name
 * @Date: 2020-11-27 19:29:26
 * @LastEditTime: 2020-11-27 19:56:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-algo/binaryTree/236.js
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const { tree } = require('./testData.js');

var lowestCommonAncestor = function (root, p, q) {
	// 确认好要返回什么值
	if (root === q || root === p) return root;
	if (!root) return null;
	let left = lowestCommonAncestor(root.left, p, q);
	let right = lowestCommonAncestor(root.right, p, q);
	// 后序遍历 最后处理根节点
	if (left && right) return root;
	if (right) return right;
	if (left) return left;
	return null;
};

console.log(lowestCommonAncestor(tree, tree.right, tree.left.right));
