const { tree } = require('./testData.js');

const travel = (tree) => {
	const list = [];
	const stack = [];
	// 根节点
	// 子树指针 控制栈是否弹出 一路向左
	let cur = tree;
	if (!tree) return list;
	while (stack.length || cur) {
		while (cur) {
			stack.push(cur);
			cur = cur.left;
		}
		const node = stack.pop();
		// 找到节点
		list.push(node.val);
		if (node.right) cur = node.right;
	}
	console.log(list);
	return list;
};

travel(tree);
