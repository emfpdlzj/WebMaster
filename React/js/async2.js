const items=[1,2,3];

items.forEach(async (item)=>{
    await doSomething(item);
}); //순서보장 x

for(const item of items){
    await doSomething(item);
} //순서보장
//순차적으로 실행 - 비효율적

await Promise.all(users.map((user)=>sendEmail(user)));
//모든작업이 동시에 실행
//Promise.all은 여러 개의 Promise(비동기 작업)를 “한 번에” 실행하고, 전부 끝나면 결과를 모아서 받는 함수


//then과 await을 혼용하는 실수
//잘못된 방법
const result= await fetchData()
.then((res)=>res.json())
.catch((err)=>console.error("error",err));

//올바른방법
try{
    const res = await fetchData();
    const data = await res.json();
    console.log(data);
}catch(error){
    console.error("error.", error);
}