// http://developmentholic.blogspot.kr/2017/02/react-08-create-react-app-express.html

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

//bodyParser 
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, './../public')));

app.get('/api', (req, res) => {
    return res.send('Hello world');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});