const swapPairs = function (head) {
    if (head == null || head.next == null) return head

    let currHead = head
    let nextHead = head.next
    let skipHead = head.next.next

    // relink the second node to the first node
    nextHead.next = currHead

    // the firstNode's next would be the result of the swap
    currHead.next = swapPairs(skipHead)

    // nextHead targets the 2nd node, which would be the first node if it reversed
    return nextHead
};