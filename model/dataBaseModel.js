const mongodb = require('../config/database');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LutadoresSchema = new Schema({
    id: {type: Number, require: true},
    Nome: {type: String, require: true},
    Apelido: {type: String, require: true},
    Idade: {type: Number, require: false},
    Altura: {type: Number, require: true},
    Peso: {type: Number, require: true},
    Nacionalidade: {type: String, require: true},
    PrimeiraAparicao: {type: String, require: true},
    EstiloLuta: {type: String, require: false},
    Descricao: {type: String, require: true},
    Imagem: {type: String, require: true},
    Golpe1: {type: String, require: false},
    DescricaoGolpe1: {type: String, require: false},
    ImagemGolpe1: {type: String, require: true},
    Golpe2: {type: String, require: false},
    DescricaoGolpe2: {type: String, require: false},
    ImagemGolpe2: {type: String, require: true},
    Golpe3: {type: String, require: false},
    DescricaoGolpe3: {type: String, require: false},
    ImagemGolpe3: {type: String, require: true}

});

module.exports = mongoose.model('Lutadores', LutadoresSchema);