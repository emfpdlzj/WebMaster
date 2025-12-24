
// 각 값에 적합한 래핑함수로 작용
console.log(
  new Object(1),
  new Object('ABC'),
  new Object(true),
  new Object([1, 2, 3])
);

//assign - 인자로 주어진 객체(들)의 프로퍼티들을 대상 객체에 붙여넣음
const intro1 = { name : 'aaa'};
const intro2 = {...intro1};
console.log(intro1, intro2);

const personal = {
  age: 25,
  married: false
};
const career = {
  job: '개발자',
  position: '팀장'
}

Object.assign(intro1, personal);
console.log(intro1);
// 둘 이상의 원본에서 가져올 수도 있음
Object.assign(intro2, personal, career);
console.log(intro2);

//프로퍼티의 키가 같을 경우 뒤에 오는 인자의 것이 덮어씀
//얕은복사

//keys, values, entries - 객체의 키 / 값 / [키, 값]을 배열로 반환

const obj={x:1, y:2, z:3};
console.log(Object.keys(obj));
console.log(
  Object.values(obj),
);
console.log(
  Object.entries(obj),
);

console.log(
  Object
    .keys(globalThis)
    .sort()
);

// 배열에 사용할 경우
const arr = [1, 2, 3, 4, 5];

console.log(
  Object.keys(arr),
  Object.values(arr),
  Object.entries(arr)
);

// 객체가 아닐 경우 객체로 변환
const str = 'ABCDEFG';

console.log(
  Object.keys(str),
  Object.values(str),
  Object.entries(str)
);

//preventExtensions - 프로퍼티 추가 금지
Object.preventExtensions(obj);

console.log(Object.isExtensible(obj));

//seal - 프로퍼티 추가와 삭제 금지
//freeze - 객체 동결 - 읽기만 가능