//Design your linked List
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
    while(count != index){
        curr = curr.next;
        count ++;
    }
    return curr;
};
