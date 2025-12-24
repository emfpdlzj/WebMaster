//에러 핸들링 error handling 의 필요성
// 에러 / 에러 error 발생에 대비하지 않으면 프로그램이 종료됨

//자바스크립트의 에러핸들링
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch

// 1.try catch
try{
  (3).split('');
}catch(e){
  console.error('error!');
}

//try 블록
// 에러 발생 여지가 있는 코드 포함
// 이곳에서 발생한 에러는 프로그램을 멈추지 않음

// catch 블록
// 에러 발생시 실행할 코드 포함
// 발생한 오류 객체를 인자로 받음

//try { } 안에서 어떤 줄에서 에러가 throw되면 그 에러가 난 그 줄에서 실행이 멈추고 남은 try 블록 코드는 실행 안 하고 바로 catch (e) { }로 넘어감.  근데  에러가 “그 줄”의 일부 작업은 이미 했을 수 있음.


//2. try ... catch ... finally 문

// finally 블록
// 오류가 발생 여부와 관계없이 한 번 실행되는 코드 포함
// ⭐ try나 catch 문에 return이 있더라도 반드시 실행!

// Error 객체
// 에러 발생 시 던져지는 thrown 객체
// 에러에 대한 정보를 담고 있음
// 💡 에러가 발생하지 않아도, 직접 생성하여 던지기 가능

const error = new Error(' error! ');
console.error(error);

// 두 번째 인자로 이유를 명시할 수도 있음
const error = new Error(
  'error ! ',
  { cause: '뭘 잘못했으니까' }
);

console.log(error.name);
console.log(error.message);

// cause를 입력했을 경우
console.log(error.cause); 

throw new Error('의도적 에러 발생');


// 에러의 여러 종류
//⭐ 아래의 에러들은 모두 Error부터 상속받음

// SyntaxError	문법에 이상이 있을 때
// TypeError	주어진 명령에 적절한 자료형이 아닐 때
// ReferenceError	잘못된 값을 참조했을 때
// RangeError	유효한 범위를 벗어나는 숫자가 사용되었을 때


// 직접 오류를 생성하여 던지기
// 컴퓨터가 인지하지 못하는 에러 수동 발생
// 특정 월의 당번으로 지원하는 함수
function applyForMonth(date) {
  try {
    if (typeof date !== 'number') {
      throw new TypeError('숫자로 입력해주세요.');
    }
    if (date < 1 || date > 12) {
      throw new RangeError('유효한 월을 입력해주세요.');
    }

    console.log(`${date}월 당번으로 등록되셨습니다.`);

  } catch (e) {
    console.error('🛑 에러 발생!', e);
    console.log('다시 등록해주세요.');
  }
}

//커스텀 에러 만들기

//에러 버블링 error bubbling

// 다른 함수를 호출했을 때
// 에러 발생시 해당 함수에서 잡지 않으면 호출한 곳으로 던져짐
// 다중 호출시 에러를 핸들링하는 코드가 있는 호출자까지 전달됨
function func1() {
  throw new Error('에러');
}

function func2() {
  func1();
}

function func3() {
  func2();
}

function func4() {
  try {
    func3();

  } catch (e) {
    console.error(e);
  }
  console.log('실행완료');
}

func4();
//⭐ 에러는 가능한 발생 곳 가까이서 처리하는 것이 좋음