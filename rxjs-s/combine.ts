import * as Rx from 'rxjs'
import { zip } from 'rxjs/observable/zip';
import { combineLatest } from 'rxjs/observable/combineLatest';

let subj1 = new Rx.BehaviorSubject(null);
let subj2 = new Rx.BehaviorSubject(null);
let ob1 = subj1.asObservable();
let ob2 = subj2.asObservable();
var oldA;

combineLatest(ob1, ob2).filter(([a, b]) => (a !== null && b !== null)).subscribe(([a, b]) => {

    if (oldA != a) {
        console.log("start-----------");
        oldA = a;
        console.log(a);
        console.log(b);
        console.log("end-----------");
    }
});

subj1.next("splice1");
subj2.next("focused1");
subj2.next("focused2");
subj2.next("focused3");
subj2.next("focused1");
subj1.next("splice2");