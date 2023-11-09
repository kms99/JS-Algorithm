function solution(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const length_1 = arr1.length;
  const length_2 = arr2.length;
  let answer = [];

  while (length_1 > p1 && length_2 > p2) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }

  while (length_1 > p1) {
    answer.push(arr1[p1++]);
  }
  while (length_2 > p2) {
    answer.push(arr2[p2++]);
  }

  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
