function removeDuplicates(sll){
  var track = {};
  var prev = null;
  while(temp){
    if(track.indexOf(temp.data) >=0 ){
      prev.next = temp.next;
      sll1.size--;
    }else{
      track.push(temp.data);
      prev = temp ;
    }
    temp = temp.next;
  }
  console.log(temp)
}
