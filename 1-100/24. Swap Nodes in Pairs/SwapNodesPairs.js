function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    const pre = head;
    const latterNode = head.next;
    const nextparis = latterNode.next;
    pre.next = swapPairs(nextparis);
    latterNode.next = pre;
    return latterNode;
};

const head = new  ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(swapPairs(head));
