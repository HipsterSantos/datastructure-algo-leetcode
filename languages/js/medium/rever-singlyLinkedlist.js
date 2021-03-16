function reverseLL(head){
  var node = head;
  var prev = null;
    while(node){
      var temp  = node.next;
      node.next = prev;
      prev = node;
      if(!temp)
        break;
    node = temp;
    }
    return node
}
