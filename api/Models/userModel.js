const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  motDePasse: {
    type: String,
    required: true
  },
  confirmationMotDePasse: {
    type: String,
    required: true
  },
  images : String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
