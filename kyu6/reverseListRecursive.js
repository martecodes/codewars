const reverseList = function (head) {
    if (head == null || head.next === null) return head

    let dummy = reverseList(head.next)
    head.next.next = head
    head.next = null

    return dummy
};