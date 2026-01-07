let score:number =100;
// score = "hello" ;//오류


let data:any = 100;
data= "hello" //오류안남
//any는 어떤타입이든 허용. 하지만 남용금지.

let value:unknown = "hello";
//value.toUpperCasE(); //오류
if(typeof value ==="string"){console.log(value.toUpperCase());}