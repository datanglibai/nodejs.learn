var promise = new Promise((resolve,reject)=>{
    var data = [1,2,3]
    if(data.length > 3)
         resolve(data)
    else
        reject(new Error("array length invalid"))
})

promise.then(res => {
    console.log(res)
}).catch(err => console.log(err));