/**
 * @param {number} n
 * @return {string[][]}
 */

const solveNQueens = function (n) {
  const edges = Array(n)
    .fill()
    .map((_) => Array(n).fill(0));
  const res = [];
  backtrack(n, edges, 0, res);
  return res;
};

// 树的节点决策
const backtrack = (width, edges, y, res) => {
  // 遍历到终点
  if (y === width) {
    res.push(edges.map((edge) => edge.map((e) => (e ? 'Q' : '.')).join('')));
    return;
  }
  // 子节点遍历
  for (let x = 0; x < width; x++) {
    //判定条件
    if (isValid(edges, y, x)) {
      edges[y][x] = 1;
      backtrack(width, edges, y + 1, res);
      // 会退到上一个节点做决策
      edges[y][x] = 0;
    }
  }
};

const isValid = (edges, y, x) => {
  const width = edges.length;
  // 列
  for (let i = 0; i < width; i++) {
    if (edges[i][x]) return false;
  }
  // 右上角
  for (let i = y - 1, j = x + 1; i >= 0 && j < width; i--, j++) {
    if (edges[i][j]) return false;
  }
  // 左上角
  for (let i = y - 1, j = x - 1; i >= 0 && j >= 0; i--, j--) {
    if (edges[i][j]) return false;
  }
  return true;
};

console.log(solveNQueens(4));
