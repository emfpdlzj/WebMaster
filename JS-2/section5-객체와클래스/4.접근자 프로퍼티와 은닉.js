//I. 접근자 프로퍼티

// getter, setter 함수라고도 부름
// 스스로는 값을 갖지 않음 - 다른 프로퍼티의 값을 읽거나 저장할 때 사용
// get, set을 앞에 붙임

const person1 = {
  age: 17,

  get koreanAge() {
    return this.age +1;
  },

  set koreanAge (krAge){
    this.age =krAge-1;
  }
}

console.log(person1, person1.koreanAge);

person1.koreanAge=20;
console.log(person1, person1.koreanAge);
// 함수처럼 지정되었지만 프로퍼티처럼 사용!

//클래스에서도 사용 가능

class YalcoChicken{
  constructor (name, no){
    this.name = name;
    this.no = no;
  }
  get ChainTitle(){
    return `${this.no}호 ${this.name}점`;
  }
  set chainNo(chainNo){
    if (typeof chainNo !== 'number') return;
    if (chainNo <= 0) return;
    this.no = chainNo;
  }
}

const chain1 = new YalcoChicken('pangyo', 3);
console.log(chain1.chainTitle);

chain1.chainNo ='4';

// 클래스에서는 프로토타입이 됨 - 콘솔에서 객체의[[Prototype]]에서 확인해 볼 것
// getter
// 반드시 값을 반환해야 함
// 특정 프로퍼티(들)를 원하는 방식으로 가공하여 내보낼 때 사용
// setter
// setter는 하나의 인자를 받음
// 특정 프로퍼티에 값이 저장되는 방식을 조작하거나 제한하는데 사용

//⚠️ 필드 이름과 setter의 이름이 같을 때
class YalcoChicken{
  constructor(name, no){
    this.name = name;
    this.no=no;
  }

  get no(){
    return this._no + '호점';
  }

  set no(no){
    this._no = no;
  }
}
const chain1 = new YalcoChicken('pangyo', 3);// 오류 발생!

//setter와는 다른 필드명을 사용하여 자기반복호출을 방지
//constructor의 no는 setter를 가리키고 실제 필드명은 _no가 됨

// II.은닉
// 💡 캡슐화 encapsulation
// 객체지향의 주요 요소 중 하나 - 객체 내부의 값을 감추는(은닉) 것
// 인스턴스의 프로퍼티 값을 함부로 열람하거나 수정하지 못하도록
// 자바스크립트의 필드는 기본적으로 public 은닉되지 않음

// private 필드를 통한 은닉
class Employee{
  #name ='';
  #age =0;
  constructor(name, age){
    this.#name =name;
    this.#age = age;
  }
}
const emp1 = new Employee('Bokdong', 32);

console.log(emp1);
console.log(emp1.#name); //오류발생, 일부 브라우저 제외
console.log(emp1['#name']); //undefined 반환

//필드명 앞에 #을 붙임
// ⚠️ 클래스 바로 안쪽에 정의해야 함(constructor에만 하면 안 됨)

// 클래스 내에서는 private 필드에 접근 가능
class Employee {
  #name = '';
  #age = 0;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  get name(){
    // [n]: n+1번째 글자를 반환
    return this.#name[0] + '모씨';
  }
  get age(){
    return this.#age - (this.#age %10) + '대';
  }
  set age(age){
    if (typeof age === 'number' && age >0){
      this.#age = age;
    };
  }
  getOlder(years) {this.#age +=years;}
}

const emp1 = new Employee('김복동', 22);

//constructor, 접근자 프로퍼티 또는 기타 함수에서 접근 가능
//인스턴스에서 바로 접근은 못하도록 은닉, 위 방법들로 제어