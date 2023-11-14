// N개의 수로 이루어진 수열
// 수열 내에서 연속부분수열의 합이 특정 M이 되는 경우

const solution = (m, arr) => {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;

    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
