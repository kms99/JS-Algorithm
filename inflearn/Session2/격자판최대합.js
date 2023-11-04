function solution(arr) {
  const length = arr.length;
  let max = 0;

  // 1. 가로/세로 최댓값
  let sum_1 = 0;
  let sum_2 = 0;
  for (let i = 0; i < length; i++) {
    sum_1 = 0;
    sum_2 = 0;
    for (let j = 0; j < length; j++) {
      sum_1 += arr[i][j];
      sum_2 += arr[j][i];
    }
    max = Math.max(max, sum_1, sum_2);
  }

  // 2. 대각선
  let cross_1 = 0;
  let cross_2 = 0;

  for (let i = 0; i < length; i++) {
    // 좌상-우하
    cross_1 += arr[i][i];
    // 우상-좌하
    cross_2 += arr[i][length - 1 - i];
  }
  max = Math.max(max, cross_1, cross_2);

  // 3. 최댓값
  return max;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
