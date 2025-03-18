// Node structure class
class Node {
    constructor(data) {
        this.data = data; // stores the node's data
        this.next = null; // pointer to the next node
    }
}

// Linked List class with key operations
class LinkedList {
    constructor() {
        this.head = null; // points to the first node in the list
    }

    // Add a node at the beginning
    addAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add a node at the end
    addAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Add a node at a specific position
    addAtPosition(data, position) {
        if (position === 0) {
            this.addAtBeginning(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        let prev = null;
        let index = 0;
        while (current && index < position) {
            prev = current;
            current = current.next;
            index++;
        }
        if (!prev) return;
        prev.next = newNode;
        newNode.next = current;
    }

    // Delete a node by value
    deleteByValue(value) {
        if (!this.head) return;
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current && current.data !== value) {
            prev = current;
            current = current.next;
        }
        if (!current) return;
        prev.next = current.next;
    }

    // Delete a node by position
    deleteByPosition(position) {
        if (!this.head) return;
        if (position === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        let index = 0;
        while (current && index < position) {
            prev = current;
            current = current.next;
            index++;
        }
        if (!current) return;
        prev.next = current.next;
    }

    // Search a node by value
    search(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) return true;
            current = current.next;
        }
        return false;
    }

    // Print the list (for testing purposes)
    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result.join(' -> ');
    }
}

//-----------------------------------------

// ! Warning

// Don't change anything below 
// If you change anything in this portion, your marks will be cut
// Unit tests
function testLinkedList() {
    const list = new LinkedList();

    // Test addAtBeginning
    list.addAtBeginning(10);
    list.addAtBeginning(20);
    console.assert(list.printList() === '20 -> 10', 'Test failed: addAtBeginning');

    // Test addAtEnd
    list.addAtEnd(30);
    console.assert(list.printList() === '20 -> 10 -> 30', 'Test failed: addAtEnd');

    // Test addAtPosition
    list.addAtPosition(25, 2);
    console.assert(list.printList() === '20 -> 10 -> 25 -> 30', 'Test failed: addAtPosition');

    // Test deleteByValue
    list.deleteByValue(10);
    console.assert(list.printList() === '20 -> 25 -> 30', 'Test failed: deleteByValue');

    // Test deleteByPosition
    list.deleteByPosition(1);
    console.assert(list.printList() === '20 -> 30', 'Test failed: deleteByPosition');

    // Test search
    console.assert(list.search(20) === true, 'Test failed: search (found)');
    console.assert(list.search(10) === false, 'Test failed: search (not found)');
}

testLinkedList();
console.log('All tests passed!');
