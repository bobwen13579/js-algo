const twoarray = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];

const find = (array, num) => {
    const [first] = array;
    if (!(first && first.length)) return false;
    const width = first.length;
    const height = array.length;
    let i = 0;
    let j = width -1;
    while (i < height || j >= 0) {
        if (array[i][j] > num) j --;
        else i ++;
        if (array[i][j] === num) return true;
    }
    return false;
};

console.log(find(twoarray, 7));