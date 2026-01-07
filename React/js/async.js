function fetchData(){
 return new Prmise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("data transfer complete");
    },1000);
 });
}

fetchData()
    .then((result )=>console.log(result));
    .catch((error)=>console.log(error));

async function getData(){
    try{
        const result = await fetchData();
        console.log(result);
    }catch(err){
        console.error("error:",err);
    }
}

getData();

//await과 .then()은 섞어쓰면 코드 흐름이 모호해지고, 에러 처리 누락 위험이 있음. 그러므로 통일
