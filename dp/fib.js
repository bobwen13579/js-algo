// f(n) = f(n - 2) + f(n - 1)
// 【0，1，1】

const fib = (num) => {
  const memo = [0,1,1]
  let a = 1;
  if ( num < 3) return num;
  for (let i = 3; i <= num; i ++) {
      memo[i] =memo[i -1] + memo[i -2]  
  }
  console.log(memo)
  return memo[num];
};

console.log(fib(4));