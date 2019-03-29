var intToRoman = function(num) {
    const chars = [['I', 'V'], ['X', 'L'],['C', 'D'], ['M'] ];
    const numstrs = num.toString();
    const { length } = numstrs;
    let i = 0;
    const roman = [];
    while (i < length) {
        console.log(numstrs[i]);
        const [next] = chars[length - i] || [''];
        roman.push(intToRomanChar(numstrs[i],...chars[length - i - 1], next));
        i += 1;
    }
    return roman.join('');
};

const intToRomanChar = (numstr, small, big, next) => {
    const chars = [];
    console.log(small, big, next);
    let num = numstr * 1;
    if (num > 8 && next) {
        chars.push(small,next);
        num -= 9;
    }
    if (num > 4) {
        chars.push(big);
        num -= 5;
    }
    if ( num > 3) {
        chars.push(small, big);
        num -= 4;
    }
    if (0 < num < 4) {
        chars.push(... new Array(num).fill(small));
    }
    return chars.join('');
};

console.log(intToRoman(1994));