//importa o express
const express = require('express');
//importa mangoose
const mongoose = require('mongoose');
//definir o caminho
const path = require("path");

//importar CORS
const cors = require("cors");

const app = express();
//define o cors
app.use(cors());
//variaveis de ambientes
const env = require('../.env')

//importar o socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);
//inicia a aplicacao

io.on("conecction", socket => {
    socket.on('conectRoom', box => {
        socket.join(box)
    })
})

mongoose.connect(env.urlConnection,
    {
        useNewUrlParser: true
    }
);
//middleware do socket.io 
app.use((resq, res, next) => {
    req.io = io;
    return next();
});


//importa a biblio json para o express
app.use(express.json());
//permite enviar arquivo para aplicacao
app.use(express.urlencoded({ extended: true }));
//ao acessar a url files, redireciona ao arquivo
app.use('/files', express.static(path.resolve(__dirname, "..", "temp")));

//importa o arquivo de rotas
app.use(require('./routes'));

app.listen(3333);