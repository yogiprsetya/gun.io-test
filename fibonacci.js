// Fibonacci

// The Fibonacci sequence begins like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// (each number is the sum of the previous two)

// What is the sum of all odd numbers in the Fibonacci sequence that are less than 10,000?


function sumOdd(num) {
    var oddNum = [];
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    
    for (let i = 2; fib[i - 2] + fib[i - 1] <= num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    
    fib.map(function (val, i) {
        if(val%2 !== 0) {
            oddNum.push(val);   
        }
    })

    return oddNum.reduce((a, b) => a + b, 0);
}
