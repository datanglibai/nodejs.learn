var async = require('async');

var task1 =function(){    
    console.log('------',"task1"); 
}  
  
var task2 =function(){  
    console.log('------',"task2");
}  
  
var task3 =function(){    
    console.log('------',"task3");  
}  

console.log(">>parallel:");
async.parallel([task1, task2, task3]);