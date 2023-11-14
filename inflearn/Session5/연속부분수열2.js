// function solution(n, m, arr) {
//   let p1 = 0;
//   let answer = 0;

//   while (p1 < n) {
//     let p2 = p1;
//     let sum = 0;

//     while (p2 < n) {
//       sum += arr[p2++];
//       if (sum <= m) answer++;
//       else break;
//     }

//     p1++;
//   }
//   return answer;
// }

// console.log(solution(5, 5, [1, 3, 1, 2, 3]));

function solution(n, m, arr) {
  let lt = 0;
  let answer = 0;
  let sum = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

console.log(solution(5, 5, [1, 3, 1, 2, 3]));
