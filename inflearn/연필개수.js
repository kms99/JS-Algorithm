function solution(userNum) {
  //   let das = Math.floor(userNum / 12) + (userNum % 12 ? 1 : 0);

  let das = Math.ceil(userNum / 12);
  return das;
}

console.log(solution(25));
console.log(solution(178));
