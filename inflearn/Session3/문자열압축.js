function solution(s) {
  s = s + " ";
  const length = s.length;
  let currentChar = "";
  let count = 1;
  let result = "";

  for (let i = 0; i < length; i++) {
    // if (i !== length - 1) {
    //   if (currentChar !== s[i]) {
    //     result += count !== 1 ? `${currentChar}${count}` : `${currentChar}`;
    //     currentChar = s[i];
    //     count = 1;
    //   } else {
    //     count++;
    //   }
    // } else {
    //   if (currentChar !== s[i]) {
    //     result += count !== 1 ? `${currentChar}${count}` : `${currentChar}`;
    //     currentChar = s[i];
    //     result += `${currentChar}`;
    //   } else {
    //     count++;
    //     result += `${currentChar}${count}`;
    //   }
    // }
    if (currentChar !== s[i]) {
      result += count !== 1 ? `${currentChar}${count}` : `${currentChar}`;
      currentChar = s[i];
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}

console.log(solution("KKHSSSSSSSE"));
