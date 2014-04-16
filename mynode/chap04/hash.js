/**
 * New node file
 */
var crypto = require('crypto');
var shasum = crypto.createHash('sha1');

shasum.update('crypto_hash', 'utf8');
var output = shasum.digest('hex');
console.log('crypto_hash:', output);