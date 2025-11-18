//4.for문
//둘 이상의 변수 사용
for (
  let x = true, y = 0, z = 0;
  y * z < 10;
  x = !x, x ? y++ : z++
) {
  console.log(y, z);
}

//💡 객체와 배열의 for문

// 객체: for (키 이름 in 객체명) - 객체의 키들을 순서대로 반환
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}

for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
  console.log(key, ':', lunch[key])
}
// 키의 이름은 자유롭게 사용 가능
for (const k in lunch) {
  console.log(k, ':', lunch[k])
}

//배열: for (항목 of 배열명) - 배열의 항목들을 순서대로 반환
//정확히는 이터러블 iterable (배열도 그 일종)에 사용됨 이후 배울 것

const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}
for (const el of list) {
  console.log(el);
}

//for .. of 문의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ⚠️ 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
  // 이곳에 i를 변경하는 코드가 들어간다면...
  console.log(numbers[i]);
}

// ⭐️ 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
  console.log(num);
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // ⚠️ 복사된 값. let 사용 주목
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);

for (let i = 0; i < numbers1.length; i++) {
  numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
}
console.log(numbers1, numbers2);

//continue, break

//3. label - 중첩된 반복문을 명명하여 continue 또는 break에 사용
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}

//5.do while - 일단 수행하고 조건을 평가
let x = 12;

do {
  console.log(x++);
} while (x < 10);