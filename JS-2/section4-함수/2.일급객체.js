/* 일급객체
함수를 변수와 같이 다루는 언어에 있는 개념
자바스크립트의 함수도 일급 객체 함수는 기본적으로 객체 */

// ⭐️ 함수의 자료형
function addNumbers(a, b) { return a + b; }
console.log(typeof addNumbers);

// 일급 객체의 특성

// 상수 또는 변수에 할당될 수 있음
// 다른 함수에 인자로 전달될 수 있음
// 다른 함수의 결과값으로서 반환될 수 있음

//I. 할당
function isOddNum(number) {
  console.log(
    (number % 2 ? '홀' : '짝')
    + '수입니다.'
  );
  return number % 2 ? true : false;
};

const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의

let x = 7, y = 3;

let func1 = (a, b) => a + b;
let func2 = (a, b) => a - b;
console.log(func1(x, y), func2(x, y));
//함수도 객체와 배열처럼 참조타입

//객체와 배열의 값으로도 할당 가능
let person = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function (formal) {
    return formal
      ? '안녕하십니까. 홍길동 대리라고 합니다.'
      : '안녕하세요, 홍길동이라고 해요.';
  }
};

console.log(person.introduce(true));
console.log(person.introduce(false));

let arithmetics = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b
];

for (arm of arithmetics) {
  console.log(arm(5, 3));
}

// 객체의 함수 프로퍼티를 메서드 method라고 불렀음
// ES6부터는 메서드의 정의가 달라짐 - 이후 배울 단축 표현 메서드만 가리킴

// 객체에 함수 프로퍼티를 포함할 때 기억할 것
let person = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function () {
    return `저는 ${this.name}, ${this.age}살이고 `
    + `${this.married ? '기혼' : '미혼'}입니다.`;
  }
}

console.log(person.introduce());

// 💡 객체의 다른 프로퍼티에 접근: this 사용
// ⚠️ 객체 리터럴의 프로퍼티로는 this 사용하는 화살표 함수 권장하지 않음

// 화살표 함수로 바꾸고 실행해보기
// 자세한 내용은 이후 this 섹션에서 다룰 것

