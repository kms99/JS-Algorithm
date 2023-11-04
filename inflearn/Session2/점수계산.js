function solution(array) {
  let accCount = 0;
  let sum = 0;
  array.forEach((item) => {
    accCount = item === 0 ? 0 : accCount + 1;
    sum += accCount;
  });
  return sum;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
