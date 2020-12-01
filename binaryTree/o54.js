/*
 * @Author: your name
 * @Date: 2020-11-27 20:08:09
 * @LastEditTime: 2020-11-27 20:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-algo/binaryTree/o54.js
 */

const { getTreeFromLayerOrderArray } = require('./testData.js');

var kthLargest = function (root, k) {
	let cur = k;
	let res = null;
	// samll => big, 左中右
	const resPreOreder = (node) => {
		if (!node) return node;
		resPreOreder(node.right);
		cur--;
		if (cur === 0) res = node;
		resPreOreder(node.left);
	};
	resPreOreder(root);
	return res;
};

let res = kthLargest(getTreeFromLayerOrderArray([3, 1, 4, null, 2]), 1);

console.log(res);
