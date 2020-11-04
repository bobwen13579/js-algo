/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 const tree = {
     val: 1,
     left: {
         val: 2,
         left: {
             val: 4
         },
         right: {
            val: 5,
            left: {
                val: 7
            },
            right: {
               val: 8
            }
         }
     },
     right: {
        val: 3,
        right: {
            val: 6,
        }
    },
 }

 exports.tree = tree;