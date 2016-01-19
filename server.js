var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next){
     console.log('Private route hit !');
     next();
    },
    logger: function (req, res, next){
    	
    	console.log('REquest:' + new Date().toString() + ' ' +req.method + '  ' +req.originalUrl);
    	next();
    } 


}

app.use(middleware.logger);
app.get('/',function(req,res){
  res.send('hello express !');
});
app.get('/about',middleware.requireAuthentication, function(req,res){
  res.send('hello about us!');
});
app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.listen(PORT,function (){
	console.log('Server started on port number:' + PORT + '!');
});