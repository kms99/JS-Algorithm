function solution(arr) {
  const reversArr = arr
    .map((item) => parseInt(item.toString().split("").reverse().join("")))
    .filter((num) => {
      if (num === 1) return false;
      for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
  return reversArr;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
