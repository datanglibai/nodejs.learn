const util = require('util');

function doSomething(foo, callback) { 
  console.log(foo);
  callback("this is a callback in doSomething");
}

doSomething("foo argument", result => console.log(result));

// add a new function for doSomething
doSomething[util.promisify.custom] = function(foo) {   
  return new Promise((resolve,reject)=>{
   doSomething(foo, ()=>{});
    resolve(foo);
})
};

const promisified_doSomething = util.promisify(doSomething);
promisified_doSomething("promisified argument").then((result => console.log("this is promisified result.")))