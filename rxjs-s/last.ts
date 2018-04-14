import * as Rx from 'rxjs'
//import {} as Rx from 'rxjs'


/* Without predicate */
var ob1 = Rx.Observable.range(0, 10);
var ob2 = Rx.Observable.range(15, 5);
var source = Rx.Observable.concat(ob2,ob1.filter(v=> v%2 == 0)).last();

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });

// => Next: 9
// => Completed

/* With predicate */
// var source = Rx.Observable.range(0, 10)
//   .last(function (x, idx, obs) {
//     return x % 2 === 0;
//   });

// var subscription = source.subscribe(
//   function (x) {
//     console.log('Next: %s', x);
//   },
//   function (err) {
//     console.log('Error: %s', err);
//   },
//   function () {
//     console.log('Completed');
//   });