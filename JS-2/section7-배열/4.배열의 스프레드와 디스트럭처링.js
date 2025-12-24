//I. 스프레드 spread

//1. 기본 문법
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2);

const arr1 = ['B', 'C'];
const arr2 = ['D'];
const arr3 = ['E'];

const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F']

console.log(arr4);


// 2. 활용
// a.배열을 다수의 인자들로 펼침
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1);

// console.log(1, 2, 3, 4, 5);
console.log(...arr1);

console.log(
  Math.max(...arr1),
  Math.min(...arr1)
);

function classIntro(classNo, teacher, ...children) {
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}

const classNo = 3;
const teacher = '김민지';
const students = ['영희', '철수', '보라', '돌준', '달숙'];

console.log(
  classIntro(classNo, teacher, ...students)
);

const arr = [1, 2, 3, 4, 5, 6, 7];
const toAdd = ['둘', '셋', '넷'];

arr.splice(1, 3, ...toAdd);

console.log(arr);

//b. concat보다 가독성있는 배열 결합
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];

console.log(arr3, arr4);

//c. ⭐️ 배열의 얕은 복사
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr1 === arr2);

arr1[0] = 0;

console.log(arr1, arr2);

// ⚠️ 깊은 복사는 되지 않음
const arr1 = [{ x: 1 }, { x: 2 }];
const arr2 = [...arr1];

arr1[0].x = 0;
console.log(arr1, arr2);

//d. 💡 push, unshift 대신 사용
let arr = [1, 2, 3];

arr = [...arr, 4];
console.log(arr);

arr = [0, ...arr];
console.log(arr);

//가독성 향상
// 배열이 든 변수의 참조값이 변할 필요가 있는 경우(SPA 등...)

//e. 원본배열을 유지한 채 일정부분만 연결하여 복사
// splice는 원본배열을 변경
const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 4 ~ 6을 제외한 새 배열 만들기

// 💡 slice는 원본을 변경하지 않음
const arr1 = [
  ...orgArr.slice(0, 3),
  ...orgArr.slice(6, 9)
];
console.log(arr1);

// 참고: 또 다른 방법
const arr2 = orgArr
  .filter((_, i) => !(i >= 3 && i < 6));
console.log(arr2);

// 원본은 유지
console.log(orgArr);

//II. 디스트럭쳐링 destructuring
// 1. 문법
// 기존 코드
const arr = [1, 2, 3];

const x = arr[0];
const y = arr[1];
const z = arr[2];

console.log(x, y, z);

// 디스트럭쳐링으로 간략화
const arr = [1,2,3];
const [x,y,z]= arr;

console.log(x,y,z);
//일부만 가져오는 것도 가능
const arr = [1, 2, 3];
const [x, y] = arr;

console.log(x, y);

//기본값 설정
const arr = [1, 2, 3];

const [a, b, c, d = 4, e = 5] = arr;
console.log(a, b, c, d, e);
// 기본값보다 할당값이 우선
const [f, g, h = 4] = arr;
console.log(f, g, h);

//나머지 변수 사용 가능
const arr = [1, 2, 3, 4, 5];
const [x, ...y] = arr;

console.log(x, y);
