const { tree } = require('./testData.js');

// 左中右 中序遍历
const isValidBST = function (root) {
  if (!root) return true;
  const stack = [];
  let preVal = Number.NEGATIVE_INFINITY;
  let cur = root;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    if(preVal >= node.val) return false;
    preVal = node.val;
    if (node.right) cur = node.right;
  }
  return true;
};

console.log(isValidBST(tree));
