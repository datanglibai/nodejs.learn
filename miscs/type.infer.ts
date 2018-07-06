type MyType1 = { a: number, b: string};
type MyType2 = { a: number, b: string};

let test2 : MyType2 = {a : 0, b: 'type2'};
let test1 : MyType1 = {a : 0, b: 'type1'};

test1 = test2;

