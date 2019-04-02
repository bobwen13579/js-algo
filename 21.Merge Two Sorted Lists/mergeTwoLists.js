
 function ListNode(val) {
   this.val = val;
   this.next = null;
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!(l1 || l2)) return l1 || l2 || null;
    const root = l1.val < l2.val ? l1 : l2;
    let node = root;
    let other = l1 === root ? l2 : l1;
    while (node.next && other) {
        if (node.next.val < other.val) {
            node = node.next;
        } else {
            const temp = node.next;
            node.next = other;
            node = node.next;
            other = temp;
        }
    }
    while (node.next) node = node.next;
    if (other) node.next = other;
    console.log(node);
    return root;
};

main = () => {
    const l1 = new ListNode(1);
    l1.next = new  ListNode(2);
    l1.next.next = new  ListNode(4);
    const l2 = new ListNode(1);
    l2.next = new  ListNode(3);
    l2.next.next = new  ListNode(4);
    mergeTwoLists(l1, l2);
};
main();