const fs = require('fs')

// fs.readFile('./download.js', (error, data) => {
//   if(error) throw error;
  
//   console.log(data);
// })

const data = fs.readFileSync('./01-run.js')
console.log(data);