//async 함수

// 프로미스를 기반으로 동작
// 마치 동기 코드처럼 직관적으로 코딩을 할 수 있음
function getMult10Promise(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * 10);
    }, 1000);
  });
}

async function doAsyncWorks(){
  const res1=await getMult10Promise(1);
  console.log(res1);

  const res2 = await getMult10Promise(1);
  console.log(res2);

  const res3 = await getMult10Promise(1);
  console.log(res3);
}
//await는 그 Promise가 끝날 때까지 “해당 async 함수(doAsyncWorks)만” 멈춰서 기다린다.await가 프로그램 전체를 멈추는 게 아니라, doAsyncWorks 함수 안에서만 일시정지시킨다.

doAsyncWorks();
console.log('이거먼저 출력');
//⭐ await - 코드의 진행을 멈추고 프로미스로부터 답을 받아냄
// await은 async 함수 또는 모듈 내에서만 사용 가능

//💡 reject 가능성이 있는 경우 try...catch...finally 문으로
// 일반 Promise문보다 가독성 좋음

