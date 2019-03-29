var myAtoi = function(str) {
    let num = parseInt(str, 10);
    const max = Math.pow(2, 31);
    const min = -Math.pow(2, 31);
    num = num > max ? max : num;
    num = num < min ? min : num;
    console.log(num);
};
myAtoi('-91283472332');