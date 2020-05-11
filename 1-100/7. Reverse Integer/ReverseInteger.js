var reverse = function(x) {
    const charStr = Array.from(x.toString());
    const strArray = [];
    while (charStr.length) {
        const pop = charStr.pop();
        if (pop === '-') strArray.unshift('-');
        else if (pop === '0') {
            if ((charStr[0] && charStr[0] !== '-' )
                || (charStr[0] === '-' && charStr[1])) strArray.push(pop);
        }
        else strArray.push(pop);
    }
    let res = '';
    strArray.map((i) => res += i);
    res = res || 0;
    return parseInt(res, 10);
};

console.log(reverseInt(-12302000));
