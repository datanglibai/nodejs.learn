let scopeService = require('./scope').scopeService;

let s1 = new scopeService('value1');
s1.setValue();
let s2 = new scopeService('value2');
s2.setValue();
let s3 = new scopeService('value3');
s3.setValue();