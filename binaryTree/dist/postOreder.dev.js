"use strict";

var _require = require('./testData.js'),
    tree = _require.tree;

var travel = function travel(tree) {
  var list = [];
  if (!tree) return list;
  var stack1 = [tree];
  var nodeStack = [];

  while (stack1.length) {
    // 出栈
    var node = stack1.pop(); // 访问中节点

    nodeStack.push(node); // 第二访问节点

    if (node.left) stack1.push(node.left); // 第一访问节点

    if (node.right) stack1.push(node.right);
  }

  while (nodeStack.length) {
    var _node = nodeStack.pop();

    list.push(_node.val);
  }

  console.log(list);
  return list;
};

var travel2 = function travel2(tree) {
  var list = [];
  if (!tree) return list;
  var stack = [tree];
  var cur = tree;

  while (stack.length) {
    var top = stack[stack.length - 1];

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