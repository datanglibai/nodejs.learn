var async = require('async');

async.auto({
    task_a: (callback) => {
        resolveP().then((item) => {
            console.log('in task_a');
            callback(null, 'result_a');
        }).catch((err) => {
            console.log('error in task_a', err);
            callback(err, null);
        })
    },
    task_b: ['task_a', (results, callback) => {
        try {
            //without try catch, there maybe Error: Callback was already called.
            //because unhandled error will be catched by previous task.
            console.log('in task_b');
            callback(null, 'result_b');
        } catch (err) {
            console.log('error in task_b', err.message);
            callback(err, null);
        }
    }],
    task_c: ['task_a', (results, callback) => {
        rejectP().then((item) => {
            console.log('in task_c');
            callback(null, 'result_c');
        }).catch((err) => {
            console.log('error in task_c', err);
            callback(err, null);
        })

    }],
    task_d: ['task_b', 'task_c', (results, callback) => {
        console.log('in task_d');
        callback(null, 'result_d');
    }]
}, function(err, results) {
    console.log('err = ', err);
    console.log('results: \n', results);
});

function resolveP() {
    return new Promise((resolve, reject) => {
        resolve('promise return good');
    })
}

function rejectP() {
    return new Promise((resolve, reject) => {
        reject('promise return bad');
    })
}