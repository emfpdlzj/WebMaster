//this : 기본적으로 자신이 속한 곳을 가리킴 - 문맥 context

console.log(this);
//  아래의 환경들에서 각각 실행해 볼 것

// 브라우저의 콘솔창: Window 객체 - globalThis와 같음
// Node.js의 REPL: global 객체 - globalThis와 같음
// .js문서로 작성 후 실행 - 빈 객체 ->Node.js에서 각.js 문서들은 이후 배울 모듈로서 실행되기 때문

//2. 함수 안에서의 this
// 느슨한 모드와 엄격 모드에서 다르게 동작
'use strict';
function func(){
  console.log(this);
}

func();
//객체에 속하지 않은 함수에서는 this사용 의미없음


//3. 객체 안에서의 this

// ⚠️ 일단 화살표 함수 제외
// a.객체 리터럴 - 해당 객체를 가리킴
const obj={
  x:123,
  getX: function(){
    return this.x;
  }
}

console.log(obj.getX());

//b. 생성자 함수 - 생성될 인스턴스를 가리킴
function Person(name, age){
  this.name = name;
  this.age =age;
  this.introduce =function(){
    return `i'm ${this.name}, ${this.age} ~`;
  }
}

console.log(new Person('asdf', 20).introduce());

//c. 클래스 선언 - 생성될 인스턴스를 가리킴
class Yalco{
  constructor(name, no){
    this.name=name;
    this.no=no;
  }
  introduce(){
    return `hello this is  ${this.no}, ${this.name} store ~`;
  }
}

console.log(new Yalco('kangnam', 17).introduce());

//II. ⭐ 동적 바인딩

// 자바스크립트의 독특한 동작방식
//this가 가리키는 대상이 함수의 호출 주체 또는 그 방식에 따라 달라짐
const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};

const italian = {
  favorite: '피자'
};

// 이탈리아인에게 한국인이 찌개 끓이는 법을 알려줌
italian.makeStew = korean.makeStew;

console.log(
  italian.makeStew(false, 2)
);
//💡 함수가 누가, 어떻게 호출되었는가에 따라 this가 가리키는 대상이 달라짐

//해결방법들
//1. call를 사용한 함수 호출
console.log(
  italian.makeStew.call(korean,false,2)
);

//2. apply를 사용한 함수 호출
//this의 대상 뒤의 인자들을 배열로
console.log(
  italian.makeStew.apply(korean,[false,2])
);

//3. ⭐ bind를 사용한 this 대상 고정
//this의 대상이 동적으로 변하지 않는 함수를 반환


// ⭐ this가 바인딩된 새 함수를 만듦
italian.makeRightStew = korean.makeStew.bind(korean);

console.log(
  italian.makeRightStew(false, 2)
);

// 💡 추가 인자들까지 바인딩 가능 
italian.makeClassicStew = korean.makeStew.bind(korean, true, 1);

console.log(
  italian.makeClassicStew()
);

const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  },
  teachMakingStew: function () {
    return this.makeStew.bind(this);
  }
};

const italian = {
  favorite: '피자'
};

//5. 생성자 함수일 경우 - 함수 자체를 미리 인스턴스에 바인딩하기
function Korean() {
  this.favorite = '김치';
  this.makeStew = function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  };

  // 💡 여기서 바인딩을 고정시켜버림
  this.makeStew = this.makeStew.bind(this);
}

function Italian() {
  this.favorite = '피자';
}

const korean = new Korean();
const italian = new Italian();

italian.makeStew = korean.makeStew;

console.log(italian.makeStew(false,2));

//call, apply, bind의 다른 활용
console.log(korean.makeStew.call({favorite: '된장'}, true, 2));

// 객체들이 가져다 쓰도록 만든 함수
function intro(job) {
  return `${this.name}(${this.age}세) - ${job}`
}

const hong = {
  name: '홍길동',
  age: 20
};

const jeon = {
  name: '전우치',
  age: 25
};

// 동적 바인딩 특성 활용
hong.intro = intro;

console.log(
  hong.intro('개발자')
);

//배열 메서드의 thisArg

//콜백으로 주어진 함수 내에서 this가 가리킬 대상
// 보통 콜백함수 다음 인자로 넣음

function recommendForYou(me) {
  const products = [
    { sex: 'F', size: 'M' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'M' },
    { sex: 'U', size: 'S' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'S' },
  ];

  products
    .map((itm, idx) => {
      return { ...itm, idx }
    })

    // ⚠️ 화살표 함수 대신 function 선언 함수 사용 주목
    .filter(function ({ sex, size }) {
      return ['U', this.sex].includes(sex)
        && size === this.size
    }, me) // 💡 thisArg

    .forEach(function ({ idx }) {
      console.log(`${this.name}님, ${++idx}번은 어떠세요?`);
    }, me); // 💡 thisArg
}

const peter = {
  name: '피터',
  sex: 'M',
  size: 'L'
};

const jane = {
  name: '제인',
  sex: 'F',
  size: 'S'
};

recommendForYou(peter);
recommendForYou(jane);
