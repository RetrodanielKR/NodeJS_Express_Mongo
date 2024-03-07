const express = require('express');
const Usuario = require('../models/usuario_model');
const ruta = express.Router();

ruta.get('/', (req,res)=>{
    res.json('Respuesta GET funcionando');
});


module.exports = ruta;