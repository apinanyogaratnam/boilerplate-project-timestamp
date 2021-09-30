var express = require('express');
var app = express();
var bodyParser = require('body-parser');

function toTimestamp(year,month,day,hour,minute,second){
    var datum = new Date(Date.UTC(year,month-1,day,hour,minute,second));
    return datum.getTime()/1000;
}

app.get("/api/:date", function(req, res) {
    console.log(req.params.date);
    res.json({
        "unix": 1451001600000, 
        "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
    });
});

module.exports = app;
