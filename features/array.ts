// const odd = [1, 3, 5];
// const numberSequnce = odd.map(x => [x, x + 1]);
// console.log(numberSequnce);

// const newSequece = numberSequnce.reduce((farr, item) => farr.concat(item));
// console.log(newSequece);

// let test = {
//     "indexUnit": "ft",
//     "fragments": [
//         {
//             "id": "bb223024-35ba-410a-882d-4224a4f1a6c0",
//             "spliceId": "c63ac160-d32d-4ba3-af07-2c1546d9fe55",
//             "source": {
//                 "sourceId": "3",
//                 "type": "relog"
//             },
//             "priority": 2,
//             "startDepth": 9490.434258319434,
//             "endDepth": 9500.251098597213
//         },
//         {
//             "id": "79c7b221-78be-44eb-8c28-922f456365aa",
//             "spliceId": "c63ac160-d32d-4ba3-af07-2c1546d9fe55",
//             "source": {
//                 "sourceId": "6",
//                 "type": "relog"
//             },
//             "priority": 3,
//             "startDepth": 9489.820547598378,
//             "endDepth": 9572.647515190973
//         },
//         {
//             "id": "9ed718d3-0100-48ff-984d-259b76ba8246",
//             "spliceId": "c63ac160-d32d-4ba3-af07-2c1546d9fe55",
//             "source": {
//                 "sourceId": "1",
//                 "type": "relog"
//             },
//             "priority": 4,
//             "startDepth": 6309.343813316533,
//             "endDepth": 6634.833670126525
//         }
//     ],
//     "id": "c63ac160-d32d-4ba3-af07-2c1546d9fe55",
//     "wellId": "6318f362-c2d5-433b-9f46-2e90fc55c35d",
//     "wellboreId": "345f478a-7552-4f26-9326-88eedbe5e925",
//     "name": "Splice 1",
//     "referenceChannel": "TELEPACER.GR"
// };



// let newResult = test.fragments.sort((a, b) => b.priority - a.priority);
// let splicePoints = [];

// function interSect(v, array) {
//     return array.some(x => v >= x.startDepth && v < x.endDepth);
// }

// for (let i = 0; i < newResult.length; i++) {
//     if (splicePoints.length === 0) {
//         splicePoints.push({
//             startDepth: newResult[i].startDepth,
//             removeStart: false,
//             endDepth: newResult[i].endDepth,
//             removeEnd: false
//         });
//         continue;
//     }

//     let newPoint = {
//         startDepth: newResult[i].startDepth,
//         removeStart: interSect(newResult[i].startDepth, splicePoints),
//         endDepth: newResult[i].endDepth,
//         removeEnd: interSect(newResult[i].endDepth, splicePoints)
//     };
//     console.log(newPoint);
//     splicePoints.push(newPoint);

// }
// console.log(splicePoints);

// const filteredResult = splicePoints.map((v) => {
//     let res = [];
//     if (!v.removeStart)
//         res.push(v.startDepth);
//     if (!v.removeEnd)
//         res.push(v.endDepth);
//     return res;
// }).reduce((farr, item) => farr.concat(item));

// console.log(filteredResult);



enum test {
    To = 0,
    From = 1
}

let a = 0;
if (a === test.To)
    console.log("yes")
