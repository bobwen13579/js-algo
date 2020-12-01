"use strict";

var _require = require('./testData.js'),
    tree = _require.tree;
/**
 * TODO: 123;
 * @description:递归版本遍历
 * @param {*}
 * @return {*}
 */


var levelOrder = function levelOrder(root) {
  if (!root) return 0;
  var queue = [root];
  var bucket = [];

  while (queue.length) {
    var width = queue.length;
    var level = [];

    for (var i = 0; i < width; i++) {
      var node = queue.pop();
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
      level.push(node.val);
    }

    bucket.push(level);
  }

  return bucket;
};

console.log(levelOrder(tree));