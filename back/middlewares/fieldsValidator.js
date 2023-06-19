const errors = require('../misc/errors')

module.exports = (...fields) => (req, _, next) => {
    for(let field of fields) {
        if(!req.body[field]) return next(errors[400])
    }
// Dans le body il y aura email, username and password

    const { password } = req.body
    
    if(password && password.length < 4) return next(errors['pass_length'])

    next()
}

// Para validar cualquier tipo de form