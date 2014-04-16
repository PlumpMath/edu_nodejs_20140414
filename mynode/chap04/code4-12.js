/**
 * New node file
 */
var crypto = require('crypto');

var key = 'secret key';
var input = '0123456789';
var input2 = 'abcdefhijk';


var cipher = crypto.createCipher('aes192', key)
var cipheredOutput = "";
cipheredOutput += cipher.update(input, 'utf8', 'base64');
cipheredOutput += cipher.update(input2, 'utf8', 'base64');
cipheredOutput += cipher.update(input, 'utf8', 'base64');
cipheredOutput += cipher.update(input2, 'utf8', 'base64');
cipheredOutput += cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
var decipheredOutput = "";
decipheredOutput += decipher.update(cipheredOutput, 'base64', 'utf8');
decipheredOutput += decipher.final('utf8');

console.log('원래 문자열: ' + input);
console.log('암호화: ' + cipheredOutput);
console.log('암호화 해제: ' + decipheredOutput);
