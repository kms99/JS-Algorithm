function solution(a, b, c) {
  let max;
  let sum = a + b + c;
  // 가장 긴 막대 구하기
  if (a > b) max = a;
  else max = b;
  if (max < c) max = c;

  if (max >= sum - max) return "NO";
  else return "YES";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
