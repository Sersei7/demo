const express = require("express");
const app = express();

function isOldEnoughMiddleware(req,res,next){
    if(req.query.age>=14){
        next();
    }
    else{
        res.status(411).json({
            msg: "You are not old enough."
        })
    }
}

app.use(isOldEnoughMiddleware);

app.get('/ride-1', function(req,res){
    res.json({
        msg : "You have successfully riden ride 1"
    });

});

app.get('/ride-2', function(req,res){
    res.json({
        msg : "You have successfully riden ride 2"
    });

});

app.listen(3000);