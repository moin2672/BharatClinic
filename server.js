var express = require('express');
var app=express();
app.use(express.static('myApp'));
app.get('/',function(req,res,next){
    res.redirect('/');
});

var port=process.env.PORT || 3000;
app.listen(port);

console.log(`listening on port ${port}`);