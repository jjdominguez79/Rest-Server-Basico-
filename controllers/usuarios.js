const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { nombre = 'No name', jwt } = req.query;

    res.json({
        msg: 'get API - controlador',
        nombre,
        jwt
    })
}
const usuariosPost = (req, res = response) => {

    // Aqui leemos lo que viene en la petición POST y Desestructuramos lo que necesitamos
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    })

}
const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        id,
        msg: 'put API - controlador'
    })
}
const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - controlador'
    })
}
const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}