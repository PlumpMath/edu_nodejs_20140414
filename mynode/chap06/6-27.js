﻿// 모듈을 추출합니다.
var http = require('http');

// 모듈을 사용합니다.
http.createServer(function (request, response) {
    // GET COOKIE
    var cookie = request.headers.cookie;
    console.log(cookie);
    parsed = cookie.split(';').reduce(function(prev, cur) {
    	var splited = cur.split('=');
    	prev[splited[0]] = splited[1];
    	return prev;
    }, {});
    // SET COOKIE
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['name = RintIanTta', 'region = Seoul']
    });

    // 응답합니다.
    response.end('<h1>' + JSON.stringify(parsed) + '</h1>');
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
