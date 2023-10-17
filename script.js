class MyNode2 {
    constructor(value, next, prev) {
        this.value
        this.next
        this.prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.header = new MyNode2(null, null, null)
        this.trailer = new MyNode2(null, null, this.header)
        this.size = 0
    }

    ifEmpty() {
        return this.size === 0
    }

    firstElement() {
        if (this.isEmpty()) return null
    }

    lastElement() {
        if (this.isEmpty()) return null
        return this.trailer.prev
    }

    addBetween(value, predecessor, sucsessor) {
        const newest = new MyNode2(value, predecessor, sucsessor)

        predecessor.next = newest
        sucsessor.prev = newest

        this.size++
    }

    addFirst(value) {
        this.addBetween(value, this.header, this.header.next)
    }

    addLast(value) {
        this.addBetween(value, this.trailer.prev, this.trailer)
    }

    remove(Node) {
        Node.prev.next = Node.next
        Node.next.prev = Node.prev
        this.size--
    }

    removeLast() {
        this.trailer = this.trailer.prev
        this.size--
    }

    removeFirst() {
        this.header = this.header.next
        this.size--
    }

    print() {
        let current = this.header.next;
        while (current !== this.trailer) {
            console.log(current.value);
            current = current.next;
        }
    }
}