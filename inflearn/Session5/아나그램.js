function solution(s1, s2) {
  let answer = "YES";
  const hash = new Map();

  s1.split("").forEach((i) => hash.set(i, hash.has(i) ? hash.get(i) + 1 : 1));
  s2.split("").forEach((i) => hash.set(i, hash.has(i) ? hash.get(i) - 1 : -1));

  for (let value of hash.values()) {
    if (value !== 0) {
      answer = "NO";
      break;
    }
  }
  // s1 = s1.split("").sort().join();
  // s2 = s2.split("").sort().join();
  // if (s1 !== s2) answer = "NO";

  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
