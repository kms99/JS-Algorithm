// 6월 1일부터 차량 10부제
// 번호판 일의자리수와 날짜의 일의자리수가 일치하면 자동차 운행 금지
// 입력 1 : 날짜의 일의자리 수
// 입력 2 : 운행하고 있는 7대의 자동차 끝 번호판 2자리
// 출력 : 위반 차량 수

function solution(day, cars) {
  const answer = cars.filter((car) => (car - day) % 10 === 0);

  return answer.length;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
