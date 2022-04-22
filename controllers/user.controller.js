const { response } = require('express');


const usuariosGet = (req, res = response) => {

    const {q, nombre = "No name", apikey, page = 1} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: 'post API - controller',
        nombre,
        edad
    });
}

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'put API - controller',
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch API - controller'
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API - controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}