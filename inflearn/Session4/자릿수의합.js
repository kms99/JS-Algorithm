function solution(arr) {
  let max = arr[0];
  arr.reduce((acc, value) => {
    // let sum = 0;
    // let countValue = value;
    // while (countValue) {
    //   sum += countValue % 10;
    //   countValue = Math.floor(countValue / 10);
    // }

    let sum = value
      .toString()
      .split("")
      .reduce((acc, value) => acc + parseInt(value), 0);

    if (acc > sum) {
      return acc;
    } else if (acc === sum) {
      max = max > value ? max : value;
      return acc;
    } else {
      max = value;
      return sum;
    }
  }, 0);

  return max;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
