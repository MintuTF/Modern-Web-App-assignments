const fib= function(number) {
    if(number<0)
       number=-1*number;
    if (number <= 2) {
    return 1;
    } else {
    return fib(number-1) + fib(number-2);
    } } ;
    console.log("Fibonacci of 25 is "+ fib(25));
    console.log("Fibonacci of -25 is "+ fib(-25));