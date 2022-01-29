const removeNthFromEnd = function (head, n) {
    let move = n;
    let fast = head;
    let slow = head;

    while (fast.next) {
        if (move) {
            move--
        } else {
            slow = slow.next;
        }
        fast = fast.next;
    }
    // if move is still 1 that means slow didnt move and head node needs to be removed
    if (move === 1) {
        head = head.next;
    } else {
        slow.next = slow.next.next;
    }
    return head;
};

/*
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/