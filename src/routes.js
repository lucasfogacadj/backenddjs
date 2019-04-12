//importa o express
const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
//variavel routes
const routes = express.Router();
//import BoxController
const BoxController = require('./controllers/BoxController');
//import FileController
const FileController = require('./controllers/FileController');

//rotas
routes.post("/boxes", BoxController.store);

routes.get("/boxes/:id", BoxController.show);


routes.post(
    "/boxes/:id/files",
    multer(multerConfig).single('file'),
    FileController.store
);

//exporta a variavel routes
module.exports = routes;