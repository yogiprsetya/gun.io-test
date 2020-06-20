// Legionaries

// In the range 1 - 13 (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13) the digit 1
// occurs 6 times.

// In the range, 1 - 2,660 (half the number of Romans in a legion), expressed in
// Roman numerals, how many times does the numeral “X” occur?

function convertToRoman(num) {
    let numIn = [];
    
    for (let i = 0; i < num.toString().length; i++) {
        numIn.push(Number(num.toString().substr(i, 1)));
    }
    
    var romanList = [
        ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["M"]
    ];
    
    let roman = numIn.reverse().map(function (val, i) {
        if (i === 3) {
            let r = "";
            
            for (let j = 0; j < val; j++) {
                r += romanList[i][0];
            }
            
            return r;
        } else {
            return romanList[i][val - 1];
        }
    });
    
    return roman.reverse().join('');
}

function countX(total) {
    let empt = [];
    let output = ''
    
    for (var i = 1; i <= total; i++) {
        empt.push(i);
    }
    
    empt.map(function (val, i) {
        output += convertToRoman(val);
    })
    
    return (output.match(new RegExp("X", "g")) || []).length
}
