var express = require('express');
var app = express();
app.use(express.static('public'));
var server = app.listen(5000||process.env.PORT, function () {
    console.log('running on port 5000');
});