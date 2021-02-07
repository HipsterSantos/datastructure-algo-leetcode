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
