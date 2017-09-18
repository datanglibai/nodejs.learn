var promise = new Promise((resolve, reject) => {
    var data = [1, 2, 3]
    if (data.length > 3)
        resolve(data)
    else
        reject(new Error("array length invalid"))
})

promise.then(res => {
    console.log(res)
}).catch(err => console.log(err));


function asyncFunc() {
    return new Promise((resolve, reject) => { // (A)
        setTimeout(() => resolve('DONE'), 1000); // (B)
    });
}
asyncFunc()
    .then(x => console.log('Result: ' + x));