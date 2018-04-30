// http://developmentholic.blogspot.kr/2017/02/react-08-create-react-app-express.html

import express from 'express';
import helmet from 'helmet';
import path from 'path';
import bodyParser from 'body-parser';
import api from './routes';
import models from './models';

const app = express();
const port = 4000;

const reqLogger = (req, res, next) => {
    const date = new Date();
    console.log(`[${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}][${req.method}] - ${req.url}`);
    next();
}


app.use(helmet());
app.disable('x-powered-by');

//bodyparser
app.use(bodyParser.json());


// app.use('/', express.static(path.join(__dirname, './../../public')));

app.use('/api', reqLogger, api);

models.sequelize.sync().then(function () {
    console.log("----------------------------------------db-loading-has-been-done.");
    app.listen(port, () => {
        console.log('Express is listening on port', port);
        console.log(' █████╗ ██████╗ ██████╗ ██╗     ███████╗███████╗███╗   ██╗ █████╗ ██╗██╗          █████╗ ██████╗ ██╗');
        console.log('██╔══██╗██╔══██╗██╔══██╗██║     ██╔════╝██╔════╝████╗  ██║██╔══██╗██║██║         ██╔══██╗██╔══██╗██║');
        console.log('███████║██████╔╝██████╔╝██║     █████╗  ███████╗██╔██╗ ██║███████║██║██║         ███████║██████╔╝██║');
        console.log('██╔══██║██╔═══╝ ██╔═══╝ ██║     ██╔══╝  ╚════██║██║╚██╗██║██╔══██║██║██║         ██╔══██║██╔═══╝ ██║');
        console.log('██║  ██║██║     ██║     ███████╗███████╗███████║██║ ╚████║██║  ██║██║███████╗    ██║  ██║██║     ██║');
        console.log('╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝     ╚═╝');
    });
});