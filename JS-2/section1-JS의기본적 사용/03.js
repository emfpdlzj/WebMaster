//03.변수와 상수 - 데이터를 담는 주머니

//var은 이제 사용안함.

//1.데이터를 담는 곳
const SALUTATION = 'hello';
let person = 'jisu';

console.log(SALUTATION, person);

person = 'lena';
console.log(SALUTATION, person);

//변수는 담긴 값이 바뀔 수 있는 주머니, let 사용

//1.x란 변수를 선언만 한 뒤 값을 넣음

let x;
console.log(x);
//undefined 출력

x=1;
console.log(x);

//2.변수 선언과 값 넣기 동시에 (초기화 - 일반적 사용)
let y=1;
console.log(y);

//3. 다른 변수가 같은 값을 가질 때

//4. x에 1을 넣은 뒤 값을 'Hello!'로 변경
//C 등의 언어와 달리, 메모리상 가리키는 위치가 변경

//5. 이미 만들어진 주머니를 다시 만들(재선언) 수 없음

//6. 선언하기 전 코드를 사용할 수는 없음

//III. 상수 constant.
//바뀐 값이 바뀔 수 없음. 

//선언과 동시에 초기화, 선언만 하는것 불가, 값의 변경 불가
const PI=3.14;
console.log('PI: ',PI);

//식별자: 상수와 변수 등의 이름
//에약어/한글변수/상수명..