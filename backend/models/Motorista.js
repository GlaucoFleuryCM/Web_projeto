const mongoose = require('mongoose');

const motoristaSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    cpf: { type: String, required: true, unique: true, trim: true },
    cargo: { type: String, default: '', trim: true },
    contato1: { type: String, required: true, trim: true },
    contato2: { type: String, default: '', trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Motorista', motoristaSchema);
