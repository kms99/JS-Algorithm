function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      answer += s[i].toLowerCase();
    } else {
      answer += s[i].toUpperCase();
    }
  }

  return answer;
}

console.log(solution("StuDY"));
