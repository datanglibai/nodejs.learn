var a = {
    name: "nameA",
    message: "this is object a"
}

function changeObj(param){
    param.name = "changed name";
}

function changeObj2(param2){
    param2 = { name: "nameinChangeobj2", message: "this is a new obj in changedobj2"};
    param2.name = "change again in changeobj2";
}

changeObj(a);
console.log(a);

changeObj2(a);
console.log(a);