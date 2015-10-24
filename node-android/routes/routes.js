var testlogin = require('config/testlogin');
 
 
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
	
};