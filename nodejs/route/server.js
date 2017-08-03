let http = require('http');
let url = require('url');

http.createServer(function(req,res){
    let path_ = url.parse(req.url).pathname;
    res.writeHead(200,{"Content-type":"text/html"});
    switch(path_){
        case "/":
            res.write("<meta charset='UTF-8'>这是首页！");
            res.end();
        break;
        case "/news":
            res.write("<meta charset='UTF-8'>资讯新闻！");
            res.end();
        break;
        case "/user":
            res.write("<meta charset='UTF-8'>用户列表！");
            res.end();
        break;
        default:
            res.write("<meta charset='UTF-8'>该页面不存在 404！");
            res.end();
        break;
    }
    
}).listen(3000);

console.log("success");