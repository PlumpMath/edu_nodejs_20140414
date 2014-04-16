/**
 * New node file
 */
console.time("alpha");

var output = 1;
for (var i=1; i<100000; i++) {
	output +=1;
}
console.log('result:', output);
console.timeEnd("alpha");