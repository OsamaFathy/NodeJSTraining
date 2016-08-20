/**
 * Created by Osama on 8/20/2016.
 */
var express = require("express");
var router = express.Router();

router.get('/', function (req, res) {
    res.send("Welcome to the action movies page!");
})

router.get('/firstblood', function (req, res) {
    res.send("Rambo: First Blood");
})
module.exports = router;
