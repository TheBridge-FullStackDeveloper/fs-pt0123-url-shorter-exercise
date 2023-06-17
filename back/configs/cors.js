const errors = require('../misc/errors')
const WHITELIST = ["localhost"]

module.exports = {
  origin: (origin, callback) => {
    if(!origin) return callback(null, true)

    const match = WHITELIST.find((domain) => origin.includes(domain))

    match ? callback(null, true) : callback(errors['cors'])
  },
  credentials: true,
}
// est un mécanisme de sécurité intégré aux navigateurs web qui contrôle les requêtes HTTP entre 
// différents domaines. En définissant ces paramètres, le serveur contrôle quelles requêtes sont autorisées 
// et lesquelles sont bloquées.

