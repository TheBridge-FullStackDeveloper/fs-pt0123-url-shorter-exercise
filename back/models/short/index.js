// Importa las consultas SQL
const { generatorShort, dynamicShort } = require('./queries')

// Define una funcion para generar un short link y guardarlo en la base de datos
const postShortGenerator = (db) => async (req) => {
    try {
        // ejecuta la consulta SQL para guardar el nuevo link corto
        // asume que generatorShort es una función que genera la consulta SQL 
        // y que req.body y req.short contienen los datos necesarios
        const response = await db.query(generatorShort(req.body, req.short));

        // Retorna un objeto indicando que la operación fue exitosa y los resultados
        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.error(error) // Utiliza console.error para registrar errores
        return {
            ok: false,
            message: error.message,
        }
    }
}

// Define funcion para obtener una link a partir de su version corta
const getShortDynamic = (db) => async (params) => {
    try {
        // Ejecuta la consulta SQL para obtener el link original a partir de la versión corta
        const response = await db.query(dynamicShort(params))

        // Retorna un objeto indicando que la operación fue exitosa y los resultados
        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.error(error) // Utiliza console.error para registrar errores
        return {
            ok: false,
            message: error.message,
        }
    }
}

// Exporta las funciones para que puedan ser utilizadas en otros archivos
module.exports = {
    postShortGenerator,
    getShortDynamic
}
