//엄격 모드 strict mode
// 기존의 느슨한 모드에서 허용되던, 문제를 유발할 수 있는 코드들에 오류를 발생시킴

// ⚠️ 새로고침 후 실행해볼 것
// 선언되지 않은 변수 사용 금지
'use strict'; // 쌍따옴표도 가능

notDeclared = 1; // 오류 발생!

//위와 같이 자바스크립트 문서 최상단에 작성 - 문서 전체에 적용
// 문서, script 태그별로만 적용 - 여러.js파일이 페이지에 사용될 시 각각 작성해야 함


// 특정 함수의 최상단에 작성 - 해당 함수에만 적용
notDec1 = 1;

function strictFunc() {
  'use strict';

  notDec2 = 2;
  console.log(notDec2);
}

console.log(notDec1);
strictFunc();

//변수, 함수, 인자 등 삭제불가한 것을 삭제시 오류 발생
'use strict';

let toDelete2 = 1;
delete toDelete2;

// 3. 인자명 중복시 오류 발생
// 'use strict';

function add(x, x) {
  return x + x;
}

console.log(add(1, 2));


// 실무에서의 엄격 모드

// 클래스나 모듈(등 ES6와 그 이후의 기능들) 사용시 엄격 모드가 기본으로 적용됨
// 🪄 모든 문제를 방지하는 수단이 되지 않음 기억
// ⚠️ 기존 코드에 엄격모드 적용시 주의 - 예기치 못한 오류 발생 가능
