function solution(arr) {
  let sortArr = [...arr];
  sortArr.sort((a, b) => {
    return b - a;
  });
  const answer = arr.map((item) => {
    return sortArr.indexOf(item) + 1;
  });
  console.log(answer);
}

solution([87, 89, 89, 92, 100, 76]);
