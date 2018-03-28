const odd = [1,3,5];
const numberSequnce = odd.map(x=>[x,x+1]);
console.log(numberSequnce);

const newSequece = numberSequnce.reduce((farr,item)=>farr.concat(item));
console.log(newSequece);



