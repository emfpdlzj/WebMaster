//핵심 기능들을, 학습해 온 자바스크립트 지식과 접목하여 이해


//요소 선택
//1. getElementsByTagName - 태그명으로 선택
//document에서 사용시 문서 전체에서 선택

const $sections = document.getElementsByTagName('section');
const $listItems = document.getElementsByTagName('li');

console.log($sections);
console.log($listItems);
//💡 반환값: 🔗 HTMLCollection - 유사 배열 객체 & 이터러블

$sections[0].getElementsByTagName('li')
// ⭐ 요소 노드에 사용시 그 하위에서 선택
// Element로부터 물려받은 메서드. 이후의 메서드들에도 동일하게 적용됨

//2. getElementsByClassName - 클래스명으로 선택

//3. getElementById - 아이디로 선택
// ⭐ Document만의 메서드 - 문서 내 유일한 요소이므로

//4. querySelector, querySelectorAll

// 주어진 CSS 선택자 첫 번째 또는 모든 요소 반환
// Document와 Element 모두 갖고 있음
document.querySelector('section');

// 💡 NodeList 반환 (HTMLCollection보다 다양한 타입 담음)
document.querySelectorAll('section');

document.querySelector('.plant > ul > .soldout');

document.querySelector('#sweets ul > :nth-child(2)');

$sections[2].querySelectorAll('.soldout');

//II. 노드 기준 탐색
// 1. 자식 노드 탐색

document.querySelector('section')
  .children;
//Element의 기능 - 하위 요소 노드만 반환

document.querySelector('section')
  .childNodes;
  //🔗 Node의 기능 - 텍스트 노드를 포함한 하위 노드 반환
// 공백도 텍스트 노드에 포함됨

//Node의 메서드들
$firstUl.firstChild;
$firstUl.lastChild;

//Element의 메서드들
$firstUl.firstElementChild;
$firstUl.lastElementChild;
// ⭐ 텍스트만 있는 요소의 텍스트 노드 접근
$firstUl.firstElementChild.firstChild;

//2. 형제, 부모 노드 탐색
const $secondLi = document
  .querySelector('section')
  .querySelector('li:nth-child(2)');

//Node의 메서드들
$secondLi.previousSibling;
$secondLi.nextSibling;

// Element의 메서드들
$secondLi.previousElementSibling;
$secondLi.nextElementSibling;

// Node의 기능
$secondLi.parentNode;
// 💡 역시 Node의 기능 - 부모 노드가 Element일 때만 반환
$secondLi.parentElement;
$secondLi.parentNode === $secondLi.parentElement;