//setTimeout 함수
// 첫 번째 인자로 넣은 콜백 함수를 두 번째 인자로 넣은 수 만큼의 밀리초 후 실행(완료가아님. 실행임)
// Web API, Node.js 등 자바스크립트 환경의 기능 - 언어의 기능이 아님
setTimeout(() => {
  console.log('타임아웃!');
}, 1000);

//⭐ 비동기 asynchronous 코드
// 동기 synchronous 코드와 달리, 코드가 순서대로 실행되지 않음
console.log('하나');

setTimeout(() => {
  console.log('둘');
}, 1000); // 💡 0으로 바꿔 다시 실행해 볼 것
//지연시간을 0으로 해도 나중에 실행!


console.log('셋');
// 일반적으로 타임아웃, 네트워크 요청 등 시간이 걸리는 작업에 사용
// 당장 할 수 있는 것들을 먼저 다 하고, 시간이 걸리는 작업은 뒤로 넘기기
// 💡 만약 비동기 방식이 없다면 - 데이터를 받아오는 동안 화면이 어는 등 불편함

function doRace(num, name){
  console.log(`${num} times ${name} start`);

  setTimeout(()=>{
    console.log(`${num}num ${name} arrive!`);
  }, 1000+Math.random()*500);
}
doRace(1, '얄코');

'철수,영희,돌준,정아,길돈'
  .split(',')
  .forEach((itm, idx) => doRace(++idx, itm));


//자바스크립트의 코드는 싱글 스레드로 실행 
//실행시점에 도착하면 동기 코드는 실행
// 비동기 콜백 코드는 환경(Web API 등)으로 넘겨줌

//자바스크립트의 실행환경은 멀티스레드 
// 여러 작업들이 동시다발적으로 진행될 수 있음
//주어진 작업을 마친 작업들은 태스크 큐 task queue 선로로 진입
//이벤트 루프 event loop - 태스크 큐의 작업이 도착하는대로 자바스크립트 실행도로에 올려놓음
// 동기 코드가 모두 실행된 다음 진행됨 - 지연시간을 0으로 해도 나중에 실행되는 이유