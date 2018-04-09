var async = require('async');
var testUtil = require('./test.util');

try {
    async.auto({
        taskA: (callback) => processA(callback),
        taskB: ['taskA', (results, callback) => processB(results, callback)],
        taskC: ['taskA', 'taskB', (results, callback) => processC(results, callback)]
    }, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            console.log(results);
            errorFunction();
        }
    });
} catch (ex) {
    console.log("------", ex.message);
}

function processA(callback) {
    let p = Promise.resolve("A resolved")
    p.then(v =>
            callback(null, "A, " + v)
        )
        .catch(
            (err) => {
                throw err;
            }
        );

}

function processB(results, callback) {
    let p = Promise.resolve("b resolved")
    p.then(v =>
            callback(null, "B, " + v)
        )
        .catch(
            (err) => {
                throw err;
            }
        );

}

function processC(results, callback) {
    throw new Error("from C");
    let p1 = Promise.resolve('foo');
    p1.then(v =>
        callback(null, "C, " + v)
    ).catch(err => console.log("++++++++++", err));
}

function errorFunction() {
    testUtil.testUtilCreateError();
}