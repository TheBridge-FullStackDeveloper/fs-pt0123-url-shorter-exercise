const errors = require('../misc/errors')
const WHITELIST = ["localhost"]
//seul le domaine "localhost" est autorisé. Cela signifie que les requêtes 
//provenant de ce domaine seront autorisées.
module.exports = {

// origin es el que hace la peticion
  origin: (origin, callback) => {
    if(!origin) return callback(null, true)

    const match = WHITELIST.find((domain) => origin.includes(domain))
//Vérifie si l'origine de la requête correspond à un domaine présent dans la liste blanche 
//La méthode find est utilisée pour rechercher un domaine correspondant. 
//Si un domaine correspondant est trouvé, il est stocké dans la variable match.
    match ? callback(null, true) : callback(errors['cors'])
//Vérifie si un domaine correspondant a été trouvé. Si c'est le cas, le callback est appelé
// avec null en tant que premier argument (pas d'erreur) et true en tant que deuxième argument 
//pour autoriser la requête. Sinon, le callback est appelé avec l'erreur errors['cors'], qui est 
//gérée par la suite.
  },
  credentials: true,
//Indique que les requêtes peuvent inclure des info d'identification (cookies, en-têtes d'autorisation, etc.)
}
// est un mécanisme de sécurité intégré aux navigateurs web qui contrôle les requêtes HTTP entre 
// différents domaines. En définissant ces paramètres, le serveur contrôle quelles requêtes sont autorisées 
// et lesquelles sont bloquées.
// Ce code est utilisé pour définir une politique CORS qui permet d'autoriser les requêtes provenant d'un domaine 
//spécifique (dans cet ex, "localhost"). Les autres domaines seront bloqués en renvoyant une erreur CORS.

