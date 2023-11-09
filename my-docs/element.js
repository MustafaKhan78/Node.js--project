const fs = require("fs");
const os = require("os")

console.log(os.cpus().length);

// console.log("1");
//Blocking...
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);
// console.log("2");

// Non - Blocking
// fs.readFile("./contact.txt","utf-8",(err,result) =>{
//     console.log(result);
// })

// console.log('2');
// console.log('3');
// console.log('4');


// Default Threasd  pool Size = 4
// Max? - mere leptop me  = 8