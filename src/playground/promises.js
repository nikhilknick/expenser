const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('REjected');
    },5000)
});

console.log('Before');

promise.then((data)=>{
console.log(data);
}).catch((error)=>{
console.log(error);
});

console.log('Before');