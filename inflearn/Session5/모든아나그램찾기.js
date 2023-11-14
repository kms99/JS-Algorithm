function solution(s, t) {
  // 부분문자열
  // t와 아나그램을 이루는 수 (숫자가 정해짐) => 슬라이딩윈도우
  // 아나그램 => 해쉬

  const initMap = new Map();

  let answer = 1;
  for (let i of t) initMap.set(i, initMap.has(i) ? initMap.get(i) + 1 : 1);

  // sliding window 초기 세팅
  const windowLength = t.length;
  const windowMap = new Map();
  for (let i = 0; i < windowLength; i++)
    windowMap.set(s[i], windowMap.has(s[i]) ? windowMap.get(s[i]) + 1 : 1);
  for (const [key, v] of windowMap.entries()) {
    if (v !== initMap.get(key)) {
      answer--;
      break;
    }
  }

  outer: for (let i = 1; i <= s.length - windowLength; i++) {
    windowMap.get(s[i - 1]) - 1 === 0
      ? windowMap.delete(s[i - 1])
      : windowMap.set(s[i - 1], windowMap.get(s[i - 1]) - 1);

    windowMap.set(
      s[i + windowLength - 1],
      windowMap.has(s[i + windowLength - 1])
        ? windowMap.get(s[i + windowLength - 1]) + 1
        : 1
    );
    console.log(initMap);
    for (const [key, v] of windowMap.entries()) {
      if (v !== initMap.get(key)) continue outer;
    }

    answer++;
  }

  return answer;
}

console.log(solution("bacaAacba", "abc"));
