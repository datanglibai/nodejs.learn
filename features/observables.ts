import * as Rx from 'rxjs'

//map is one to one
Rx.Observable.from([1,3,5]).map(x=>[x, x+1]).subscribe(v=>console.log(v));

//flat map is one to one sequence, finally to one flat sequence, no nested observables
Rx.Observable.from([1,3,5]).flatMap(x=>[x, x+1]).subscribe(v=>console.log(v));


//one singer sing one word, and rotate
const words = ['Row','row','row','your','boat','gentaly','down','the','stream','merrily','merrily','merrily','life','is','but','a','dream'];
const numWords = words.length;
const singer$ = Rx.Observable
.interval(1000)
.scan(x=>x+1)   //accumulater
.map(count => count % numWords)
.map(index=>words[index]);
//singer$.subscribe(console.log);

// const round$ = Rx.Observable.interval(1000).flatMap(()=>singer$);
// round$.subscribe(console.log);

//switchmap will cancel previous observables!, that's why effects use it to help cancel http request.
//in one word, switchMap emit values from the most recent result.
const round2$ = Rx.Observable.interval(5000).switchMap(()=>singer$);    
round2$.subscribe(console.log);

//next, Observable.never