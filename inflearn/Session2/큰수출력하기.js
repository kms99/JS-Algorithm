function solution(n, array) {
  const result = array.filter((num, index) => {
    return index !== 0 ? array[index - 1] < num : true;
  });
  return result;
}

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
