function solution(arr) {
  let mountCount = 0;

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let ny = dy[k] + i;
        let nx = dx[k] + j;
        if (
          nx >= 0 &&
          nx < arr.length &&
          ny >= 0 &&
          ny < arr.length &&
          arr[ny][nx] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      flag ? mountCount++ : "";
    }
  }

  return mountCount;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
