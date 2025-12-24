document.querySelector('span').innerText = '텍스트 변경됨';
//이 스크립트를 HTML 파일에 로드하여 사용하는 방법

//1. 헤드에 스크립트로 로드
<head><script src="./script.js"></script></head>

//스크립트 동작하지 않음 - 스크립트 로드 시점에는 body 요소가 로드되지 않았음
// 스크립트의 크기가 클 경우 그 아래 요소들의 로드가 지연됨 - 동기적 로드

// 2. body 요소들 아래에 로드
<body>
  <span>변경 전..</span>
  <script src="./script.js"></script>
</body>
//동작은 하지만 좋은 코드가 아님 - 문서 줄 수가 많다면...


//3. onload 이벤트 사용
<!DOCTYPE html >
  <html lang="ko">
    <head>
      <title>제대로 파는 자바스크립트</title>
      <script src="./script.js"></script>
    </head>
    <body>
      <span>변경 전...</span>
    </body>
  </html>

//script.js
window.onload = function () {
  this.document.querySelector('span').innerText = '텍스트변경됨';
}

  //스크립트를 실행하기 위한 onload 이벤트 등록 필요
  // 문서의 동기적 로드 문제 여전

  //4.async/defer 로드

  < !DOCTYPE html >
    <html lang="ko">
      <head>
        <title>제대로 파는 자바스크립트</title>

        <!-- 💡 defer로 변경해서 다시 실행해 볼 것 -->
        <script async src="./script.js"></script>
      </head>
      <body>
        <span>변경 전...</span>
      </body>
    </html>

//defer가 가장 좋은 방식
// 비동기적으로 문서를 로드하고 HTML 파싱 후 모두 실행하므로