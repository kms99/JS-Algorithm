// 멘토링
// 입력1 : N학생수 M테스트수
// 입력2 : M개의 테스트 결과

function solution(n, m, arr) {
  let answer = 0;
  function checkMento(a, b) {
    for (let i = 0; i < m; i++) {
      let mentoIndex = 0;
      let mentiIndex = 0;

      for (let j = 0; j < n; j++) {
        if (a === arr[i][j]) mentoIndex = j;
        if (b === arr[i][j]) mentiIndex = j;
      }
      if (mentoIndex > mentiIndex) {
        return;
      }
    }
    console.log(a, b);
    answer++;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      else {
        checkMento(i + 1, j + 1);
      }
    }
  }
  return answer;
}

console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
