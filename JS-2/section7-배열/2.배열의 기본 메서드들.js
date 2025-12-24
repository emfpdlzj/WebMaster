// MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

//I. 특정 값을 반환하는 기본 메서드들

//1. (정적) isArray - 배열인지 여부를 반환
console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray('123'),
  Array.isArray('123'.split(''))
);

//💡 instanceof Array와의 차이
const arrays = [
  [], [1, 2, 3], new Array(),
  // ⚠️ instanceof에서는 결과가 다름
  Array.prototype // 배열임
];

const notArrays = [
  1, 'abc', true, null, {}
];
for (const item of arrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}
for (const item of notArrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}
//Array.isArray가 보다 권장됨 다른 프레임의 Array도 판별
//MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#instanceof_vs_isarray

//2. at - 주어진 인자를 인덱스로 값을 반환
// ⭐️ 음수를 사용하여 뒤에서부터 접근 가능
const arr = [
  '한놈', '두시기', '석삼', '너구리', '오징어'
];

console.log(
  arr.at(1), arr.at(2)
);
console.log(
  arr.at(-1), arr.at(-2)
);

//3. includes - 인자로 주어진 요소 유무 확인
const arr = [1, 2, 3, 'abc', true];

console.log(
  arr.includes(2),
  arr.includes('abc'),
  arr.includes(true),
);
console.log(
  arr.includes(4),
  arr.includes('가나다'),
  arr.includes(false)
);

//⚠️ 참조형 데이터의 경우
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };

const arr = [
  obj1,
  { x: 3, y: 4 }
];

console.log(
  arr.includes(obj1),
  arr.includes(obj2),
  arr.includes({ x: 1, y: 2 }),
  arr.includes({ x: 3, y: 4 })
);

//4. indexOf, lastIndexOf - 앞/뒤에서 첫 번째 값의 인덱스 반환
// 없을 시 - 1 반환
const arr = [1, 2, 3, 2, 1];

console.log(
  arr.indexOf(2),
  arr.lastIndexOf(2),
  arr.indexOf(4)
);

//5. join - 인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
];

console.log(
  arr1.join() // 인자가 없다면 쉼표`,`로
);
console.log(
  arr1.join('')
);
console.log(
  arr1.join(' ')
);
console.log(
  arr2.join(':')
);


