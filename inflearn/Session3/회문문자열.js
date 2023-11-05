function solution(s) {
  const sUpper = s.toUpperCase();
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (sUpper[i] !== sUpper[s.length - 1 - i]) {
      return "NO";
    }
  }
  return "YES";
}

console.log(solution("gooG"));
