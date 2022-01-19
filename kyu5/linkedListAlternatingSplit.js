function Node(data) {
    this.data = data;
    this.next = null;
}

function Context(first, second) {
    this.first = first;
    this.second = second;
}

function alternatingSplit(head) {
    // Your code goes here.
    // Remember to return the context.
    let firstTemp = new Node()
    let secondTemp = new Node()

    let firstHead = firstTemp = head
    let secondHead = secondTemp = head.next

    head = head.next.next

    while (head !== null && head.next !== null) {
        firstTemp.next = head
        secondTemp.next = head.next

        firstTemp = firstTemp.next
        secondTemp = secondTemp.next

        head = head.next.next
    }

    if (head != null) {
        firstTemp.next = head
        firstTemp = firstTemp.next
    }

    firstTemp.next = null
    secondTemp.next = null

    return new Context(firstHead, secondHead)

}