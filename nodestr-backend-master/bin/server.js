'use scrict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');

const mongoose = require('mongoose');

//Conecta ao banco
mongoose.connect('mongodb+srv://srv1.3sup7.mongodb.net/<sr1>');

app.set('port',port);

const server = http.createServer(app);
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API Funcionando com Sucesso",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id:id,
        item: req.body
    });
});
const del = router.delete('/', (req, res, next) => {
        res.status(200).send(req.body);  
});

app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);


server.listen(port);
server.on('error', onError);
server.on('listenig' , onListening);

console.log('API iniciada na Porta' + port);

function normalizePort(val) {
    const port = parseInt(val,10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;

    }
    return false;

}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
const bind = typeof port === 'string'?
    'Pipe ' + port :
    'Port ' + port;
switch (error.code) {
    case 'EACCES':
        console.error(bind + ' é necessário privilegios de ADM');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + ' porta está em uso.');
        process.exit(1);
        break;
    default:
        throw error;
   }    
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    debug('Listening on ' + bind);
}


