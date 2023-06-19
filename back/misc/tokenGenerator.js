const crypto = require('crypto');

// Fonction pour générer un token aléatoire.
const generateToken = () => {
  const tokenLength = 8;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Caractères autorisés pour le token
  let token = '';

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = crypto.randomInt(0, characters.length);
    token += characters[randomIndex];
  }

  return token;
};

// Exemple d'utilisation
const token = generateToken();
console.log(token);
