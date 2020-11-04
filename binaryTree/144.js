const { tree } = require('./testData.js');

console.log(tree);
/**
 * @description:递归版本遍历
 * @param {*}
 * @return {*}
 */
var preorderTraversal = function (root) {
  const list = [];
  findValue(root, list);
  console.log(list);
  return list;
};

const findValue = (node, list) => {
  if (!node) return;
  const { left, right, val } = node;
  if (left) {
    findValue(left, list);
  }
  if (right) {
    findValue(right, list);
  }
  // 决定遍历方向
  list.push(val);
};
preorderTraversal(tree);
