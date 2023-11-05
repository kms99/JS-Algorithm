function solution(s) {
  const reg = new RegExp("[0-9]", "g");
  return parseInt(s.match(reg).join(""));
}

console.log(solution("g0en2T0s8eSoft"));
