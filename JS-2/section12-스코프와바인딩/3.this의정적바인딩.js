//객체의 메서드 종류별 비교
const obj={
  //함수
  func1: function(){return true;},
  //메서드
  fun2(){return true;},
  //화살표함수
  func3:()=>true
}

console.log(
  obj.fun1(),
  obj.fun2(),
  obj.fun3()
);
// 생성자 역할 수행 여부
const func1 = new obj.func1();
//function 선언 함수만 생성자로 활용 가능 - 더 많은 기능이 있고 무겁다는 의미

//화살표 함수와 this
// function 함수나 메서드의 동적 바인딩과 다르게 동작
// 함수가 어디서 선언되었는가에 따름 - ⭐️ 가장 근접한 상위 스코프에 바인딩 고정
// 즉 this를 정적으로 바인딩함  

//1. 객체 리터럴에서
// ⚠️ 객체 리터럴의 화살표 함수는 가리키는 기본 스코프가 나머지 둘과 다름
const obj = {
  x: 1,
  y: 2,

  func1: function () {
    console.log('1.', this);
  },
  func2() {
    console.log('2.', this);
  },
  func3: () => {
    console.log('3.', this);
  }
}
// this가 해당 객체를 가리킴
obj.func1();
obj.func2();

// 화살표 함수 : 💡 this가 상위 스코프를 가리킴
obj.func3();

const outer = {
  a: true,
  b: false,

  func: function () {
    const inner = {
      x: 1,
      y: 2,

      func1: function () {
        console.log('1.', this);
      },
      func2() {
        console.log('2.', this);
      },
      func3: () => {
        console.log('3.', this);
      }
    }

    // this가 inner를 가리킴 
    inner.func1();
    inner.func2();

    // this가 outer를 가리킴
    inner.func3();
  }
}

outer.func();

// 2. 생성자 함수와 클래스에서

// 기본적으로는 가리키는 대상이 동일(해당 인스턴스)
// ⭐ 동적으로 바인딩하는 타 방식과의 차이 확인

// 찌개는 function 선언 함수와 메서드로 볶음밥은 화살표 함수로
//	makeStew : 일반 함수(function) → 호출 방식에 따라 this가 바뀜
// fryRice: 화살표 함수(=> ) → this를 새로 만들지 않고,  바깥(생성자 Korean 실행 당시)의 this를 그대로 “고정”함
function Korean() {
  this.favorite = '김치';

  this.makeStew = function (isHot) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
  };
  this.fryRice = (isHot) => {
    return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
  };
}

function Italian() {
  this.favorite = '피자';
}

const korean = new Korean();
const italian = new Italian();

console.log(korean.makeStew(true));
console.log(korean.fryRice(true));

italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;

console.log(italian.makeStew(false));
console.log(italian.fryRice(false));

// ♻️ 새로고침 후 실행
class Korean {
  constructor() {
    this.favorite = '김치';
    this.fryRice = (isHot) => {
      return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
    }
  }
  makeStew(isHot) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
  }
}

class Italian {
  constructor() {
    this.favorite = '피자';
  }
}

const korean = new Korean();
const italian = new Italian();

console.log(korean.makeStew(true));
console.log(korean.fryRice(true));

italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;

console.log(italian.makeStew(false));
console.log(italian.fryRice(false));

//call, apply, bind의 this 인자 무시됨
console.log(
  korean.fryRice.call({ favorite: '된장' }, true)
);
console.log(
  korean.fryRice.apply({ favorite: '된장' }, [true])
);
console.log(
  korean.fryRice.bind({ favorite: '된장' }, true)()
);

// Node.js 파일 실행시 빈 객체가 출력된 이유

// Node.js는 각 파일을 모듈(추후 다룰 것, 기본적으로 객체) 로 만들어 실행
// 파일 내 모든 코드는 모듈의 메서드 안으로 들어가 실행됨 - 즉 객체 내 함수의 코드가 됨

// this가 모듈 객체(현재 비어있음)를 가리킴
console.log('0.', this);

function func1() {
  // this가 전역 객체를 가리킴
  console.log('1.', this);
}

function func2() {
  'use strict';

  // this가 undefined를 가리킴
  console.log('2.', this);
}

const func3 = () => {
  // 💡 this가 모듈 객체(이 함수의 상위 스코프)를 가리킴
  console.log('3.', this);
}

func1();
func2();
func3();

