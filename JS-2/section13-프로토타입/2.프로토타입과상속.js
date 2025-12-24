function Bird(name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}

function Eagle(name, sound, prey) {
  this.name = name;
  this.sound = sound;
  this.prey = prey;
}
Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}

//Eagle이 Bird로부터 상속받도록 만들려면?

//프로토타입으로 상속하기
//⭐ Object.create 메서드
// 주어진 것을 프로토타입으로 갖는 객체를 생성
function Bird(name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}

function Eagle(name, sound, prey) {
  this.name = name;
  this.sound = sound;
  this.prey = prey;
}

// ⚠️ 순서 주의! 상속을 먼저 받음
Eagle.prototype = Object.create(Bird.prototype);
// Eagle.prototype = Bird.prototype; // 💡 비교해 볼 것

// 상속 이후 자신의 프로토타입 작성
Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}

const bird = new Bird('새돌이', '파닥파닥');
const eagle = new Eagle('독돌이', '푸드덕', '토끼');

// 상속 구조 확인
console.log(bird);
console.log(eagle);

//상속을 먼저 하고 자체 프로토타입 프로퍼티 입력
// Object.create... 대신 Bird.prototype 대입 결과 비교 - eagle과 bird 모두 확인

// 부모의 생성자 활용하기
// 생성자에서 중복되는 부분 위임
// class에서는 constructor에서 super 사용
function Bird(naem, sound){
  this.name =this.name;
  this.sound =sound;
}
Bird.prototype.fly=function(){
  console.log(`${this.sname} ${this.soud} flying.`);
}

function Eagle(name, sound, prey){
  //call 호출방식 사용
  Bird.call(this, name, sound);
  this.prey=prey
}

Eagle.prototype = Object.create(Bird.prototype);

Eagle.prototype.hunt =function(){
  console.log(`${this.sname} ${this.prey} hunting.`);
}

const eagle = new Eagle('독돌이', '푸드덕', '토끼');
console.log(eagle);

//클래스로 구현
// ⭐ 클래스 역시 프로토타입을 기반으로 구현됨

// 클래스와 프로토타입
// 클래스의 메서드는 프로토타입으로 들어가게 됨
// extends - 프로토타입 상속도를 만듦
function AAA() {
  this.field = 1;
  this.run = function () { return 1; };
}

class BBB {
  field = 1;
  run = function () { return 1; }
}

class CCC {
  field = 1;
  run() { return 1; }
}

console.log(new AAA()); // 인스턴스에 속함
console.log(new BBB()); // 인스턴스에 속함
console.log(new CCC()); // 프로토타입에 속함
//run 함수 또는 메서드가 속한 곳 비교
// 필드는 양쪽 모두 인스턴스에 속함

// ♻️ 새로고침 후 실행

class Bird {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  fly() {
    console.log(`${this.name} ${this.sound} 비행중`);
  }
}

class Eagle extends Bird {
  constructor(name, sound, prey) {
    super(name, sound);
    this.prey = prey;
  }
  hunt() {
    console.log(`${this.name} ${this.prey} 사냥중`);
  }
}
const bird = new Bird('새돌이', '파닥파닥');
const eagle = new Eagle('독돌이', '푸드덕', '토끼');

console.log(bird);
console.log(eagle);
bird.fly();
eagle.fly();
eagle.hunt();

//💡 인스턴스의 클래스/생성자함수 이름 출력
// 무엇의 인스턴스인지 프로그램상에서 이름으로 파악할 때 유용
console.log(
  Object.getPrototypeOf(bird).constructor.name,
  Object.getPrototypeOf(eagle).constructor.name,
  Object.getPrototypeOf(
    Object.getPrototypeOf(eagle)
  ).constructor.name,
);

//Mixin - Object.assign으로 조립하기
// 상속 - 한 부모로부터만 물려받음
// 믹스인 - 여럿을 조합하여 가져올 수 있음

