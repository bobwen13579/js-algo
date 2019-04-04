function ListNode(val) {
    this.val = val;
    this.next = null;
}

var sortList = function(head) {
    if (!head) return null;
    // 队列存节点
    const array = [];
    let node = head;
    while (node.next) {
        array.push(node);
        node = node.next;
    }
    array.sort((a, b) => a - b);
    array.map((node, index) => {
        node.next = array[index + 1] || null;
    });
    // 生成链表
    return array[0];
};
