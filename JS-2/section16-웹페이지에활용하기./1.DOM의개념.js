// 💡 Node.js에서는 출력되지 않음
document;


// ⭐ 브라우저에서 document는 전역 객체의 프로퍼티임
console.log(
  document === window.document,
  document === globalThis.document
);

document;//DOM구조도로 출력됨
Object.getPrototypeOf(document);

//💡 아래의 프로퍼티로 들어가면 인스턴스 형태로 확인 가능
globalThis;
//chilren 프로퍼티로 타고들어가 볼 것 - DOM 구조도 반영 확인


//HTML 이하 노드들 재귀적으로 출력
// document 내에 html 태그 요소를 선택하는 코드
const html = document.querySelector('html');

console.log(html); // DOM 형태로 출력

console.log(html.children);

function getNameAndChildren(node, indent) {
  console.log(
    '  '.repeat(indent), // 인덴트
    node.nodeName, // 노드 이름

    // ⭐ 아래를 차례로 로깅해볼 것
    //node.children, // 이터러블임 확인
    //Object.getPrototypeOf(node),
  );

  for (child of node.children) {
    getNameAndChildren(child, indent + 1);
  }
}

getNameAndChildren(html, 0);


//💡 각 요소들의 족보 확인

//⭐ Document는 계열이 다름 -> DOM 최상위에는 EventTarget