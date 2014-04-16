/**
 * New node file
 */
var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('tick', function() {
	console.log('tick', 'event happened');
});

emitter.emit('tick');