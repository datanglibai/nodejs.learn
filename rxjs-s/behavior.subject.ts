import * as Rx from 'rxjs'
import { zip } from 'rxjs/observable/zip';
interface Payload {
    state: boolean;
    count: number;
}

interface Config {
    isInputChanged: true;
    count: number;
}

export class MySubjectTest {
    private subj = new Rx.BehaviorSubject({ state: false, count: 0 });
    private subj2 = new Rx.BehaviorSubject({ isInputChanged: false, count: 0 });
    private internalSub1;
    private counter1 = 0;
    private counter2 = 0;
    constructor() {
        zip(this.subj.filter(v => v.state != false), this.subj2.filter(v => v.isInputChanged != false)).subscribe((v) => {
            console.log(v);
        });
    }
    
    public startSub1() {
        this.counter2++;
        this.subj2.next({ isInputChanged: true, count: this.counter2 });
    }

    public nextNew() {
        this.counter1++;
        this.subj.next({ state: true, count: this.counter1 });
    }
}

let test = new MySubjectTest();


test.startSub1();
test.nextNew();

test.startSub1();
test.nextNew();

test.nextNew();
test.startSub1();