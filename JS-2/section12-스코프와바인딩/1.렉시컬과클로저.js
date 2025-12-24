//렉시컬(정적) 스코프 lexical(static) scope

//변수나 상수가 코드상 어디에서 지정되었는가에 따라 그 사용 범위를 결정
// 함수가 코드상 어디에서 정의되었는가에 따라 그 상위 스코프를 결정
// 호출한 곳을 기준으로 하는 동적 스코프 dynamic scope 와 상반되는 개념

const x = 1;
const y = 1;
const z = 1;

function func1() {
  const y = 2;
  const z = 2;

  console.log('2', x, y, z);
  func2();
}

function func2() {
  const z = 3;

  console.log('3', x, y, z);
}


console.log('1', x, y, z)
func1();

//func2을 호출한 블록에서의 y 값은 2
// func2을 정의된 블록에서의 y 값은 1
// 정의된 블록을 기준으로 상위 스코프의 값이 사용됨

//렉시컬 환경 lexical environment
// 전체 문서, 함수, 블록을 실행하기 전 만들어지는 내부 객체
// 각 스코프의 고유 값들과 외부 스코프에 대한 참조를 포함

//구성요소
// 환경 레코드 environment record - 해당 스코프의 데이터들
// 외부 렉시컬 환경에 대한 참조 outer lexical environment reference

const x = 1;
const y = 1;
const z = 1;

function func1(a) {
  const y = 2;
  const z = 2;

  function func2(b) {
    const z = 3;

    console.log('3', x, y, z, b);
  }

  console.log('2', x, y, z, a);
  func2(a + 1);
}

console.log('1', x, y, z)
func1(1);

// 클로저 closure
// 내부 함수에서 외부 함수의 값에 접근할 수 있다는 개념 함수 중첩시

function func1() {
  const word = 'Hello';

  function func2() {
    console.log(word);
  }

  return func2;
}

const logHello = func1();

logHello();

// logHello에는 func1 안의 함수인 func2가 반환되어 지정됨
// func1의 실행이 끝났음에도 불구하고, 해당 스코프 내의 값이 살아 있음
// func2와 func2가 선언된 환경(func1의 스코프)의 조합 - 클로저

function createCounter(start) {
  let num = start;

  return function () {
    console.log(++start);
    return start;
  }
}

const count = createCounter(10);
count(); // ⭐ 반복 실행해 볼 것
//->단지 값을 복사해서 갖는 것이 아니라, 해당 값이 저장되는 외부 환경 자체가 유지됨

// ⭐ private field 흉내내기 
function employeeCreator(name, age) {
  let _name = name;
  let _age = age;

  return {
    name: () => _name,
    age: () => _age,
    setAge: function (age) { _age = age; },
    getOlder: function (years) { _age += years; }
  }
}

const employee = employeeCreator('홍길동', 20);

console.log(employee);
console.log(employee.name(), employee.age());