// Fibonacci

// The Fibonacci sequence begins like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// (each number is the sum of the previous two)

// What is the sum of all odd numbers in the Fibonacci sequence that are less than 10,000?


function sumOdd(num) {
    let fibs=[];
    
    for(let i=0 ; i < num ;i++) {
        if(i%2 !== 0) {
            fibs.push(i);   
        }
    }

    return fibs.reduce((a, b) => a + b, 0);
}
