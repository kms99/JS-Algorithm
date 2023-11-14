// 오름차순으로 정렬된 두 배열 입력
// 두 배열을 합쳐서 출력

const solution = (arr1, arr2) => {
  // 결과값을 담을 array 선언
  let answer = [];
  // 최초 포인터 초기화
  let point_1 = 0;
  let point_2 = 0;

  // 투포인터를 진행시킬 반복문
  // 각 포인터가 해당하는 배열의 크기보다 작을 경우에만 반복문 실행
  while (point_1 < arr1.length && point_2 < arr2.length) {
    // 포인터가 진행하면서 더 작은 배열의 원소를 결과 array에 push
    // push 후 해당 포인터는 +1 처리
    if (arr1[point_1] <= arr2[point_2]) answer.push(arr1[point_1++]);
    else answer.push(arr2[point_2++]);
  }

  // 남은 배열 처리
  // 포인터가 해당 배열의 크기보다 작은 것이 있다면
  //
  while (point_1 < arr1.length) answer.push(arr1[point_1++]);
  while (point_2 < arr2.length) answer.push(arr2[point_2++]);

  return answer;
};

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
