function* genFunction() {
  console.log('하나를 반환합니다.');
  yield '하나';

  console.log('둘을 반환합니다.');
  yield '둘';

  console.log('셋을 반환합니다.');
  yield '셋';
}

const genFunc = genFunction();

// 반복 수행해 볼 것
// 💡 아래의 코드가 블록의 코드에 대한 제어권을 가짐
console.log(genFunc.next());

//함수 내 코드들을 모두 실행하지 않고 외부 호출자에게 제어권을 양도!

//1. 제너레이터 함수/메서드 선언
//function 다음 또는 메서드명 앞에 * -- 띄어쓰기 위치 무관

function* genFunc1(){
  yield 'genFunc1';
}

// 값으로 대입
const getnFunc2 = function*(){
  yield 'genFunc2';
}

const obj={
  * genFunc3(){
    yield 'genFunc3';
  }
}

class MyClass{
   genFunc4(){
    yield 'genFunc4';
  }
}

//제너레이터 객체

// 제너레이터 함수의 결과값으로 반환
// ⭐ 이터레이터이자 이터러블
function* genFunction() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let genObj = genFunction();

// 💡 이터러블임 확인
console.log(genObj[Symbol.iterator]);
// ⚠️ 순회 후에는 재생성 필요
console.log([...genObj]); 
// 이터러블로서는 바로 호출이 적합
console.log([...genFunction()]);

genObj = genFunction(); // 재생성

// 💡 이터레이터임 확인
console.log(genObj.next);


//⭐ next 메서드를 실행하면 다음 yield까지 실행 후 중지
// yield의 값을 value로 반환
// 끝까지 실행 후 done: true

//이터러블과 이터레이터 대체하기
//1.주사위 10번
function* diceTenTimes(){
  let count=0;
  let maxCount=10;

  while(count++<maxCount){
    yield Math.ceil(Math.random()*6);
  }
}
//yield이후 멈췄다가 다시시작.

//2.피보나치 제너레이터
function* fiboacci(maxCount){
  let count=0;
  let[x,y]=[0,1];

  while(count++<maxCount){
    [x,y]=[y,x+y];
    yield y;
  }
}

//3.순번
function* workersGen(people) {
  let idx = 0;

  while (idx < people.length) {
    yield people[idx++];
  }
}

const team1 = [
  '철수', '영희', '돌준', '미나', '준희'
];