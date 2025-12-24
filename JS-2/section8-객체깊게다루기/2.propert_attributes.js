//프로퍼티 어트리뷰트 property attributes
// 객체의 프로퍼티가 생성될 때 엔진에 의해 자동 정의되는 상태
const person ={
  fullName:'James good',
  ageInNumber:25,

  get name(){
    return this.fullName
    .split('')
    .map((letter, idx) => idx== 0 ? letter : '*')
    .join('');  
  },
  get age(){return this.ageInNumber + ' olds.';},
  set age(age){
    this.ageInNumber = Number(age);
  }
}

console.log(person.name, person.age);

//데이터 프로퍼티의 어트리뷰트: [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]

//접근자 프로퍼티의 어트리뷰트: [[Get]], [[Set]], [[Enumerable]], [[Configurable]]

//getOwnPropertyDescriptor, getOwnPropertyDescriptors
//객체 프로퍼티 어트피뷰트들의 설명자 descriptor를 반환
// 특정 프로퍼티를 지정하여 반환
console.log('1.',
  Object.getOwnPropertyDescriptor(person, 'fullName')
);
console.log('2.',
  Object.getOwnPropertyDescriptor(person, 'ageInNumber')
);
console.log('3.', // set: undefined
  Object.getOwnPropertyDescriptor(person, 'name')
);
console.log('4.', // get, set 모두 있음
  Object.getOwnPropertyDescriptor(person, 'age')
);

//defineProperty, defineProperties
//객체의 프로퍼티를 정의

// 한 프로퍼티씩 각각 설정

//여러프로퍼티를 객체 형식으로 한꺼번에 설정
Object.defineProperties(person,{
  ageInNumber:{
    value:25,
    writable:true
  },
  age:{
    get(){return this.ageInNumber + ' olds.';},
    set(age){
      this.ageInNumber = Number(age);
    }
  }
});

//깊은 동결 deep freeze
//재귀적으로 객체를 가장 깊숙히까지 동결
