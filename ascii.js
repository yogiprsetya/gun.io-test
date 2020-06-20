// Epigram on Failure

// Given the following quote by Alan Perlis

//     “Dealing with failure is easy: Work hard to improve. Success is also easy to
//     handle: You’ve solved the wrong problem. Work hard to improve.”

// Considering only the alphabetical characters, consonants having the value of
// their ASCII codes, and vowels having the inverse value of their ASCII codes,
// what is the sum of the sentence?

// Example:
// Using the phrase “why and how”, w=119, h=104, y=121, d=100, n=110. A and O are vowels, so a=-97 o=-111. The sum of ‘why and how’ = 569.


function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

function createSumAscii(str) {
    let asciiOut = [];
    let stringIn = str.replace(/\s/g, '');
    
    for(let i = 0; i < stringIn.length; i++) {
        if(isVowel(stringIn[i])) {
            asciiOut.push(-stringIn[i].charCodeAt());
        } else {
            asciiOut.push(stringIn[i].charCodeAt());
        }
        
    }
    
    return asciiOut.reduce((a, b) => a + b, 0);
}

createSumAscii('why and how');
