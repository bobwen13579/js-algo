/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
board =
    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ];
var exist = function(board, word) {
    const wordMap = new Map();
    board.forEach(item => {
        item.forEach((i) => {
            if(wordMap.get(i)) wordMap.set(i, wordMap.get(i) + 1);
            else wordMap.set(i, 1);
        });
    });
    let isfind = true;
    for (let i = 0; i < word.length && isfind; i++) {
        const count = wordMap.get(word[i]);
        if(count) wordMap.set(word[i], count - 1);
        else isfind = false;
    }
    return isfind;
};
console.log(exist(board,'ABCB'));