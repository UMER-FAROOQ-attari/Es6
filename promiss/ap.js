// Write a promise that resolves after 2 seconds and prints "Promise Resolved".
let promis = new Promise((resolve , reject)=> {
   setTimeout(() => {
     let ans = true;
    if (ans){
        reject("Promise Reject")
    }
    else{
        resolve("Promise Resolved")
    }
   }, 2000);
})
promis.then((e)=>{
console.log(e)
}).catch((f)=>{
    console.log(f)
})
