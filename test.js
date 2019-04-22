const pos = [[1, 2],
    [2, 1],
    [1, 2],
    [0, 1],
    [0, 1],
    [1, 1]];
let csers = [];
// while(line = readline()){
//     const values = line.split(' ').map((i,index) => {
//         const value = parseInt(i, 10);
//         csers.push([pos.length - 1, index]);
//         return value;
//     });
//     pos.push(values);
// }
pos.forEach((line, i) => line.forEach((item, j)=> {
    if (item === 2) csers.push([i, j]);
}));

const map = new Array(pos.length).fill(new Array(pos[0].length || 0).fill(0));

const changePMtoCS = (pos) => {
    const height = pos.length;
    if (!height) return -1;
    let count = 0;
    while(csers.length) {
        console.log(csers);
        csers.forEach((item) => {
            const [i, j] = item;
            if (!map[i][j]) map[i][j] = 1;
            count++;
            csers = toCSer(item, pos, map);
        });
    }
    let isAllac = true;
    pos.forEach(line => line.map(i=> {
        if (i === 1) isAllac = false;
    }));
    if (!isAllac) return -1;
    return count;
};

const toCSer = ([i, j], pos, map) => {
    const ers = [];
    // 上下左右四个方向
    ers.push(...nexttrace(i - 1, j, pos, map));
    ers.push(...nexttrace(i + 1, j, pos, map));
    ers.push(...nexttrace(i, j -1, pos, map));
    ers.push(...nexttrace(i, j + 1, pos, map));
    console.log(ers);
    return ers;
};

const nexttrace = (i, j, pos, map) => {
    const height = pos.length;
    const width = pos[0].length;
    const peoples = [];
    if ( i >= 0 && i < height && j >= 0 && j < width && !map[i][j]) {
        map[i][j] = 1;
        if (pos[i][j]) {
            pos[i][j] = 2;
            peoples.push([i, j]);
        }
    }
    return peoples;
};
console.log(changePMtoCS(pos));