function solution(n, k, arr) {
  //   const allCase = [];
  const allCase = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        // if (allCase.includes(arr[i] + arr[j] + arr[k])) continue;
        allCase.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  const answerArray = [...allCase];
  answerArray.sort((a, b) => b - a);
  return [...answerArray][k - 1];
}

const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
