//JSON JavaScript Object Notation
//복잡한 구조를 가질 수 있는 데이터를 한 줄의 문자열로 표현

//stringify - 객체를 문자열로 직렬화 serialize
const person = {
  name: '김달순',
  age: 23,
  languages: ['Korean', 'English', 'French'],
  education: {
    school: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    graduated: true,
  }
};

const personStr = JSON.stringify(person);

console.log(typeof personStr);
console.log(personStr);

[
  JSON.stringify(1),
  JSON.stringify(Infinity), // ⚠️
  JSON.stringify(NaN), // ⚠️
  JSON.stringify('가나다'),
  JSON.stringify(true),
  JSON.stringify(null),
  JSON.stringify(undefined),
  JSON.stringify([1, 2, 3]),
  JSON.stringify({ x: 1, y: 2 }),
  JSON.stringify(new Date()), // ⚠️
]
  .forEach(i => console.log(i));

//값이 함수인 프로퍼티는 직렬화되지 않음

//2번째 인자: replacer 함수
//직렬화될 방식을 지정
const obj = {
  a: 1,
  b: '2',
  c: 3,
  d: true,
  e: false
}

// 1. key와 value 매개변수
const objStr1 = JSON.stringify(obj, (key, value) => {
  if (key && key < 'a' || key > 'c') {
    // 해당 프로퍼티 생략
    return undefined;
    // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
    // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
    // key와 value를 로그로 출력해보며 확인해 볼 것
  }
  if (typeof value === 'number') {
    return value * 10;
  }
  return value;
});
console.log(objStr1);
const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

[
  JSON.stringify(obj2, null),
  JSON.stringify(obj2, null, 1),
  JSON.stringify(obj2, null, 2),
  JSON.stringify(obj2, null, '\t')
]
  .forEach(i => console.log(i));

//객체의 toJSON 프로퍼티

//2. parse - 역직렬화
//2번째 인자: receiver 함수

//III. 깊은 복사 deep copy
//함수, Date, Symbol, BigInt 프로퍼티는 JSON 방식으로는 불가 또는 제한적  