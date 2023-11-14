const solution = (m, arr) => {
  let lt = 0;
  let answer = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    if (sum <= m) answer++;

    while (lt > m) {
      sum -= arr[lt++];
    }
    if (sum <= m) answer++;
  }
  return answer;
};

console.log(solution(5, [1, 3, 1, 2, 3]));
