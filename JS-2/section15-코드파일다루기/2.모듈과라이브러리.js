//⭐ 페이지에 자바스크립트 파일 여럿을 로드할 때 문제점들

// 1. 네임스페이스 문제

< !DOCTYPE html >
  <html lang="ko">
    <head>
      <title>제대로 파는 자바스크립트</title>
      <script defer src="./script1.js"></script>
      <script defer src="./script2.js"></script>
    </head>
    <body>
    </body>
  </html>

  //만약 x가 둘 다 에서 정의되어있다면
//   같은 상수나 변수명이 둘 이상의 파일에서 사용되었으므로 오류 발생
// 다른 파일에 상수 / 변수명이나 함수명이 중복 사용되지 않았는지 확인해야 함
// 규모가 큰 웹페이지를 분업하여 만들 때 특히 큰 어려움

//2. 파일의 순서 문제

<!DOCTYPE html >
  <html lang="ko">
    <head>
      <title>제대로 파는 자바스크립트</title>
      <script src="./script1.js"></script>
      <script src="./script2.js"></script>
    </head>
    <body>
    </body>
  </html>

//   다른 파일의 코드가 필요할 경우 순서에 의존적임
// 한 파일의 코드가 다른 파일의 변수에 영향을 미칠 수 있음 - 오류 위험
// 결국 큰.js 파일 하나를 나눠 작성하는 것에 불과


//모듈 사용하기
//1.기본 사용법
<!DOCTYPE html >
  <html lang="ko">
    <head>
      <title>제대로 파는 자바스크립트</title>

      <!-- 💡 모듈로서 로드 -->
      <script type="module" src="./main.js"></script>
    </head>
    <body>
      <script>
        console.log('모듈은 defer 방식으로 로드됩니다.');
      </script>
    </body>
  </html>

  //모듈로서 로드할 파일에는 type="module" 속성을 넣어줌
// ⭐ 모듈은 자동으로 defer로 로드됨
// ⭐ 실행코드가 들어있는 파일만 로드하면 됨


//  export
export const x = 1;
export const y = 2;

export const person = {
  name: '홍길동',
  age: 20
} 
// 따라오는 식별자를 다른 모듈에서 사용할 수 있도록 공개함
// 상수, 변수, 함수, 클래스 모두 export 가능


import { x, y, person } from './module1.js';

console.log(x, y);
console.log(person);
//⭐ import

// 타 모듈에서 공개한 식별자를 자신의 스코프로 로드
// 모듈의 요소들을 객체 디스트럭쳐링 방식으로 가져올 수 있음

import {
  x as a,
  y as b,
  person as individual
} from './module1.js';

console.log(a, b);
console.log(individual);

//💡 위와 같이 원하는 이름으로 바꾸어 가져올 수 있음 - 식별자 중복 방지


//2. 여러 모듈들을 가져와 사용하기
// 💡 필요한 것만 선별하여 가져오기
import { x, y } from './module1.js';
import { add, mult } from './module2.js';
import { Eagle } from './module3.js';

console.log(
  add(x, y), mult(x, y)
);

const eagle = new Eagle('독돌이', '푸드덕', '토끼');
eagle.hunt();

//3. 하나의 모듈 객체로 묶어서 가져오기
import * as funcs from './module4.js';

// 💡 로그 살펴볼 것!
console.log(funcs);

funcs.logResult(
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
    .filter(funcs.isOdd)
    .map(funcs.square)
    .join(', ')
);

//4. 이름없는 하나의 값으로 반환하기
// 💡 default를 사용하면 let, const 사용 불가
export default {
  x: 1,
  arry: [1, 2, 3, 4, 5],
  obj: {
    a: true,
    b: false
  },
  isEven: x => !(x % 2),
};
// 한 모듈에서 하나만 사용 가능
// 일반적으로 특정 주제의 기능들을 하나의 객체로 담아 공개

//default로 공개된 것을 import할 때는 {}로 감싸지 않음

// 5.⭐ 모듈에서는 await을 바로 사용 가능
const raceResults = await fetch(
  'https://showcases.yalco.kr/javascript/mockserver/race-result'
)
  .then(response => response.json())

console.log(raceResults);

//6. Node.js에서 모듈 사용
// ⭐ package.json의 객체에 아래의 type 항목 추가
{
  "type": "module"
}

// 외부 라이브러리 로드
//big.js
import Big from 'https://unpkg.com/big.js@6.2.1/big.mjs';

console.log(Big);
//부동소수점 계산에 사용
console.log(
  0.1 + 0.2,
  new Big(0.1).plus(0.2).toNumber()
);

console.log(
  0.2 * 0.7,
  new Big(0.2).times(0.7).toNumber(),
);

console.log(
  0.9 - 0.6,
  new Big(0.9).minus(0.6).toNumber()
);