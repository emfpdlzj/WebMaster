/**
 * 사용자에게 인사 문구를 생성한다.
 * @param name 사용자 이름
 * @returns 인사 문자열
 */
function greet(name: string): string {
    return `Hello, ${name}`;
}


//설명은 jsdoc에게, 타입은 typescript에게 맡기자
console.log(greet("ABC"));
//컴파일 후 js로 바뀐다.


