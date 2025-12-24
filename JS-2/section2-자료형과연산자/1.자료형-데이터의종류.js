//1.자료형-데이터의종류

// 원시 자료형 primitive data types 
const a = true, b = 123.45, c = '안녕하세요!';

//typeof 연산자: 뒤에 오는 값의 자료형을 반환 return

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

//1.boolean
//2.number
//자바스크립트에는 정수와 실수의 구분이 없음 - 정수도 실수로 처리
let integer = 100;
let real = 12.34;
let negative = -  99;

console.log(integer, real, negative);
//3. 문자열 string
let first_name = "Brendan";
let last_name = 'Eich';
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);
//typeof의 반환값은 문자열

//4.undefined
let x;
console.log(typeof x);

//값이 부여되지 않은 상태라는 의미
//⭐️ 그러나 undefined도 값임 많은 다른 언어들과 다른 점

5.null
//의도적인 빈 값을 의미
//⭐️ 그러나 null 역시 값임. - "비어있다"란 의미의 값