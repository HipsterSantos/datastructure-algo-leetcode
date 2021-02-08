function primeFactors(n){
   while( n%2 == 0){
     console.log(2);
     n /= 2;
   }

   //tracking all odd numbers by skipping one element
   for(var i =3 ; i*i <= n ; i = i+2){
     while(n % i ==0 ){
       console.log(i);
       n  = n /i;
     }
   }
   if(n > 2){
     console.log(n);
   }

}
