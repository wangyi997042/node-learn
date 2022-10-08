const fs = require('fs');
const path = require('path')

// fs.readFile('./download.js', (error, data) => {
//   if(error) throw error;
  
//   console.log(data);
// })
console.log(__dirname)

const data = fs.readFileSync(__dirname + '/01-run.js')
console.log(data);