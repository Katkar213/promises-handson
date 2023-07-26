// Q.1...
function outer(callback){
    console.log("first");
    inner();
}

function inner(){
    console.log("second")
}

outer(inner);


// Q.2..
setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        setTimeout(()=>{
            console.log(3);
            setTimeout(()=>{
                console.log(4);
                
            },4000)
            
        },3000)
        
    },2000)
},1000)


// Q.3...
const printingNumbers = (number, delay) => {
    return new Promise((resolve) => {
    setTimeout(() => {
    console.log(number);
    resolve();
    }, delay);
    });
    };
    const SequentialNumbers = async () => {
    const promises = [];
    for (let i = 1; i <= 7; i++) {
    promises.push(printingNumbers(i, i * 1000));
    }
    await Promise.all(promises);
    };
    SequentialNumbers();
   

// // Q.4...

var result="yes";
const promise=new Promise((resolve,reject)=>{
  if(result==="yes"){
    console.log("hello")
    resolve("promise resolved");
  }
  else{
    reject("not resolved");
  }
})

promise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err)
})

// Q.9
function promise1(){
   return new Promise((resolve)=>{
setTimeout(()=>{
    resolve("first")
},1000)
})
}

function promise2(){
  return  new Promise((resolve)=>{
setTimeout(()=>{
    resolve("second")
},2000)
})
}

function promise3(){
   return new Promise((resolve)=>{
setTimeout(()=>{
    resolve("third")
},3000)
})
}

Promise.all([promise1(),promise2(),promise3()])
.then((result)=>{
    console.log(result);
})
