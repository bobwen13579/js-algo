function TreeNode(val) {
     this.val = val;
     this.left = null;
     this.right = null;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};