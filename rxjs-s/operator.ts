import { first } from "rxjs/operators";

class DataSource2 {
    private _id;
    public count;
    private subscribed: boolean = false;
    private arrayData: any[];
    public ondata = (n) => { };
    public oncomplete = () => { };
    public onerror = (err) => { };
    constructor(arrayData: any[]) {
        this.arrayData = arrayData;
        this.count = arrayData.length;
    }

    emit(n) {
        if (this.ondata) {
            this.ondata(this.arrayData[n]);
        }
        if (n === this.count - 1) {
            if (this.oncomplete) {
                this.oncomplete();
            }
            this.destroy();
        }
    }
    subscribe() {
        if (this.subscribed) return;

        this.subscribed = true;
        let i = 0;
        this._id = setInterval(() => this.emit(i++), 200);
    }

    destroy() {
        clearInterval(this._id);
    }
}

class MyObservable2 {

    private subscriptions: MyObserver2[] = [];
    //private dataList;
    private dataSource;
    private subscribed;
    private promiseSource;
    constructor(dataSource: DataSource2) {
        if (dataSource) {
            this.dataSource = dataSource;
            this.dataSource.ondata = (e) => this.next(e);
            this.dataSource.onerror = (err) => this.error(err);
            this.dataSource.oncomplete = () => {
                this.complete();
            }
        }
    }

    static from(arrayData: any[]) {
        return new MyObservable2(new DataSource2(arrayData));
    }

    static fromPromise(p: Promise<any>) {
        let ob = new MyObservable2(undefined);
        ob.promiseSource = p;
        return ob;
    }

    subscribe(observer: MyObserver2) {
        if (this.dataSource)
            this.dataSource.subscribe();
        this.subscriptions.push(observer);
        if (this.promiseSource) {
            this.promiseSource.then(v => this.next(v));
        }
    }

    last(){
        let lastItem;
        return MyObservable2.fromPromise(new Promise((res, rej) => {
            this.subscribe(new MyObserver2((n) => { lastItem = n; }, null, () => { res(lastItem) }));
        }));
    }

    private next(n) {
        this.subscriptions.forEach(element => {
            element.next(n);
        });
    }

    private error(n) {
        this.subscriptions.forEach(element => {
            element.error(n);
        });


    }

    private complete() {
        this.subscriptions.forEach(element => {
            element.complete();
        });
        this.destroyDataSource();
    }

    private destroyDataSource() {
        this.dataSource.destroy();
    }

}

class MyObserver2 {
    next: Function;
    error: Function;
    complete: Function;
    constructor(n, e, c) {
        this.next = n;
        this.error = e;
        this.complete = c;
    }
}

let ob2 = MyObservable2.from(["a", "b", "c", "d", "e", "f"]);
// setTimeout (() => ob2.subscribe(new MyObserver2((n) => console.log(n), null, () => console.log("...completed"))), 100);
// ob2.subscribe(new MyObserver2((n) => console.log(n), null, () => console.log("stream completed")))
//let ob3 = MyObservable2.from(["z","y","x","w","v","u"]);

ob2.last().subscribe(new MyObserver2((n) => console.log(n), null, null));

