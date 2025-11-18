I.연산자

1. 부정 연산자

2. AND / OR 연산자

a. && - AND : 양쪽 모두 true 여부 반환
b. || - OR : 한 쪽이라도 true 여부 반환

단축평가 short circuit

  && : 앞의 것이 false면 뒤의 것을 평가할 필요 없음
    || : 앞의 것이 true면 뒤의 것을 평가할 필요 없음
평가는 곧 실행 - 이 점을 이용한 간결한 코드
💡 연산 부하가 적은 코드를 앞에 - 리소스 절약

3. 삼항연산자 - ~ ? ~ : ~

  II.Truthy vs Falsy

true 또는 false로 평가되는 값들

👉 Truthy 목록(MDN)
👉 Falsy 목록(MDN)
1. Truthy
console.log(
  1.23 ? true : false,
  -999 ? true : false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
);

// ⚠️ true와 `같다`는 의미는 아님
console.log(
  1.23 == true,
  ' ' == true,
  {} == true
);

//2. Falsy
console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
);
// 💡 어떤 값들은 false로 타입변환됨
console.log(
  0 == false,
  0 === false,
  '' == false,
  '' === false
);
console.log(
  null == false,
  undefined == false,
  NaN == false,
);

x = x || '단기알바';
y = y || '단기알바';

console.log(x, y);

//boolean으로 직접변환
// 한 번 부정
console.log(
  !1, !-999, !'hello',
  !0, !'', !null
);

// ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(
  !!1, !!-999, !!'hello',
  !!0, !!'', !!null
);