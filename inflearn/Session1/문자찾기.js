function solution(s, c) {
  // # split 이용
  let answer = s.split(c);
  return answer.length - 1;

  // # 정규 표현식 이용
  //   const regex = new RegExp(`[${c}]`, "g");
  //   return s.match(regex).length;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
