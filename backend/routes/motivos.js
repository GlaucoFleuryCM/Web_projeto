const express = require('express');
const Motivo = require('../models/Motivo');
const auth = require('../middleware/authMiddleware');

const router = express.Router();
router.use(auth);

router.get('/', async (req, res) => {
  try {
    const motivos = await Motivo.find().sort({ motivo: 1 });
    res.json(motivos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const motivo = new Motivo(req.body);
    await motivo.save();
    res.status(201).json(motivo);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Motivo já cadastrado' });
    }
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Motivo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Motivo removido com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
