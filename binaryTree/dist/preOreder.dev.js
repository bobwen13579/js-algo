"use strict";

// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/leetcodesuan-fa-xiu-lian-dong-hua-yan-shi-xbian-2/
var _require = require('./testData.js'),
    tree = _require.tree;

var travel = function travel() {
  var list = [];
  var node = tree; // 根节点

  var stack = [node];
  if (!node) return;

  while (node) {
    node = stack.pop();

    if (node) {
      list.push(node.val); // 先进后出

      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }

  return list;
};

travel();