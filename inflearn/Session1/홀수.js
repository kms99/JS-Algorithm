function solution(array) {
  let sum = 0;
  const filterArray = array.filter((item) => item % 2 !== 0);
  filterArray.forEach((num) => (sum += num));
  console.log(Math.min(sum));
  console.log(Math.min(...filterArray));
}

solution([12, 77, 38, 41, 53, 92, 85]);
