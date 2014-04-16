/**
 * New node file
 */
// exit 이벤트를 연결합니다.
process.on('exit', function () {
	console.log('안녕!',arguments);
	console.log(arguments[0]);
});

process.exit();

// 이벤트를 강제로 발생시킵니다.
process.emit('exit', 1);
process.emit('exit', 1, 2);
process.emit('exit', 1, 2, 3);
process.emit('exit', 1, 2, 3, 4);

// 프로그램 실행 중
console.log('프로그램 실행 중');