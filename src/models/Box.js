//importa mangoose
const mongoose = require('mongoose');

//cria uma nova tabela no banco com essas propriedades
const Box = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Box', Box);