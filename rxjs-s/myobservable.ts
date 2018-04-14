
export class DataSource {
    private _id;
    private count;
    private subscribed:boolean = false;
    public ondata = (n)=>{};
    public oncomplete = () => { };
    public onerror = (err) => { };
    constructor(count) {        
        this.count = count;        
    }

    emit(n) {       
        if (this.ondata) {
            this.ondata(n);
        }
        if (n === this.count) {
            if (this.oncomplete) {
                this.oncomplete();
            }
            this.destroy();
        }
    }
    subscribe(){
        if(this.subscribed) return;

        this.subscribed = true;
        let i = 0;
        this._id = setInterval(() => this.emit(i++), 200);
    }

    destroy() {
        clearInterval(this._id);
    }
}

export class MyObservable {

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
   
    private dataSource;
    private subscribed;   

    constructor(dataSource: DataSource) { 
        this.dataSource = dataSource;
        this.dataSource.ondata = (e) => this.next(e);
        this.dataSource.onerror = (err) => this.error(err);
        this.dataSource.oncomplete = () => { 
            this.complete();              }   
    }

    subscribe(observer: MyObserver) {    
       this.dataSource.subscribe();              
       this.subscriptions.push(observer);          
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
        this.destroyDataSource();
    }

    private destroyDataSource(){
       this.dataSource.destroy();
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

let ob = new MyObservable(new DataSource(20));
setTimeout (() => ob.subscribe(new MyObserver((n) => console.log(n), null, () => console.log("...completed"))), 2000);
ob.subscribe(new MyObserver((n) => console.log(n), null, () => console.log("stream completed")))


