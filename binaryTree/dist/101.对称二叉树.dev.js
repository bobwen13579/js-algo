"use strict";

/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */
// @lc code=start

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function isSymmetric(root) {
  if (!root) return true;
  var isSame = true;
  travel(root.left, root.right, isSame);
  return isSame;
};

var travel = function travel(tree1, tree2, isSame) {
  if (tree1 && !tree2) {
    isSame = false;
    return;
  }

  if (!tree1 && tree2) {
    isSame = false;
    return;
  }

  if (!tree1 && !tree2) return;
  if (tree1.val !== tree2.val) isSame = false;
  if (tree1.left && tree1.right) travel(tree1.left, tree2.left, isSame);
  travel(tree1.right, tree2.right, isSame);
}; // @lc code=end