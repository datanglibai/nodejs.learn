let testIntervals = [{start: 100, stop: 500},{start: 150, stop: 600},{start: 800, stop: 3500}];

console.log(testIntervals.reduce((m, c)=>{
    let start = m.start > c.start ? c.start : m.start;
    let stop = m.stop > c.stop ? m.stop : c.stop;
    return {start:start, stop:stop};
}));