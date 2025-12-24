//MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

//콜백(callback) 함수:나중에 호출되도록 다른 함수에 넘겨주는 함수
// 내가 직접 호출하지 않고, 다른 함수가 알아서 호출해주는 함수

//배열의 고차함수 higher order function 메서드
// 다른 함수(콜백 함수 callback function)를 인자로 받음
// 함수형 프로그래밍 - 변수 사용 없이 순회 작업들을 코딩

// 1. forEach - 각 요소를 인자로 콜백함수 실행
// 💡 for문의 좋은 대체제
// ⚠️ 단점: 예외를 던지지 않으면 종료할 수 없음 - break, continue 사용 불가
// 인자들:
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg - this 주제 섹션에서 다룰 것

const arr = [1, 2, 3, 4, 5];
const result = arr.forEach(itm => {
  console.log(itm);
});
// 💡 결과로는 undefined 반환 - 실행 자체를 위한 메서드
console.log('반환값:', result);

const arr = [1, 2, 3, 4, 5];

// 현존하는 함수를 인자로 - 💡 결과 살펴볼 것
arr.forEach(console.log);

//const arr = [10, 20, 30, 40, 50];

// 콜백함수의 인자가 둘일 때
arr.forEach((itm, idx) => {
  console.log(itm, idx);
});

const logWithIndex = (itm, idx) => {
  console.log(`[${idx}]: ${itm}`);
}

arr.forEach(logWithIndex);

const arr = [1, 2, 3, 4, 5];

// 콜백함수의 인자가 셋일 때
arr.forEach((itm, idx, arr) => {
  // 💡 세 번째 인자는 원본 배열의 참조임
  arr[idx]++;
  console.log(itm);
});// 이런 식으로 원본을 수정해버릴 수 있음
console.log(arr);

//2. map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환

//인자들:
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg
const orgArr = [1, 2, 3, 4, 5];

// ⭐️ 각 콜백함수는 어떤 값을 반환해야 함
const arr1 = orgArr.map(i => i + 1);
const arr2 = orgArr.map(i => i * i);
const arr3 = orgArr.map(i => i % 2 ? '홀수' : '짝수');

console.log(arr1);
console.log(arr2);
console.log(arr3);

const orgArr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 2500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

const arr1 = orgArr.map(itm => {
  //블록 안에서는 return문 필요함. 
  return {
    name: itm.name,
    cat: itm.cat
  }
});

//디스트럭처링 사용 (편의에 따라 적절화)
const arr2 = orgArr.map(({ name, cat }) => {
  return { name, cat }
});

console.log(arr2);

const joined = orgArr.map(({ name, cat, price }, idx) => {
  return '${idx+1} : [{${cat[0]}}] ${name}: ${price}원'
})
  .join('\n----------');

console.log(joined);


//3. find, findLast, findIndex, findLastIndex - 주어진 기준으로 검색
// 콜백함수로에 인자로 넣었을 때 true를 반환하는
// find - 첫 번째 값 반환
// findLast - 마지막 값 반환
// findIndex - 첫 번째 값의 인덱스 반환
// findLastIndex - 마지막 값의 반환
// 공통 인자들:
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const arr = [1, 2, '삼', 4, 5, 6, '칠', 8, 9];

const isString = i => typeof i === 'string';
const isBoolean = i => typeof i === 'boolean';

console.log(
  arr.find(isString),
  arr.findLast(isString),
  arr.findIndex(isString),
  arr.findLastIndex(isString)
);

// 없을 시 값은 undefined, 인덱스는 -1 반환
console.log(
  arr.find(isBoolean),
  arr.findLast(isBoolean),
  arr.findIndex(isBoolean),
  arr.findLastIndex(isBoolean)
);

const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

const isCheapFruit = i => {
  return i.cat === '과일' && i.price < 3000;
}
console.log(
  arr.find(({ catt }) => cat === '채소').name,
  arr.findLast(isCheapFruit).name
);

//4. some, every - 어떤/모든 요소가 기준을 충족하는지 확인
// 콜백함수에 인자로 넣은
// some - 요소들 중 하나라도 true를 반환하는가 여부 반환
// every - 모든 요소가 true를 반환하는가 여부 반환
// 인자들:
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.some(i => i % 2),
  arr.every(i => i % 2),
  arr.some(i => i < 0),
  arr.every(i => i < 10)
);

const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

const isCheapVege = i => {
  return i.cat === '채소' && i.price < 2000;
}

const isPlant = ({ cat }) => {
  return ['과일', '채소'].includes(cat);
}
//배열 안에 cat과 같은 값이 있는지 검사

console.log(
  arr.some(isCheapVege),
  arr.every(isCheapVege),
  arr.some(isPlant),
  arr.every(isPlant)
);

//5. filter - 주어진 기준을 충족하는 요소들로 새 배열 만들어 반환

//⭐️ 원본 배열을 수정하지 않음
//인자들:
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr.filter(i => i % 2);
const evens = arr.filter(i => !(i % 2));
const largerThan3 = arr.filter(i => i > 3);

console.log(odds);
console.log(evens);
console.log(largerThan3);

const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

console.log(
  'fruit lists:',
  arr.filter(({cat})=>cat === '과일').map(({name})=>name).join(', ')
);

//6. reduce, reduceRight
// 주어진 콜백함수에 따라 값들을 접어 나감

// 인자들:
// 콜백함수 - 인자: (이전값, 현재값, 현재 인덱스, 해당 배열 )
// 초기화 값

