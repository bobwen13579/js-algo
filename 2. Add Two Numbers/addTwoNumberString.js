
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const num = listNodeToNumber(l1) + listNodeToNumber(l2);
    console.log(num);
    return numberToList(num);
};

const listNodeToNumber = (l) => {
    let str = '';
    let currentNode = l;
    console.log(l);
        while (currentNode) {
            str = currentNode.val.toString() + str;
            currentNode = currentNode.next;
    }
    return parseInt(str);
};

const numberToList = (num) => {
  if (num < 0) return 0;
  let lastNode = null;
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
      const val = parseInt(str[i]);
      const node = new ListNode(val);
      node.next = lastNode;
      lastNode = node;
  }
  return lastNode;
};

const main = () => {
    const l1 = new ListNode(1);
    l1.next = new ListNode(8);
    const l2 = new ListNode(0);
    console.log(addTwoNumbers(l1, l2));
};

main();