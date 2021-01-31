//just to heads up ,prime numbers are the base of encryption so then ,make sure you're not anything from this lesson
function primeFactors(n){
    while( n%2 == 0 ){
        console.log(2);
        n = n/2;
    }
    //tracking factors of the odd numbers ,to do that we start iterating from 3 by stepping 2 each time
    for(var i = 3; i * i <= n ; i = i+2){
        //while i divides n ,print i and divid n 
        while(n%i == 0){
            console.log(i);
            n =n/i;
        }
    }

    //to handle prime numbers greater than 2 
    if(n > 2){
        console.log(n)
    }
}