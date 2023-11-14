function solution(n, s) {
  let resultMap = new Map();
  s.split("").forEach((item) => {
    resultMap.has(item)
      ? resultMap.set(item, resultMap.get(item) + 1)
      : resultMap.set(item, 1);
  });
  let max = 0;
  let answer;
  for (let [key, value] of resultMap) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

console.log(solution(15, "BACBACCACCBDEDE"));
