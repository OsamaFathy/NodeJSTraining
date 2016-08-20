/**
 * Created by Osama on 8/20/2016.
 */
var express = require("express");
var action = require("./action");
var comedy = require("./comedy");
var app = express();

app.get('/', function(req, res){
    res.send("Welcome to the movies website");
});
app.use('/action', action);
app.use('/comedy', comedy);

app.listen(3000);
