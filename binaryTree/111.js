const { tree } = require('./testData.js');

/**
 * TODO: 123;
 * @description:递归版本遍历
 * @param {*}
 * @return {*}
 */
var minDepth = function (root) {
	if (!root) return 0;
	const queue = [root];
	let deep = 1;
	while (queue.length) {
		const width = queue.length;
		for (let i = 0; i < width; i++) {
			const node = queue.pop();
			if (node.left) queue.unshift(node.left);
			if (node.right) queue.unshift(node.right);
			if (!node.left && !node.right) return deep;
		}
		deep += 1;
	}
	return deep;
};

console.log(minDepth(tree));
