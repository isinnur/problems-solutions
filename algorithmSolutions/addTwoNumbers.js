var addTwoNumbers = function (l1, l2) {
  const result = new ListNode(0);
  let node = result;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    node.next = new ListNode(sum % 10);
    node = node.next;
  }

  return result.next;
};
