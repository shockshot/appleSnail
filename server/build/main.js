import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

var app = express();
var port = 4000;

//bodyParser 
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, './../public')));

app.get('/api', function (req, res) {
    return res.send('Hello world');
});

app.listen(port, function () {
    console.log('Express is listening on port', port);
});