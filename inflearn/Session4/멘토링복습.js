function solution(n, m, arr) {
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // (멘토 : i)
    mentorCheck: for (let j = 1; j < n + 1; j++) {
      // (멘토: i / 멘티: j )
      if (i === j) continue;
      for (let a = 0; a < m; a++) {
        // (멘토 :i/ 멘토:j) a번쨰 시험
        let i_th = 0;
        let j_th = 0;
        for (let b = 0; b < n; b++) {
          // a번째 시험 i 등수 : i_th / j 등수 : j_th
          if (arr[a][b] === i) i_th = b;
          if (arr[a][b] === j) j_th = b;
        }
        if (i_th > j_th) continue mentorCheck;
      }
      count++;
    }
  }
  return count;
}

console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
