//유효하지 않을 수 있는 참조에 의한 문제들

// 🌐 네트워크 요청 등, 어떤 값이 들어올지 모르는 상황에서 ⚠️ 에러가 발생하는 상황들

// undefined로부터 값에 접근할 때
let undefObj;
console.log(undefObj.x);
// null부터 값에 접근할 때
let nullObj = null;
console.log(nullObj.x);
// 무효한 배열에 접근할 때
let undefArry;
console.log(undefArry[1]);
// 존재하지 않는 함수를 호출할 때
let noFunc = {}
noFunc.func();

//다음과 같은 상황에서 에러를 피하려면?
// 최소 undefined 최대 {prop1:{prop2:{prop3:'성공!'}}} 까지 반환하는 함수
const rand = () => Math.random() < 0.75;

const notSure = () => rand() ? {
  prop1: rand() ? {
    prop2: rand() ? {
      prop3: rand() ? '성공!' : undefined
    } : undefined
  } : undefined
} : undefined;

// 방법 1
const result = notSure();

if (result) {
  if (result.prop1) {
    if (result.prop1.prop2) {
      console.log(result.prop1.prop2.prop3);
    }
  }
}
// 방법 2
const result = notSure();

console.log(
  result
  && result.prop1
  && result.prop1.prop2
  && result.prop1.prop2.prop3
);

// 방법 3
const result = notSure();

try {
  console.log(result.prop1.prop2.prop3);
} catch {
  console.log(undefined);
}


// ?.- 옵셔널 체이닝 optional chaining 연산자

// 호출 대상이 undefined나 null이어도 오류를 발생시키지 않음 - 대신 undefined 반환
// 있을지 없을지 모르는 것으로부터 값을 읽거나 실행할 때 사용

let undef=undefined;

console.log(
  undef?.x,
  undef?.['x'],
  undef?.[1],
  {}.func?.()
);

// 옵셔널 체이닝을 사용한 방법
const result = notSure();

console.log(
  result?.prop1?.prop2?.prop3
);

const objs = [
  { func() { console.log(1) } },
  {},
  { func() { console.log(2) } },
  {},
  { func() { console.log(3) } },
]

objs.forEach(o => o.func?.());