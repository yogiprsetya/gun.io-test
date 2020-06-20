// A palindrome is a word, number, phrase, or another sequence of characters which
// reads the same backward as forward, such as madam, racecar, or the number

// What is the sum of all numeric palindromes that are less than 10,000?


function isPalindrome(str) {
  let re = /[\W_]/g;
  let regStr = str.toString().replace(re, '');
  let reverseStr = regStr.split('').reverse().join(''); 
  return reverseStr === regStr;
}

function countPalindrome(total) {
    let counter = [];
    
    for (let i = 1; i <= total; i++) {
        isPalindrome(i) && counter.push(i)
    }
    
    return counter.reduce((a, b) => a + b, 0)
}
