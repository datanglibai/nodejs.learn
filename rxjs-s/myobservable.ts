
class DataSource {
    private _id;
    constructor() {
        let i = 0;
        this._id = setInterval(() => this.emit(i++), 200);
    }

    emit(n) {
        const limit = 10;
        if (this.ondata) {
            this.ondata(n);
        }
        if (n === limit) {
            if (this.oncomplete) {
                this.oncomplete();
            }
            this.destroy();
        }
    }

    ondata(n) { }

    oncomplete() { }

    onerror(err) { }

    destroy() {
        clearInterval(this._id);
    }
}

class MyObservable {

    // constructor(observer) {
    //     let datasource = new DataSource();
    //     datasource.ondata = (e) => observer.next(e);
    //     datasource.onerror = (err) => observer.error(err);
    //     datasource.oncomplete = () => observer.complete();
    //     return () => {
    //         datasource.destroy();
    //     };
    // }
    private subscriptions : MyObserver[] = [];
    private dataList;
    private dataSource;
    private subscribed;
    constructor (){}

    // constructor(dataSource: DataSource) { 
    //     this.dataSource = dataSource;
    //     this.dataSource.ondata = (e) => this.next(e);
    //     this.dataSource.onerror = (err) => this.error(err);
    //     this.dataSource.oncomplete = () => { 
    //         this.complete();              }   
    // }

    subscribe(observer: MyObserver) {                  
       this.subscriptions.push(observer);   
       this.dataList.forEach(x => this.next(x));
       this.complete();       
    }

    static from(arraylist){
        let ob = new MyObservable( );
        ob.dataList = arraylist;     
        return ob;   
    }
     
    private next(n){
        this.subscriptions.forEach(element => {
            element.next(n);
        });
    }

    private error(n)
    {
        this.subscriptions.forEach(element => {
            element.error(n);
        });


    }

    private complete(){
        this.subscriptions.forEach(element => {
            element.complete();
        });
       // this.dataSource.destroy();
    }

    private destroyDataSource(){
        //this.dataSource.destroy();
    }
    
}

class MyObserver {
    next: Function;
    error: Function;
    complete: Function;
    constructor(n, e, c) {
        this.next = n;
        this.error = e;
        this.complete = c;
    }
}

let ob = MyObservable.from([1,2,3]);
ob.subscribe(new MyObserver((n) => console.log(n), null, () => console.log("...completed")))
ob.subscribe(new MyObserver((n) => console.log(n + 1 ), null, () => console.log("stream completed")))


