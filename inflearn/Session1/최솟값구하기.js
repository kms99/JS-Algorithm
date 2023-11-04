function solution(numArray) {
  //1
  //   let answer = Math.min(...numArray);
  //   return answer;

  //2
  //   let answer = Math.min.apply(null,numArray);
  //   return answer;

  //3
  let minNum = numArray[0];
  numArray.forEach((num) => (minNum > num ? (minNum = num) : ""));

  return minNum;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
