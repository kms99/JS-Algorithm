function solution(s) {
  s = s.toUpperCase();
  const reg = new RegExp(`[A-Z]`, "g");
  const filter = s.match(reg);
  return filter.join("") === filter.reverse().join("") ? "YES" : "NO";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
