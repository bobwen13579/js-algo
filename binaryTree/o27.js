/*
 * @Author: your name
 * @Date: 2020-11-28 14:56:01
 * @LastEditTime: 2020-11-28 15:03:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-algo/binaryTree/o27.js
 */
const { getTreeFromLayerOrderArray } = require('./testData.js');

var mirrorTree = function (root) {
	if (!root) return root;
	let tmp = root.left;
	root.left = mirrorTree(root.right);
	root.right = mirrorTree(tmp);
	return root;
};
let res = mirrorTree(getTreeFromLayerOrderArray([4, 2, 7, 1, 3, 6, 9]));

console.log(res);
