/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 const tree = {
     val: 10,
     left: {
         val: 2,
     },
     right: {
        val: 15,
        right: {
            val: 20,
        },
        left: {
            val: 6,
        }
    },
 }

 exports.tree = tree;