'use strict';
const Producto = require('../models/producto');

// Guardar producto
async function crearProducto(datosProducto) {
    try {
        const producto = new Producto(datosProducto);
        return await producto.save();
    } catch (err) {
        throw new Error(`Error al crear el producto: ${err}`);
    }
}

// Obtener producto por ID [cite: 735]
async function obtenerProductoPorId(id) {
    try {
        return await Producto.findById(id);
    } catch (err) {
        throw new Error(`Error al obtener el producto: ${err}`);
    }
}

// Obtener TODOS los productos (Para la pág 25)
async function obtenerProductos() {
    try {
        return await Producto.find({});
    } catch (err) {
        throw new Error(`Error al listar productos: ${err}`);
    }
}

// Actualizar producto [cite: 856]
async function actualizarProducto(id, datosProducto) {
    try {
        // new: true devuelve el dato ya cambiado
        return await Producto.findByIdAndUpdate(id, datosProducto, { new: true });
    } catch (err) {
        throw new Error(`Error al actualizar el producto: ${err}`);
    }
}

// Eliminar producto (Para la pág 25) [cite: 957]
async function eliminarProducto(id) {
    try {
        return await Producto.findByIdAndDelete(id);
    } catch (err) {
        throw new Error(`Error al eliminar el producto: ${err}`);
    }
}

module.exports = {
    crearProducto,
    obtenerProductoPorId,
    obtenerProductos,
    actualizarProducto,
    eliminarProducto
};