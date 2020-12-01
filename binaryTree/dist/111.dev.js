"use strict";

var _require = require('./testData.js'),
    tree = _require.tree;
/**
 * TODO: 123;
 * @description:递归版本遍历
 * @param {*}
 * @return {*}
 */


var minDepth = function minDepth(root) {
  if (!root) return 0;
  var queue = [root];
  var deep = 1;

  while (queue.length) {
    var width = queue.length;

    for (var i = 0; i < width; i++) {
      var node = queue.pop();
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right); // 叶子节点则返回

      if (!node.left && !node.right) return deep;
    }

    deep += 1;
  }

  return deep;
};

console.log(minDepth(tree));