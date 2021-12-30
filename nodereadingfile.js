//Reading file
const fs = require("fs");
const textIN = fs.readFileSync("colors.txt","utf-8");
console.log(textIN);
const hello = 'Good afternoon';
console.log(hello);