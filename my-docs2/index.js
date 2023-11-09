// const http = require('http');

// const myServer = http.createServer((req, res) => {
//     console.log(req.headers);
//     res.end("Hello Mustafa From Server")
// });

// myServer.listen(8005, () => console.log("Server Started"));


// const http = require('http');
// const fs = require('fs');
// const url = require("url")

// const myServer = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New ReQ Received\n`
//     const myurl = url.parse(req.url, true);
//     console.log(req.method);
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myurl.pathname) {
//             case "/":
//                 if (req.method === 'GET') res.end('Home page')
//                 break;
//             case "/about":
//                 const username = myurl.query.myname;
//                 res.end(`Hi ${username}`);
//                 break;
//             case "/search":
//                 const search = myurl.query.search_query;
//                 res.end("Here are your results for " + search);
//             case '/singup':
//                 if (req.method === 'GET') res.end('This is a singup Form');
//                 else if (req.method === 'POST') {
//                     //DB Query
//                     res.end('Success');
//                 };
//                 break;
//             default:
//                 res.end("404 Not Found")
//                 break;
//         }
//     })
// })

// myServer.listen(5000, () => console.log("Server Started"));


const express = require("express");

const app = express();

app.get("/", (req , res) => {
    return res.send("hello from home page")
});

app.get("/about" , (req , res) => {
    return res.send(`hello ${req.query.name} ${req.query.age}`)
});

app.listen(8000, () => console.log("server started"));