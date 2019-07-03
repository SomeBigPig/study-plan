const path = require('path')

console.log(path.resolve(__dirname, '../'));
console.log(path.join(__dirname, '../'));
console.log(path.resolve('a/b'));
console.log(path.join('a/b'));