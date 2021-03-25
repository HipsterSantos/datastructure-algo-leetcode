ris2.split(/([^]*?\n)\n/).filter(items =>items != '').forEach((line,index)=>{

    line.split(/(.*\s*)-\s+/).forEach((line2,index)=>{
    //    if( index % 2 == 0){
    //   risObj.push({key:line2})
    // }else{risObj.push({value:line2});}
console.log(line2)

});



})

//ris

ris2.split(/([^]*?\n)\n/).filter(items =>items != '').forEach((line,index)=>{
    json = {};
    line.split(/(.*\s*)-\s+/).forEach((line2,ind)=>{


        if(ind % 2 == 0){
            json['key'] = line2;
        }else{
            json['value'] = line2;
            arr[index].push({...json})
        }
});

console.log(arr)

})

//txt

txt.split(/([^]*?\n)\n/).filter(items =>items != '').map((line)=>line).forEach( (line)=>{


console.log(line.split(/(.*)*\s+([\n\w])/g))

}

)
