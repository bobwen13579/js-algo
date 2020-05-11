function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 双指针
var removeNthFromEnd = function(head, n) {
    if (!head) return;
    let fast = head;
    let slow = head;
    for (let i = 1; i < n; i++) {
        fast = fast.next;
    }
    while (fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};
