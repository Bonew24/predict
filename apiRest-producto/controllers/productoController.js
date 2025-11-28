'use strict';
// Importamos el servicio
const productoService = require('../services/productoService');

// 1. GET (Uno)
async function obtenerProductoPorId(req, res) {
    try {
        const producto = await productoService.obtenerProductoPorId(req.params.id);
        if (!producto) return res.status(404).send({ mensaje: 'El producto no existe' });
        res.status(200).send({ producto });
    } catch (err) {
        res.status(500).send({ mensaje: `Error: ${err.message}` });
    }
}

// 2. POST (Crear)
async function crearProducto(req, res) {
    try {
        const productoStored = await productoService.crearProducto(req.body);
        res.status(200).send({ producto: productoStored });
    } catch (err) {
        res.status(500).send({ mensaje: `Error al guardar: ${err.message}` });
    }
}

// 3. PUT (Actualizar)
async function actualizarProducto(req, res) {
    try {
        const productoUpdated = await productoService.actualizarProducto(req.params.id, req.body);
        if (!productoUpdated) return res.status(404).send({ mensaje: 'El producto no existe' });
        res.status(200).send({ producto: productoUpdated });
    } catch (err) {
        res.status(500).send({ mensaje: `Error al actualizar: ${err.message}` });
    }
}

// 4. GET ALL (Listar - Pág 25)
async function obtenerProductos(req, res) {
    try {
        const productos = await productoService.obtenerProductos();
        res.status(200).send({ productos });
    } catch (err) {
        res.status(500).send({ mensaje: `Error al listar: ${err.message}` });
    }
}

// 5. DELETE (Borrar - Pág 25)
async function eliminarProducto(req, res) {
    try {
        const productoDeleted = await productoService.eliminarProducto(req.params.id);
        if (!productoDeleted) return res.status(404).send({ mensaje: 'El producto no existe' });
        res.status(200).send({ mensaje: 'Producto eliminado', producto: productoDeleted });
    } catch (err) {
        res.status(500).send({ mensaje: `Error al borrar: ${err.message}` });
    }
}

// EXPORTAR TODO (Aquí estaba tu fallo antes)
module.exports = {
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    obtenerProductos,
    eliminarProducto
};