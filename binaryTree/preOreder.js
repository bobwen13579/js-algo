// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/leetcodesuan-fa-xiu-lian-dong-hua-yan-shi-xbian-2/
const { tree } = require('./testData.js');

const travel = () => {
  const list = [];
  let node = tree;
  // 根节点
  const stack = [node];
  if (!node) return;
  while (node) {
    node = stack.pop();
    if (node) {
      list.push(node.val);
      // 先进后出
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }
  return list;
};

travel();
