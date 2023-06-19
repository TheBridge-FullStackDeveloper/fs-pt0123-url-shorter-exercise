const router = require('express').Router();
const urlControllers = require('../controllers/urls');

// Creando la ruta que guarda los links ingresados por el usuario
module.exports = ( db ) =>{

    router.post( '/generator', urlControllers.newUrl( db ) )
    router.get( '/:id', urlControllers.updateUrlData( db ), )

    return router

}