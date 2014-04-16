/**
 * New node file
 */
var fs = require('fs');

var data = 'Hello';

fs.writeFile('TextFileOhterWrite.txt',data, 'utf8', function (error) {
	console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');