const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);
// stat('.')
//   .then((stats) => {
//     console.log(stats);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function readStats(dir) {
  try {
    let stats = await stat(dir);
    console.log("await result", stats);
  } catch (err) { // Handle the error.
    console.log(err);
  }
}
readStats('.');