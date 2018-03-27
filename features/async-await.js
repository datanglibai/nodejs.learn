//same as c#, you can use an async funtion as sync by await
//async support start from nodejs 7

var sleep = function(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, time);
    })
};

var p1 = function(a) {
        return Promise.resolve(a);
    }
    //var p2 = function(a) { return Promise.resolve('data2');
var p3 = function(a, b) {
    return Promise.resolve(a + " " + b);
}

// var start = async function() {
//     console.log('start');
//     await sleep(3000);
//     console.log('end');

//     console.log('start again');
//     sleep(3000);
//     console.log('end again');
// };

var startProcessDataInside = async function(a, b) {
    var d1 = await p1("await " + a);
    var d2 = await p1("await " + b);
    var d3 = await p3(d1, d2);
    console.log(d1);
    console.log(d2);
    console.log(d3);
    console.log("test1");
};

var startProcessData = async function(a, b) {
    var d1 = await p1("await " + a);
    await startProcessDataInside("inside data1", "inside data2");
    var d2 = await p1("await " + b);
    var d3 = await p3(d1, d2);
    console.log(d1);
    console.log(d2);
    console.log(d3);
    console.log("test1");
};

var startProcessData2 = function() {
    p1.then(data => console.log(data));
    p2.then(data => console.log(data));
    //p2.then(data=> console.log(data));;
    console.log("test2");
}

var anotherfunc = function() {
    console.log("this is the last one?");
}

startProcessData("data1", "data2");
//startProcessData("data11", "data22");
anotherfunc();