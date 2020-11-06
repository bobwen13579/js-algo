/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    const map = Array(n).fill([...Array(m).fill(1)]);
    for(let i = 1; i < n; i++ ) {
        for(let j = 0; j < m; j++ ) {
            map[i][j] = map[i - 1][j] + (map[i][j - 1] ? map[i][j - 1] : 0)
        }
    }
    // console.log(map[n-1][m-1])
    return map[n-1][m-1]
};

uniquePaths(7,3)