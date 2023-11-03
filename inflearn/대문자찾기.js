function solution(s) {
  const rule = new RegExp(`[A-Z]`, "g");
  return s.match(rule).length;
}

console.log(solution("KoreaTimeGood"));
