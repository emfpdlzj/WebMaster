//상속 inheritance
// 서로 다른 클래스나 생성자 함수가 같은 속성들을 공유할 때
// 이들의 관계를 정의함으로써 코드의 중복을 줄이고 효율을 높임

// "B클래스는 A클래스에서 파생된다." - "B는 A의 하위분류"

//I. 클래스의 상속 문법

class Bird {
  wings = 2;
}

class Eagle extends Bird {
  claws = 2;
}

class Penguin extends Bird {
  swim() { console.log('Swimming...'); }
}
class EmperorPenguin extends Penguin {
  size = 'XXXL';
}

const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

console.log(birdy, eaglee, pengu, pengdol);

for (const i of [
  ['1.', birdy instanceof Bird],
  ['2.', eaglee instanceof Bird],
  ['3.', eaglee instanceof Eagle],
  ['4.', pengdol instanceof Penguin],
  ['5.', pengdol instanceof Bird],
  ['6.', birdy instanceof Eagle]
]) {
  console.log(i[0], i[1]);
}

pengu.swim();
pengdol.swim();
eaglee.swim();

// 클래스에서는 extends (부모클래스)로 상속관계 정의
// 자식 클래스에서 또 다른 클래스가 상속받을 수 있음
// 자식 클래스는 부모 클래스의 속성을 기본적으로 가져옴
// 자식 클래스의 인스턴스는 부모 클래스의 인스턴스로 인식됨
// [[Protorype]]으로 상속관계 살펴볼 것 - ⭐️ 최종적으로 Object

class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor(name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order(name) {
    return `${this.menu[name]}원입니다.`
  }
}

class YalcoChickenAndCafe extends YalcoChicken {
  cafeMenu = { 'americano': 4000, 'latte': 4500 };
  cafeOrder(name) {
    return '${this.cafeMenu[name]}원입니다.'
  }
}
const chain1 = new YalcoChickenAndCafe('서면', 2)

console.log(chain1);
console.log(
  chain1.order('후라이드'),
  chain1.cafeOrder('라떼')
);

//II. 오버라이딩 overriding
//자식 클래스에서 부모로부터 물려받은 속성이나 기능을 덮어씀

class Bird {
  wings = 2;
  canFly = true;
  travel() { console.log('flying...') }
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  canFly = false;
  travel() { console.log('swimming...') }
}

const eaglee = new Eagle();
const pengu = new Penguin();

console.log(eaglee);
eaglee.travel();

class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor(name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order(name) {
    return `${this.menu[name]}원입니다.`
  }
}
class YorkNannyYalcoChicken extends YalcoChicken {
  introduce() {
    return `또 뭐 쳐먹으러 기어들어왔어.`;
  }
  order(name) {
    return `${this.menu[name]}원이여.`
  }
}

const chain1 = new YorkNannyYalcoChicken('종로', 48);
console.log(chain1.introduce());
console.log(chain1.order('양념치킨'));

//III. super
//부모 클래스의 constructor 또는 메서드 호출
class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor(name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order(name) {
    return `${this.menu[name]}원입니다.`
  }
}

class ConceptYalcoChicken extends YalcoChicken {
  #word = '';
  constructor(name, no, word) {
    super(name, no);
    this.#word = word;
  }
  introWithConcept() {
    return super.introduce() + ' ' + this.#word;
  }
  order(name) {
    return super.order(name) + ' ' + this.#word;
  }
}

const pikaChain = new ConceptYalcoChicken('도봉', 50, '피카피카~');

console.log(pikaChain);
console.log(pikaChain.introWithConcept());
console.log(pikaChain.order('후라이드'));


// super는 다른 클래스에서 상속받은 클래스에서만 사용 가능
// 자식 클래스의 constructor 내에서는 부모 클래스의 constructor를 가리킴
// 자식 클래스의 메서드 내에서는 부모 클래스를 가리킴
// 부모 클래스의 constructor나 메서드에 추가적인 동작을 넣기 위해 사용

// 💡 정적 메서드에서
class YalcoChicken {
  static brand = '얄코치킨';
  static contact() {
    console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
  }
}

class ConceptYalcoChicken extends YalcoChicken {
  static contact() {
    super.contact();
    console.log('컨셉 가맹문의는 홈페이지를 참조하세요.');
  }
}

ConceptYalcoChicken.contact();