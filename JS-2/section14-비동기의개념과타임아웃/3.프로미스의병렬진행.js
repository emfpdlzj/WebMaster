//여러 프로미스를 병렬 처리하기 위한 Promise의 정적 메서드들
let DEADLINE = 450;

function getRunPromise (name){
  return new Promise((resolve, reject)=>{
    const time = 1000 + Math.random()*500;

    setTimeout(()=>{
      if(time<DEADLINE){
        console.log(`${name}도착 :${(time/1000)}초`);
        resolve({name,time});
      }else{
        reject((`${name}시간초과`));
      }
    }, time);
  });
}

//all - 👉 MDN 문서 보기

// 프로미스의 배열을 받아 동시에 진행
// 모두 성공하면 resolve된 값들을 배열로 반환 - then으로 받음
// 하나라도 실패하면 catch 실행
// 한 명이라도 탈락하면 전체 탈락
Promise.all(
  '철수,영희,돌준,정아,길돈'
    .split(',')
    .map(getRunPromise)
)
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    console.log('- - 경기 종료 - -');
  });
// 성공시 탑3 표시
Promise.all(
  '철수,영희,돌준,정아,길돈'
    .split(',')
    .map(getRunPromise)
)
  .then(arr => {
    return arr.sort((a, b) => {
      return a.time - b.time
    })
      .map(({ name }) => name)
      .splice(0, 3)
      .join(', ');
  })
  .then(top3 => {
    console.log(`탑3: ${top3}`);
  })
  .catch(console.error)
  .finally(() => {
    console.log('- - 경기 종료 - -');
  });
//Promise 체인에서 then의 매개변수는 바로 이전 then이 return한 값이다.

//allSettled 

// 주어진 프로미스들의 결과를 배열로 출력
// 실패 유무 관계없이 then으로 배열 반환
Promise.allSettled(
  '철수,영희,돌준,정아,길돈'
    .split(',')
    .map(getRunPromise)
)
  .then(arr => {
    return {
      succ: arr.filter(result => {
        return result.status === 'fulfilled'
      }),
      fail: arr.filter(result => {
        return result.status === 'rejected'
      })
    }
  })
  .then(res => {
    res.succ.sort((a, b) => {
      return a.value.time - b.value.time;
    });
    console.log(
      `완주: ${res.succ.length}명 (1등: ${res.succ[0].value.name})`
    );
    console.log(
      `탈락: ${res.fail.length}명`
    );
  })

  .finally(() => {
    console.log('- - 경기 종료 - -');
  });

//any 
// 가장 먼저 성공한 프로미스의 결과를 then으로 반환
// 모두 실패시 오류 발생
Promise.any(
  '철수,영희,돌준,정아,길돈'
    .split(',')
    .map(getRunPromise)
)
  .then(console.log)
  // ⚠️ 모두 실패해도 catch는 동작하지 않음
  .finally(() => {
    console.log('- - 경기 종료 - -');
  });

  //race - ⭐ 성공이든 실패든 첫 결과물 then 또는 catch로 반환
//⭐ 성공이든 실패든 첫 결과물 then 또는 catch로 반환
// 다섯 주자들이 선택한 도착지로 질주
// 도착지에 '꽝'이 있으면(50% 확률) 실패
function getBombRunPromise(name) {
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      console.log(`🚩 ${name} 도착 - ${(time) / 1000}초`);
      if (Math.random() < 0.5) {
        resolve((`🙌 ${name} 승리!`));
      } else {

        reject((`💣 ${name} 꽝!`));
      }
    }, time);
  });
}
Promise.race(
  '철수,영희,돌준,정아,길돈'
    .split(',')
    .map(getBombRunPromise)
)
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    console.log('- - 경기 종료 - -');
  });
  