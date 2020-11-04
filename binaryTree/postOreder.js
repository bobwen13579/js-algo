const { tree } = require('./testData.js');

const travel = (tree) => {
  const list = [];
  if (!tree) return list;
  const stack1 = [tree];
  const stack2 = [];
  while (stack1.length) {
    const node = stack1.pop();
    // 访问中节点
    stack2.push(node);
    // 第二访问节点 
    if (node.left) stack1.push(node.left);
    // 第一访问节点
    if (node.right) stack1.push(node.right);
  }
  while (stack2.length) {
    const node = stack2.pop()
    list.push(node.val);
  }
  console.log(list);
  return list;
};

travel(tree);

