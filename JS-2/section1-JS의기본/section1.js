// 자바스크립트의 기본적인 사용
console.log('Hello World!');

console.log('로그 - 기본적인 출력');
console.info('로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능');
console.warn('경고 - 문제가 될 수 있는 부분');
console.error('오류 - 에러 발생 상황');

// 값들을 주머니에 담아 사용하기
const SALUTATION = 'Hello,';
let person = '철수';

console.log(SALUTATION, person);

let x;
console.log(x);

//C 등의 언어와 달리, 메모리상 가리키는 위치가 변경

//기존 위치에 새 값을 넣는 것이 아님
//차지하는 자리가 다른 크기의(자료형이 다른) 데이터가 재할당될 수 있으므로

//이미 만들어진 주머니를 다시 만들(재선언) 수 없음
let x = 1;
console.log('첫 선언', x);

//let x = 2;
console.log('다시 선언', x);

const PI = 3.14;
console.log('원주율:', PI);