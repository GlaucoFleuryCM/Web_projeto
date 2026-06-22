const express = require('express');
const Motorista = require('../models/Motorista');
const Movimento = require('../models/Movimento');
const auth = require('../middleware/authMiddleware');

const router = express.Router();
router.use(auth);

router.get('/', async (req, res) => {
  try {
    const motoristas = await Motorista.find().sort({ nome: 1 });
    res.json(motoristas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const motorista = new Motorista(req.body);
    await motorista.save();
    res.status(201).json(motorista);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'CPF já cadastrado' });
    }
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const movimentoAtivo = await Movimento.findOne({
      motorista: req.params.id,
      status: 'ativo',
    });
    if (movimentoAtivo) {
      return res.status(400).json({ message: 'Motorista possui movimentação ativa e não pode ser removido' });
    }
    await Motorista.findByIdAndDelete(req.params.id);
    res.json({ message: 'Motorista removido com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
