const { tree } = require('./testData.js');

/**
 * @description:递归版本遍历
 * @param {*}
 * @return {*}
 */
var minDepth = function (root) {
  if (!root) return 0;
  const stack = [root];
  let a = 1;
  let deep = 1;
  while (stack.length) {
    const width = stack.length;
    for (let i = 0; i < width; i++) {
      const node = stack.pop();
      if (node.left) stack.unshift(node.left);
      if (node.right) stack.unshift(node.right);
      if (!node.left && !node.right) return deep;
    }
    deep += 1;
  }
  return deep;
};

console.log(minDepth(tree));
