//console.log('Hello World!');
let http = require('http');

var html_ = "<meta charset='UTF-8'>";
    html_ += "<h1 style='color:red'>Hello World!你好，世界！</h1>";
    html_ += "<h2>啦啦啦</h2>";

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"});
//    res.write("Hello World!");
    res.write(html_);
    res.end();
}).listen(3000);

console.log('server success!');