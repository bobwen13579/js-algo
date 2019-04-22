// f(n) = f(n - 2) + f(n - 1)
const fib = (num) => {
    if ( num < 3) return num;
  let first = 1;
  let second = 2;
  let n = 0;
  for (let i = 2; i < num; i ++) {
      n = first + second;
      first = second;
      second = n;
  }
  return n;
};

console.log(fib(4));