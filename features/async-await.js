//same as c#, you can use an async funtion as sync by await
//async support start from nodejs 7

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};

var start = async function () {
    console.log('start');
    await sleep(3000);
    console.log('end');
    
    console.log('start again');
    sleep(3000);
    console.log('end again');
};

start();