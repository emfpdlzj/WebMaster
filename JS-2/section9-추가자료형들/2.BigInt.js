//Number.MAX_SAFE_INTEGER 더 큰 정수를 다루기 위한 자료형
//매우 큰 정수를 다뤄야 하는 특수한 경우에 사용

console.log(
  Number.MAX_SAFE_INTEGER
);

//생성방법. 전부동일
const bigInt1 = 9007199254740991n; // 끝에 n을 붙임
const bigInt2 = BigInt(9007199254740991);
const bigInt3 = BigInt('9007199254740991');
const bigInt4 = BigInt(0x1fffffffffffff) // 9007199254740991

//BigInt의 특징들
//일반 number 타입과 산술 (+, -, *, /, %, **) 연산 불가
//비교 연산 가능
//number 숫자와 섞여 정렬 가능
//불리언으로 변환되는 연산 가능
//소수점 아래는 버림
//Math의 정적 메서드에서 사용 불가
//number로 변환 - 정확성 유실 주의!