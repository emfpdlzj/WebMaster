//1.이터러블 프로토콜

//반복, 순회 기능을 사용하는 주체간의 통일된 규격
// 공통 기능들: for ...of, 스프레드 문법, 배열 디스트럭쳐링

//이터러블 iterable - 이터러블 프로토콜을 준수하는 객체

// 배열, 문자열, Set, Map, arguments 등...
// 키 Symbol.iterator(well - known 심볼) 의 값으로 이터레이터를 반환하는 메서드를 가짐

//실행시 이터레이터 반환
console.log(
  [][Symbol.iterator],
  ''[Symbol.iterator],
  new Set()[Symbol.iterator],
  new Map()[Symbol.iterator]
);

// 다른 타입의 인스턴스에는 없음
console.log(
  (1)[Symbol.iterator],
  (true)[Symbol.iterator],
  { x: 1 }[Symbol.iterator]
);

// 2.이터레이터 iterator
//next 메서드를 통해 이터러블을 순회하며 값을 반환
const arr = [1, 'A', true, null, {x:1, y:2}];
const arrIterator = arr[Symbol.iterator]();

console.log(arrIterator);

console.log(
  arrIterator.next
);

arrIterator.next(); // ⭐ 반복 실행해 볼 것

//이터레이터 프로토콜 iterator protocol : next 메서드의 반환 객체 내 요소

// value - 해당 차례에 반환할 값
// done - 순회 종료 여부(마지막 값 반환 다음 차례부터)

//III. 이터러블 만들어보기
//1.주사위를 열 번 굴리기
const diceTenTimes={
  [Symbol.iterator](){
    let count=0;
    let maxCount=10;

    return{
      next(){
        return {
          value:Math.ceil(Math.random()*6),
          done:count++>=maxCount
        }
      }
    }
  }
}

const diceIterator = diceTenTimes[Symbol.iterator]();

for(let i=0;i<12;i++){
  console.log(
    diceIterator.next()
  );
}

// 💡 for ... of 문 사용 가능
for (const num of diceTenTimes) {
  console.log(num);
}

//스프레드
const diceResults = [...diceTenTimes];

console.log(diceResults);
// 💡 배열 디스트럭쳐링 사용 가능
const [first, second, ...rest] = diceTenTimes;

console.log(
  '주사위의 첫번째, 두번째 숫자는 각각 '
  + `${first}(와)과 ${second}, 나머지의 합은 ${rest.reduce((a, b) => a + b)
  } 입니다.`
);

//2.피보나치
function fiboIterator() {
  let count = 0;
  const maxCount = 10; // 최대 횟수가 지정됨
  let [x, y] = [0, 1];

  return {
    next() {
      [x, y] = [y, x + y];
      return { value: y, done: count++ >= maxCount }
    }
  }
}

const fibonacci = {
  [Symbol.iterator]: fiboIterator
}

//⭐️ 원하는 최대 횟수의 피보나치 이터러블 생성하기
function getFiboWithMax(maxCount) {
  return {
    [Symbol.iterator]() {
      let count = 0;
      let [x, y] = [0, 1];

      return {
        next() {
          [x, y] = [y, x + y];
          return { value: y, done: count++ >= maxCount }
        }
      }
    }
  }
}

//이터러블도 되는 이터레이터
function workersIter(people) {
  let idx = 0;

  return {
    // 💡 이터레이터로서 [스스로]를 반환!
    // 사장: 직원은 나다.
    [Symbol.iterator]() { return this; },

    // 직원의 역할
    next() {
      return {
        value: people[Math.min(idx, people.length - 1)],
        done: idx++ >= people.length
      };
    }
  }
}


// ⚠️ 이터레이터를 겸하는 경우 한 번 순회하면 끝
console.log(
  [...workersIter1]
);

//제너레이터로 보다 간편하게 구현!  