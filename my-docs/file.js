// const { log } = require("console");
const fs = require("fs");


// Sync...
// fs.writeFileSync("./test.txt","hello world")

// Async
// fs.writeFile("./test.txt","hello world Aynscand my name is mustafa ", (err) => {});

// Sync
// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result);

// Async
// fs.readFile("./package.json", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
// })

// fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`)

// fs.cpSync("./test.txt","./copy.txt")

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt"));
fs.mkdirSync("my-docs", {recursive: true })
// fs.mkdirSync("my-docs2", {recursive: true})