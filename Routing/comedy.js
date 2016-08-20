/**
 * Created by Osama on 8/20/2016.
 */
var express = require("express");
var router = express.Router();

router.get('/', function (req, res) {
    res.send("Welcome to the comedy movies page!");
})

router.get('/thehangover', function (req, res) {
    res.send("The Hangover I");
})

module.exports = router;