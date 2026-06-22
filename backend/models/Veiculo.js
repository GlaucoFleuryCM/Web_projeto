const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema(
  {
    placa: { type: String, required: true, unique: true, trim: true, uppercase: true },
    modelo: { type: String, required: true, trim: true },
    ano: { type: Number, default: null },
    odometro: { type: Number, required: true, default: 0 },
    img: { type: String, default: '' },
    status: {
      type: String,
      enum: ['Disponível', 'Em uso', 'Manutenção', 'Indisponível'],
      default: 'Disponível',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Veiculo', veiculoSchema);
