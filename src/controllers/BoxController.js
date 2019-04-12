const Box = require('../models/Box');

class BoxController {
    async  store(req, res) {
        //recebe a requisicao, e cria um box com os parametros e insere no banco
        const box = await Box.create({ title: req.body.title });
        //responde com json
        return res.json(box);
    }

    //mostrar boxes
    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } }
        });
        return res.json(box);
    }

}

module.exports = new BoxController();