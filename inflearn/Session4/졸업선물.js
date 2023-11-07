// 졸업선문
//상품 하나 50% 할인
// 입력1 n:학생수 / m : 예산
// 입력2 1번쨰 학생 상품가격 6, 배송비 6
// 입력3 2번쨰 학생 상품가격 2, 배송비 2 ...

function solution(m, arr) {
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let caseAll = [];

  for (let i = 0; i < m[0]; i++) {
    let cost = m[1] - (arr[i][0] / 2 + arr[i][1]);
    let count = 1;
    for (let j = 0; j < m[0]; j++) {
      if (i === j) continue;

      if (cost - (arr[j][0] + arr[j][1]) >= 0) {
        cost -= arr[j][0] + arr[j][1];
        count++;
      } else {
        break;
      }
    }
    caseAll.push(count);
  }
  return Math.max(...caseAll);
}

console.log(
  solution(
    [5, 28],
    [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ]
  )
);
