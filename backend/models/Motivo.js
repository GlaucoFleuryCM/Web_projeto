const mongoose = require('mongoose');

const motivoSchema = new mongoose.Schema(
  {
    motivo: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Motivo', motivoSchema);
