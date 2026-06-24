const mongoose = require('mongoose');

const movimentoSchema = new mongoose.Schema(
  {
    motorista: { type: mongoose.Schema.Types.ObjectId, ref: 'Motorista', required: true },
    veiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Veiculo', required: true },
    motivo: { type: mongoose.Schema.Types.ObjectId, ref: 'Motivo', required: true },
    destino: { type: String, required: true, trim: true },
    saida: { type: Date, required: true },
    retornoEstimado: { type: Date, required: true },
    odometroSaida: { type: Number, default: 0 },
    chegada: { type: Date, default: null },
    odometroChegada: { type: Number, default: null },
    observacoes: { type: String, default: '' },
    status: { type: String, enum: ['ativo', 'concluido', 'agendado'], default: 'ativo' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movimento', movimentoSchema);
