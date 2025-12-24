//자세한건 MDN, 구글링을 통해 필요할 때 스스로 학습하자. 

//요소의 내용 확인 및 수정
const $carrot = document
  .querySelector('section > ul > li');


//1. textContent - Node의 기능
// 텍스트에 관한 접근자 프로퍼티
$carrot.textContent
$carrot.textContent = '제주당근';

//2. nodeValue - Node의 기능
// 텍스트 노드 전용 접근자 프로퍼티 - 다른 노드에서는 null 반환
$carrot.firstChild.nodeValue;
$carrot.firstChild.nodeValue = '친환경유전자조작당근';

//3. className - Element의 기능
// 클래스에 관한 접근자 프로퍼티 - 문자열로 다룸

const $onion = document
  .querySelector('section ul')
  .lastElementChild;

$onion.className;

$onion.className;
$onion.className = 'soldout organic';


//4. classList - Element의 기능
// 클래스에 관한 읽기 전용 프로퍼티

$onion.classList;
// 💡 이터러블
[...$onion.classList];

//5. style - HTMLElement의 기능
// 스타일에 관한 읽기 전용 접근자 프로퍼티
$onion.style;

//6. getComputedStyle - 💡 window의 기능
// 인자로 전달받은 요소의 계산된 CSS 속성 정보 반환
const onionCompStyle = window.getComputedStyle($onion);

onionCompStyle;

//7. getAttribute, setAttribute - Element의 기능
// 요소들의 속성에 관한 메서드
const $hyperlink = document.querySelector('a');

$hyperlink.getAttribute('href');

//8. value, checked - 인풋 요소들의 기능
// 인풋 값에 대한 접근자 프로퍼티
const $message = document
  .querySelector('input[name=message]');

const $toggle = document
  .querySelector('input[name=toggle]');



//II. 요소 제거

// removeChild - Node의 기능
// 인자로 주어진 자식 노드를 제거 - 자식 노드이어야 동작
const $ul = document.querySelector('section > ul')
$ul.removeChild($onion);

//⭐ 자식 요소 모두 지우기
while ($ul.firstChild) {
  $ul.removeChild($ul.firstChild);
}

//⚠️ 아래 방법은 비추천
$ul.innerHTML = '';
//요소들을 삭제하지만, 이벤트 핸들러가 걸려 있을 경우 이들은 메모리에 남음

//III. 요소 생성 및 추가

// createElement - Document의 기능
// 인자로 주어진 태그명의 Element 요소 생성하여 반환
const $tomato = document.createElement('li');
$tomato.textContent = '토마토';

$tomato;

// appendChild - Node의 기능
// 인자로 주어진 요소를 자식요소 중 마지막 위치로 이어붙임
$ul.appendChild($tomato);
