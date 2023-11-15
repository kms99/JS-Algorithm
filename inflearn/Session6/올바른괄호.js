const solution = (s) => {
  let stack = [];

  for (let i of s) {
    if (i === "(") stack.push(i);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  return stack.length !== 0 ? "NO" : "YES";
};

console.log(solution("(()()))"));