// 💡 초기화 값이 없을 때는 첫 번째와 두 번째 값부터
connst arr = [1, 2,3,4,5,6,7,8,9];

console.log(
  arr.reduce((pre, curr, idx)=>{
    console.log('p: ${prev), c: ${curr}, i: ${idx}');
    return prev+curr;
  })
);

//초기화 값이 있을 때
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  }, 10)
);
//인덱스가 0부터 시작함 주목

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 더하기와 빼기 반복
console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return idx % 2 ? prev + curr : prev - curr;
  })
);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//홀수와 짝수 갯수 세기
console.timeLog(
  arr.reduce((prev, curr)=>{
    return {
      odd: prev.odd + curr %2,
      even:prev.even + (1-(curr%2)),
    }
  }, {odd:0, even:0 })
);

//reduce vs reduceRight
const arr = ['가', '나', '다', '라', '마', '바', '사'];

console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  })
);
console.log(
  arr.reduceRight((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  })
);
//reduceRight은 인덱스도 거꾸로 진행됨에 주목

const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

['과일', '채소'].forEach(category => {
  console.log(
    `${category}의 가격의 합:`,
    arr
      .filter(({ cat }) => cat === category)
      .map(({ price }) => price)
      .reduce((prev, curr) => prev + curr)
  );
});

//⭐️ 만약 위 기능을 배열 메서드와 체이닝 없이 짰다면?
// 중간 과정을 저장하기 위한 변수 또는 내용이 바뀌는 참조형 데이터들이 사용되었을 것
// 함수형 프로그래밍 - 변수들을 코드에서 감추어 부수효과로 인한 문제 방지


// 7. sort - 배열을(주어진 기준대로) 정렬
// ⚠️ 배열 자체의 순서를 바꿈 - 원본 수정
// ➕ 해당 배열을 반환
// 인자들:
// 콜백함수(필수 아님) - 인자: (앞의 값, 뒤의 값 )

// 1. 인자가 없을 시

const arr = ['라', '사', '다', '가', '바', '마', '나'];

arr.sort();

console.log(arr);

let randomWord = 'DBKGICAHFEJ';

console.log(
  randomWord
    .split('')
    .sort()
    // .reverse()
    .join('')
);

console.log(randomWord);

// ⚠️ 숫자일 시 문제가 생김
const arr = [1, 2, 30, 400, 10, 100, 1000];
console.log(arr.sort());
//숫자를 문자열로 암묵적 변환하여 오름차순 정렬

//⭐️ 정확한 정렬을 위해 - 콜백 함수 사용
// 두 인자 a와 b: 인접한 두 요소
// 0보다 큰 값 반환: b를 앞으로 - 순서 뒤집음
// 0 반환: 순서 유지 - ECMAScript 표준은 아니므로 환경마다 다를 수 있음
// 0보다 작은 값 반환: a를 앞으로 - 사실상 순서 유지

//  브라우저마다 동작 디테일 다름
// 인접한 앞의 것과 뒤의 것을, 콜백함수의 첫 번째와 두 번째 인자(a, b) 중
// 어떤 것으로 받아오는지가 브라우저마다 다릅니다.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 변함없음
console.log(
  arr.sort((a,b)=>{
    console.log('a : ${a}, b: ${b}');
    return 1;
  })
);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 순서 거꾸로
console.log(
  arr.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return -1;
  })
);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 셔플 - ⚠️ 위의 코드들과 로그 갯수 비교
console.log(
  arr.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return Math.random() - 0.5;
  })
);

// 아래의 실습결과는 환경이 달라도 같음
// a와 b의 의미에 따라 반환값 양수 / 음수의 음수의 의미도 바뀌기 때문
// 따라서 실무에서는 실행환경을 신경쓸 필요 없음

const arr = [1, 2, 30, 400, 10, 100, 1000];

console.log(
  arr.sort((a, b) => a - b)
);
console.log(
  arr.sort((a, b) => b - a)
);

//⚠️ 숫자가 아닐 경우 직접 반환값을 명시
// NaN을 반환하므로 콜백에 사용 불가
console.log('A' - 'B');

const arr = ['F', 'E', 'I', 'A', 'H', 'C', 'D', 'J', 'G', 'B'];

console.log(
  arr.sort((a, b) => a > b ? 1 : -1)
);
console.log(
  arr.sort((a, b) => a < b ? 1 : -1)
);

//💡 둘 이상의 기준 사용
const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

console.log(
  arr
  .sort((a,,b)=>{
    if(a.cat !== b.cat){
      return a.cat > b.cat? 1 : -1;
    }
    return a.price>b.price ? 1 : -1;
  })
  .map(({name, ca,t price}, idx) =>{
    return '${idx+1}: [${cat[0]}] ${name}: ${price}원'
  })
  .join('\n - - - - - - - \n')
);


//7. flatMap - map 한 다음 flat 매핑해서 펼침
// 인자들:
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const arr = [1, 2, 3, 4, 5];

console.log(
  arr.flatMap(i => i)
);

console.log(
  arr.flatMap(i => [i, i, i])
);

console.log(
  arr.flatMap(i => [i * 10, i * 100, i * 1000])
);

const arr = [1, 2, 3, 4, 5];

// 💡 한 단계만 펼침
console.log(
  arr.flatMap(i => [i, [i], [[i]]])
)

const word = '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열';

console.log(
  word
    .split(' ')
    .flatMap(i => i.split(''))
);


