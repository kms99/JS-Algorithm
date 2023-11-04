function solution(arr) {
  let answerCount = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let last = arr.pop();
    Math.max(...arr) < last ? answerCount++ : "";
  }
  return answerCount;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
