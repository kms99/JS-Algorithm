function solution(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let length1 = arr1.length;
  let length2 = arr2.length;
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < length1 && p2 < length2) {
    if (arr1[p1] > arr2[p2]) p2++;
    else if (arr2[p2] > arr1[p1]) p1++;
    else {
      answer.push(arr1[p1++]);
      p2++;
    }
  }
  return answer;
}
console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
