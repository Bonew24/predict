'use strict';
const express = require('express');
const mongoose = require('mongoose');
// Importar el controlador
const productoController = require('./controllers/productoController'); 

const app = express();
const PORT = 8080;

// Conectar a MongoDB [cite: 816]
mongoose.connect('mongodb://localhost:27017/producto')
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    })
    .catch(err => {
        console.error('Error de conexión a la base de datos:', err);
    });

// Middleware para entender JSON [cite: 821]
app.use(express.json());

// RUTAS (Aquí se definen las URLs)
app.get('/api/producto', productoController.obtenerProductos);
app.get('/api/producto/:id', productoController.obtenerProductoPorId);
app.post('/api/producto', productoController.crearProducto);
app.put('/api/producto/:id', productoController.actualizarProducto);
app.delete('/api/producto/:id', productoController.eliminarProducto);

// Arrancar servidor
app.listen(PORT, () => {
    console.log(`API REST ejecutándose en http://localhost:${PORT}`);
});