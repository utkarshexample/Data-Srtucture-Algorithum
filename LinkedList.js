
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        // Simplification of the above code
        // node.next = this.isEmpty()? null : node;
        //this.head = node;
        this.size++
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++
    }
    print() {
        if(this.isEmpty()) {
            console.log('The is Empty');
        } else {
            let curr = this.head;
            let listValue = '';
            while(curr) {
                listValue += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValue);
        }
    }

}

const list = new LinkedList();
console.log('List is Empty?', list.isEmpty());
console.log('List Size', list.getSize());
list.print();
list.append(10);
list.print();
list.append(20);
list.append(30);
list.print();
