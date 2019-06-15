
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 *
 *
 */
var addTwoNumbers = function(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let carry = 0;
    let root = null;
    let node = null;
    while (current1 || current2 || carry) {
        let val1 = 0;
        let val2 = 0;
        if (current1){
            val1 = current1.val;
            current1 = current1.next;
        }
        if (current2){
            val2 = current2.val;
            current2 = current2.next;
        }
        let num = val1 + val2 + carry;
        if (carry) carry = 0;
        if (num > 9) {
            carry = 1;
            num -= 10;
        }
        if (!root) {
            root = new ListNode(num);
            node = root;
        } else {
            node.next = new ListNode(num);
            node = node.next;
        }
    }
    return root;
};
// test case
const main = () => {
    const l1 = new ListNode(1);
    l1.next = new ListNode(8);
    const l2 = new ListNode(0);
    console.log(addTwoNumbers(l1, l2));
};

main();