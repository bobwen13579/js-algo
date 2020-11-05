const { tree } = require('./testData.js');

const travel = (tree) => {
  const list = [];
  if (!tree) return list;
  const stack1 = [tree];
  const nodeStack = [];
  while (stack1.length) {
    const node = stack1.pop();
    // 访问中节点
    nodeStack.push(node);
    // 第二访问节点
    if (node.left) stack1.push(node.left);
    // 第一访问节点
    if (node.right) stack1.push(node.right);
  }
  while (nodeStack.length) {
    const node = nodeStack.pop();
    list.push(node.val);
  }
  console.log(list);
  return list;
};

const travel2 = (tree) => {
  const list = [];
  if (!tree) return list;
  const stack = [tree];
  let cur = tree;
  while (stack.length) {
    const top = stack[stack.length - 1];
    if (top.left && top.left !== cur && top.right !== cur) {
      stack.push(top.left);
    } else if (top.right != null && top.right != cur) {
      stack.push(top.right);
    } else {
      list.push(stack.pop().val);
      cur = top;
    }
  }
  console.log(list);
  return list;
};

travel2(tree);
