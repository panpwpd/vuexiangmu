var http = require("http")
http.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text/html;charset=utf-8","Access-Control-Allow-Origin":"*"})
	if(req.url!="/favicon.ico"){
		res.write("创建服务器成功")
		res.end()
	}
}).listen(3000)
