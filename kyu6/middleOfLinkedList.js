const middleNode = function (head) {
    let sp = head
    let fp = head.next;

    while (fp && fp.next) {
        sp = sp.next;
        fp = fp.next.next;
    }

    return fp ? sp.next : sp;
};

/*
Input: head = [1, 2, 3, 4, 5]
Output: [3, 4, 5]
Explanation: The middle node of the list is node 3.
*/