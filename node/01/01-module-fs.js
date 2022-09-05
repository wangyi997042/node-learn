const fs = require("fs");

// let data = fs.readFileSync('./package.json');
// console.log(data.toString());

fs.readFile('./package.json', (err, data) => {
  console.log(data.toString());
})
