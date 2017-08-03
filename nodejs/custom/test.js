function fun(http){
//    console.log('Hello World!');
    let html_ = "<meta charset='utf-8'>";
        html_ += "<h2>Hello World!你好，世界！</h2>";
    http.createServer(function(req,res){
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(html_);
        res.end();
    }).listen(3000);
    console.log("success!");
}

//module.exports.fun = fun;
exports.fun = fun;