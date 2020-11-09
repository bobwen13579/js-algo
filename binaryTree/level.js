const { tree } = require('./testData.js');

/**
 * TODO: 123;
 * @description:递归版本遍历
 * @param {*}
 * @return {*}
 */
var levelOrder = function (root) {
	if (!root) return 0;
	const queue = [root];
	const bucket = [];

	while (queue.length) {
		const width = queue.length;
		const level = [];
		for (let i = 0; i < width; i++) {
			const node = queue.pop();
			if (node.left) queue.unshift(node.left);
			if (node.right) queue.unshift(node.right);
			level.push(node.val);
		}
		bucket.push(level);
	}
	return bucket;
};

console.log(levelOrder(tree));
