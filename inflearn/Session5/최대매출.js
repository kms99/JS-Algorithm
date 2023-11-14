// N일동안 매출기록을 주고 연속된 K일 동안 최대 매출액 구하기
// ex) N=10 10일간 매출기록 [12 15 11 20 25 10 20 19 13 15]
//     k=3 연속 3일간 최대 매출액 => 11 20 25 => 56

// 중첩반복문 사용
function solution(n, k, arr) {
  let answer = 0;
  let lt = 0;
  while (lt < n - k) {
    let sum = 0;
    for (let rt = lt; rt < lt + k; rt++) {
      sum += arr[rt];
    }
    if (sum > answer) answer = sum;
    lt++;
  }
  return answer;
}
console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Sliding Window 사용
// function solution(n, k, arr) {
//   // 최초 윈도우 설정
//   // 일정한 크기 k
//   let sum = 0;
//   for (let i = 0; i < k; i++) sum += arr[i];

//   // 최대 매출액을 구하기 위한 answer
//   let answer = sum;

//   for (let i = k; i < n; i++) {
//     sum += arr[i] - arr[i - k];
//     if (answer < sum) answer = sum;
//   }

//   return answer;
// }

// console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
