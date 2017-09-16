class aIterator {
    constructor(end) {
        this.start = 0;
        this.endNumber = end;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        this.start = this.start + 1;
        if (this.start > this.endNumber) {
            return { done: true, value: undefined };
        }
        return { done: false, value: this.start - 1 };
    }
};

var i = new aIterator(10);
for (item of i){
    console.log(item);
}
var $iterator = i[Symbol.iterator]();
var $result = $iterator.next();
while (!$result.done) {
    console.log($result.value);
    $result = $iterator.next();
}

var i2 = new aIterator(20);
for (item of i2){
    console.log(item);
}
