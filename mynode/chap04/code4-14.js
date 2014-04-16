/**
 * New node file
 */
var fs = require('fs');

var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);