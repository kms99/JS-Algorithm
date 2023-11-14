const solution = (arr1, arr2) => {
  // 결과 값을 담을 array 선언
  let answer = [];
  // 결과값이 오름차순으로 정렬된 결과이기 때문에 사전에 sorting
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  // 배열 포인터 초기화
  let point_1 = 0;
  let point_2 = 0;

  // 포인터 로직
  // 각 포인트가 해당하는 배열의 길이보다 짧을 때 돌아감
  while (point_1 < arr1.length && point_2 < arr2.length) {
    // 두 배열의 원소값이 같을 때
    // 공통된 원소이기 때문에 결과 array에 담고, 각 포인터를 증가
    if (arr1[point_1] === arr2[point_2]) {
      answer.push(arr1[point_1++]);
      point_2++;
      continue;
    }
    // 둘중 원소가 작은 것 배열은 포인터를 증가시킨다.
    else if (arr1[point_1] < arr2[point_2]) point_1++;
    else point_2++;
  }

  return answer;
};

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
