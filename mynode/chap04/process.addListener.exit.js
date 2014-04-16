/**
 * New node file
 */
process.addListener('exit',function() {
	console.log('program exit');
});

process.addListener('exit',function() {
	console.log('program exit2');
});

process.on('uncaughtException',function() {
	console.log('uncaughtException !');
});

process.on('uncaughtException',function() {
	console.log('uncaughtException2 !');
});

var count = 0;

var id = setInterval(function() {
	count++;
	if(count == 3) {
		clearInerval(id);
	}
	
	error.error.error();
}, 200);