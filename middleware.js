

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
module.exports = middleware;