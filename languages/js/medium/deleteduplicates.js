function deleteDuplicateInUnsortedSll(sll1){
  var track = [];
  var temp = sll1.head;
  var prev= null;
  while(temp){
    if(track.indexOf(temp.data) >= 0){
      prev.next  = temp.next;
      sll1.size --;
    }else{
      track.push(temp.data);
      prev = temp;
    }
    temp = temp.next;

  }
  console.log(temp);

}

// delete duplicate in unsoted linkedlist
function deleteDuplicateInUnsortedSll(sll1){
  var track = {};
  var  temp = sll1.head;
  var prev = null;
  while(temp){
    if(track[temp.data]){
      prev.next = temp.next ;
      sll1.size --;
    }else{
      track[tem.data] = true;
      prev = temp;
    }
  }
}
