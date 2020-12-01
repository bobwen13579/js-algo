"use strict";

/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */
// @lc code=start

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function postorder(root) {
  var vals = [];
  if (!root) return vals;
  travel(root, vals);
  return vals;
};

var travel = function travel(node, vals) {
  if (!node) return;
  node.children.forEach(function (c) {
    travel(c, vals);
  });
  vals.push(node.val);
}; // @lc code=end