console.log(
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro(classNo, teacher, ...children) {
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}

//II. 배열을 변경하는 기본 메서드들

// 1. push, unshift - 배열에 값을 추가
// 결과의 길이를 반환

// a.push - 값을 뒤에 추가
const arr = [1, 2, 3];
const x = arr.push(4);

console.log(x, arr);

const y = arr.push(5, 6, 7); // 최종 길이 반환

console.log(y, arr);

//b. unshift - 값을 앞에 추가
const arr = [5, 6, 7];
const x = arr.unshift(4);

console.log(x, arr);

const y = arr.unshift(1, 2, 3);

console.log(y, arr);


// 특징과 비교
// 수정된 배열의 길이를 반환
// 부수효과 - 원본 배열을 변경 배열 마지막 강에 배울 스프레드 문법을 보다 권장
// 💡 push보다 unshift가 더 느림 - 이후 요소들을 밀어내야 하므로


//2. pop, shift - 배열에서 값을 제거하여 반환

//a. pop - 값을 뒤에서 제거하여 반환
const arr = [1, 2, 3, 4, 5];
const x = arr.pop();

console.log(x, arr);
const y = arr.pop();

console.log(y, arr);

//b. shift - 값을 앞에서 제거하여 반환
const arr = [1, 2, 3, 4, 5];
const x = arr.shift();

console.log(x, arr);
const y = arr.shift();

console.log(y, arr);
// pop보다 shift가 더 느림 - 이후 요소들을 당겨야 하므로

//3. splice - 원하는 위치에 요소(들)을 추가 및 삭제
// 2개 이상의 인자를 받음
// start: 배열 변경을 시작할 위치
// deleteCount: 제거할 요소의 개수
// item(s) : 추가할 하나 이상의 요소

const arr = [1, 2, 3, 4, 5, 6, 7];

// 2번 인덱스부터 2개 요소 제거
arr.splice(2, 2);

console.log(arr);
// 3번 인덱스부터 요소 제거 없이 'a' 추가
arr.splice(3, 0, 'a');

console.log(arr);
// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
arr.splice(1, 3, '가', '나', '다');

console.log(arr);


//배열의 delete - empty 값을 남김
const arr = [1, 2, 3, 4, 5];
delete arr[2];

console.log(arr);

// 💡 때문에 배열의 값 삭제에는 splice 사용
arr.splice(2, 1);

console.log(arr);

//4. fill - 배열을 특정 값으로 채움// 중간의 빈 값도 채움
const arr1 = [1, 2, , , 4, 5];
arr1.fill(7);

console.log('1.', arr1);

// 💡 특정 값으로 채운 배열 생성시 유용
const arr2 = new Array(10);
arr2.fill(1);

console.log('2.', arr2);

// 인자가 둘일 때: (채울 값, ~부터)
arr2.fill(2, 3);

console.log('3.', arr2);

// 인자가 셋일 때: (채울 값, ~부터, ~ 전까지)
arr2.fill(3, 6, 9);

console.log('4.', arr2);

//5. reverse - 배열의 순서를 뒤집음
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

// 💡 메서드 자체도 뒤집힌 배열을 반환
arrRev = arr.reverse();

// 원본 배열 뒤집힘
console.log(arr, arrRev);
arrRev[0] = 0;

// ⭐ 반환된 배열은 원본과 같은 배열을 참조! (복사가 아님)
console.log(arr, arrRev);

//III. 새 배열을 반환하는 기본 메서드들
// /⭐️ 원본 배열을 수정하지 않음
// 얕은 복사본

// 1. concat - 배열에 다른 배열이나 값을 이어붙인 결과를 반환
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false];
const arr4 = arr1.concat(arr2);

console.log(arr4);
const arr5 = arr1.concat(arr2, 3);

console.log(arr5);
const arr6 = arr1.concat('ABC', arr2, arr3, 100);

console.log(arr6);
// ⭐️ 원본 배열들에는 변화 없음
console.log(arr1, arr2, arr3);
//해당 배열 뒤로 인자로 하나 이상 주어진 다른 배열이나 값을 이어붙인 결과를 반환

//2. slice - 인자로 주어진 범주의 값을 잘라 반환
// 1~2개 인자를 받음
// begin: 시작 위치
// end: 종료 위치
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = arr1.slice(3);
const arr3 = arr1.slice(3, 7);

console.log(arr2, arr3);
// 원본에는 변화 없음
console.log(arr1);

// 3. flat - 인자로 주어진 깊이만큼 배열을 펼쳐 반환
// 💡 flat 평평하게 한다는 의미
const orgArr = [
  1, 2,
  [3, 4],
  [5, [6, [7, 8]]]
];

// 인자가 없으면 1을 넣은 것과 같음
const arr0 = orgArr.flat();
const arr1 = orgArr.flat(1);

const arr2 = orgArr.flat(2);
const arr3 = orgArr.flat(3);

console.log('N:', arr0);
console.log('1:', arr1);
console.log('2:', arr2);
console.log('3:', arr3);

// 원본에는 변화 없음
console.log('org:', orgArr);

//💡 위의 메서드들은 얕은 복사
const orgArr = [
  1, { x: 2 }, [{ x: 3 }, { x: 4 }], 5
];

const arr1 = orgArr.concat(6);
const arr2 = orgArr.slice(0, 3);
const arr3 = orgArr.flat();

orgArr[0] = 0;
orgArr[1].x = 20;
orgArr[2][0].x = 30;

console.log(orgArr);
console.log(arr1);
console.log(arr2);
console.log(arr3);

//원시값과 참조값 비교
