function solution(s) {
  return s.length % 2 !== 0
    ? `${s[Math.floor(s.length / 2)]}`
    : `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
}
// 0 1 2 3 4
console.log(solution("study"));
console.log(solution("good"));
