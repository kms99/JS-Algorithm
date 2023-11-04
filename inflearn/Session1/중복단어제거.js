function solution(n, sArray) {
  let result = [];
  sArray.forEach((s) => (result.includes(s) ? "" : result.push(s)));
  return result;
}

console.log(solution(5, ["good", "time", "good", "time", "student"]));
