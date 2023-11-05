function solution(s, t) {
  //   let result = Array.from({ length: s.length }, () => 200);

  //   const array = s.split("");
  //   let tIndex = [];
  //   array.forEach((item, index) => {
  //     if (item === t) tIndex.push(index);
  //   });

  //   tIndex.forEach((item) => {
  //     result = result.map((item2, index) => {
  //       return item2 < Math.abs(index - item) ? item2 : Math.abs(index - item);
  //     });
  //   });
  //   return result;
  let p = 1000;
  let answer = [];
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

console.log(solution("teachermode", "e"));
