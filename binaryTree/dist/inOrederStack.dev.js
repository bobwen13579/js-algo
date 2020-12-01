"use strict";

var _require = require('./testData.js'),
    tree = _require.tree;

var travel = function travel(tree) {
  var list = [];
  var stack = []; // 根节点
  // 子树指针 控制栈是否弹出 一路向左

  var cur = tree;
  if (!tree) return list;

  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    var node = stack.pop(); // 找到节点

    list.push(node.val);
    if (node.right) cur = node.right;
  }

  console.log(list);
  return list;
};

travel(tree);