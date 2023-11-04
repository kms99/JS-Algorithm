function solution(num, array) {
  return array.reduce((acc, value) =>
    acc.length < value.length ? value : acc
  );
}

console.log(solution(5, ["teacher", "time", "student", "beautiful", "good"]));
