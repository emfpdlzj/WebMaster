const raceResults = await fetch(
  'https://showcases.yalco.kr/javascript/mockserver/race-result'
)
  .then(response => response.json())

console.log(raceResults);