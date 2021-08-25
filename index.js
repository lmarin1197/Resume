const _ = require('lodash')
const fs = require("fs");

fs.readFile('./file.txt' , 'utf-8' , (err , data) => {
    if(err)
        console.log(err);
    else
        console.log(data);
})
/*
fs is the node filesystem module. We're importing it from the node standard library, which is always in scope (part of the standard node modules), so we don't provide a path at the beginning of the line.
*/

// fs.writeFile("./file.txt", "hello world", err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("done");
//   }
// });