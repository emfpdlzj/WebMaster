self.onmessage=function(e){
  const n=e.data;
  let sum=0;
  for(let i=0;i<n;i++){
      sum+=i;
  }
  self.postMessage(sum); //메인 스레드로 결과 전송
};

//메인 스크립트
const worket=new Worker("worker.js"); //워커 인스턴스 생성

worker.onmessage = function(e){console.log("총합은:",e.data)};

worker.postMessage(1_000_000_000); //워커에게 전달(비동기처리)