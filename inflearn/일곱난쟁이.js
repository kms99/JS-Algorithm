function solution(arr) {
  // 7난쟁이가 아닌 9명이 있는상황
  // 전체 난쟁이의 키는 100
  const length = arr.length;
  const sum = arr.reduce((acc, value) => acc + value);
  const target = sum - 100;

  // 2중 반복분 종료 시
  // 종료하고자하는 외부 for문에 label 지정
  // break 뒤에 라벨명 명시
  // >> 해당 스코프 종료
  first: for (let i = 0; i < length - 1; i++) {
    const matchValue = target - arr[i];
    for (let j = i + 1; j < length; j++) {
      if (matchValue === arr[j]) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        break first;
      }
    }
  }

  return arr;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
