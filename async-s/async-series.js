var async = require('async');

var task1 =function(callback){    
    console.log('------',"task1"); 
    callback(null);   //series need this to control the workflow, parallel does not need it if you don't care about error logging.
}  
  
var task2 =function(callback){  
    console.log('------',"task2");
    callback(null);
}  
  
var task3 =function(callback){    
    console.log('------',"task3");  
}  

console.log(">>series:");
async.series([task1,task2,task3]);

console.log(">>parallel:");
async.parallel([task1, task2, task3]);



var items = ['a','b','c','d'];

async.eachSeries(items, function(item, callback){
    console.log(item);
    // if (item === 'c')
    //     callback("step c has an error, series stopped");
    // else
    callback();
}, function(err){
    if(err) console.log(err);
    })