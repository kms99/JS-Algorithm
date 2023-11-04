function solution(n, aArray, bArray) {
  function rspGame(a, b) {
    // 가위 1 바위 2 보 3
    if (a === b) return "D";

    if (a === 1) {
      return b === 2 ? "B" : "A";
    } else if (a === 2) {
      return b === 1 ? "A" : "B";
    } else if (a === 3) {
      return b === 1 ? "B" : "A";
    }
  }
  for (let i = 0; i < n; i++) {
    console.log(rspGame(aArray[i], bArray[i]));
  }
}

solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
