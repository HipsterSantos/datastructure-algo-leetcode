/**
 * Initialize your data structure here.
 */
var Node = function(value){
    this.data = value;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    var count = 0;
    var curr = this.head;
    while(index != count){
        curr = curr.next;
        count ++;
    }
    return curr;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var temp = new Node(val);
    temp.next  = this.head;
    this.head = temp;
    this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var curr = this.head;
    while(curr.next != null){
        curr = curr.next;
    }
    if(curr == null){
        curr = new Node(val)
        this.size++;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    var count = 0;
    var curr = this.head;
    while(index != count){
        curr = curr.next;
        count ++;
    }

    var temp  = new Node(val);
    temp.next  = curr.next;
    curr = temp;
    this.size++;
    // return curr;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    var count = 0;
    var curr = this.head;
    while(index != count){
        curr = curr.next;
        count ++;
    }

    curr = curr.next;
    this.head--;
    return curr;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
