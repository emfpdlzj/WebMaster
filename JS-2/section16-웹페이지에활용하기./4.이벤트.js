//addEventListener - EventTarget의 기능

//첫 번째 인자로 주어진 이름의 이벤트 발생시 두 번째 인자로 주어진 콜백함수 실행
//MDN:https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
//이벤트 목록:https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events

//click 이벤트
// 요소가 클릭되었을 때
document.querySelector('#button1')
  .addEventListener('click', () => {
    alert('alarm ! ');
  });
//alert - 주어진 메시지로 알림 팝업 띄움

//이벤트 객체
document.querySelector('#button1')
  .addEventListener('click', (e) => {
    console.log(e);
  });
//프로토타입을 따라 올라가 볼 것

//💡 이벤트 리스너에서의 this
document.querySelector('#button1')
  .addEventListener('click', function (e) {
    console.log(this);
    console.log(e.target);
    this.textContent = 'clicked';
  });

// ♻️ 새로고침 후 실행
document.querySelector('#button1')
  .addEventListener('click', (e) => {
    console.log(this);
    console.log(e.target);
    e.target.textContent = '클릭됨';
  });

//function 선언 함수와 화살표 함수 비교

//mouseenter, mouseleave 이벤트
// 마우스 커서가 들어올 / 나갈 때


//💡 같은 이벤트에 대해 여러 핸들러 등록 가능

//focus, blur 이벤트
// 요소가 포커스(입력을 위해 선택)되었을 때 / 해제되었을 때

//keyup 이벤트
// 키보드 키가 눌린 후 올라올 때
// keydown, keypress와 비교


// change 이벤트 : 인풋 요소의 값이 바뀔 때
document.querySelector('#school')
  .addEventListener('change', (e) => {
    console.log(e.target.value);
    fillRaceTable();
  });

