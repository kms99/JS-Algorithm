// function solution(n, m, arr) {
//   let p1 = 0;
//   let result = 0;
//   while (p1 < n) {
//     let p2 = p1;
//     let initValue = m - arr[p1];
//     while (p2 < n) {
//       if (initValue === 0) {
//         result++;
//         break;
//       } else if (initValue < 0) break;

//       initValue -= arr[++p2];
//     }
//     p1++;
//   }

//   return result;
// }

// console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));

function solution(n, m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;

    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
