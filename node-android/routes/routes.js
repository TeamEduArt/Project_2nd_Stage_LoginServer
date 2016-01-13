var testlogin = require('config/testlogin');
var appsperr = require('config/appsperr');
var filesend = require('config/filesend');
 
 
module.exports = function(app) {
 
 
 
    app.get('/', function(req, res) {
 
        res.end("Project 2nd Stage Login Server");
    });
 

    app.post('/testlogin',function(req,res){
        var userid = req.body.userid;
        var password = req.body.password;
            
        testlogin.login(userid,password,function (found) {
            console.log(found);
            res.json(found);

        }); 
    });
    
    app.post('/appsperr', function(req,res){
        var userid = req.body.userid;
        var operation = req.body.operation;
        
        appsperr.appsperr(userid, operation, function (found) {
            console.log(found);
            res.json(found);
        });
    });
    
    app.post('/filesend', function(req,res){
        var userid = req.body.userid;
        var operation = req.body.operation;
        
        filesend.filesend(userid, operation, function (found) {
            console.log(found);
            res.json(found);
        });
    });
	
};