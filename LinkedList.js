class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    } 
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }
    // o(1)
    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node; 
        }
        this.size++;
    }
    // o(n)
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(index,value) {
        if(index<0 || index > this.size) {
            console.log("Index out of bound");
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            let node = new Node(value);
            let prev = this.head;
            for(let i =0; i<index-1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if(index < 0 || index > this.size) {
            console.log("Index out of bound");
            return;
        }
        let removeNode;
        if(index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i=0; i<index-1;i++) {
                prev = prev.next
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--
        return removeNode.value;
    }

    removeValue(value) {
        if(this.isEmpty()) {
            return null;
        }
        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--
            return value;
        } else {
            
            let prev = this.head;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if(prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--
                return removedNode;
            }
            return "No value Found";
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        } else {
            let curr = this.head;
            let i=0;
            while(curr) {
                if(value === curr.value) {
                    return i;
                }
                curr = curr.next;
                i++
            }
            return -1;
        }
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print() {
        if(this.isEmpty()) {
            console.log("List is Empty")
        } else {
            let curr = this.head;
            let listValue = "";
            while(curr) {
                listValue += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValue);
        }
    }
}

const list = new LinkedList();
console.log("empty ?" + list.isEmpty())
list.append(5);
list.append(15);
list.append(25);
list.insert(1,10);
list.print();
list.reverse();
list.print();
//console.log(list.removeValue(2));
//console.log("Index is " +list.search(50));