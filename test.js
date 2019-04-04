const num = '205';
const [a, an, b ,bn] = '1 92 4 92'.split(' ').map(i => parseInt(i, 10));

const count = (num, a, an, b ,bn) => {
    let acount = 0;
    const res = [];
    while(acount * a < num){
        const bcount = (num - acount * a) / b;
        if (Number.isInteger(bcount)
            && acount <= an
            && bcount <= bn){
            res.push([acount, bcount]);
        }
        acount ++;
    }
    return res;
};

const Cnm = (n, m)=> {
    let sum = 1;
    let Amm = 1;
    while (m > 0) {
        sum *= (n - m +1);
        Amm *= m;
        m--;
    }
    return sum;
};

const res = () => {
    let sum = 0;
    const res = count(num, a, an, b ,bn);
    console.log(res);
    res.forEach(re => {
        const [ac, bc] = re;
        sum += Cnm(an, ac) * Cnm(bn, bc);
    });
    return sum;
};

console.log(res());