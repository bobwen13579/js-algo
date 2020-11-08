/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    const map = Array(m).fill(1);
    for(let i = 1; i < n; i++ ) {
        for(let j = 0; j < m; j++ ) {
            let left = 0;
            if (j - 1 >= 0) left = map[j - 1]
            map[j] = map[j] + left;
        }
    }
    return map[m-1]
};

console.log(uniquePaths(7,3))