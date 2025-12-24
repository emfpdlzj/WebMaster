//2진법 binary
//0b뒤로 숫자 0,1을 붙여 표현
[
  0b1,
  0b10,
  0b11,
  0b100,
  0b101].forEach(i => console.log(i))

//8진법 octal
//0o 뒤로 숫자 0~7 를 붙여 표현 
[
  0o7,
  0o10,
  0o100,
  0o1000].forEach(i => console.log(i))

//16진법 hexadecimal
//0x 뒤로 숫자 0~9, A~F 를 붙여 표현 

//진법 간 변환
const num = 123456789;

const binStr = num.toString(2);
const octStr = num.toString(8);
const hexStr = num.toString(16);

console.log(binStr, octStr, hexStr);

console.log(
  parseInt(binStr, 2),
  parseInt(octStr, 8),
  parseInt(hexStr, 16)
);

//비트 연산
let x = 0b1010101010; // 682
let y = 0b1111100000; // 992

const bitAnd = x&y;
const bitOr = x|y;
const birXor=x^y;
console.log(~x); //비트반저
x=x<<1;
y=y>>1;

