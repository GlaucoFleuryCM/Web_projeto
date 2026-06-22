const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Veiculo = require('../models/Veiculo');
const Movimento = require('../models/Movimento');
const auth = require('../middleware/authMiddleware');

const router = express.Router();
router.use(auth);

const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `veiculo_${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Apenas imagens são permitidas'));
    }
    cb(null, true);
  },
});

router.get('/', async (req, res) => {
  try {
    const veiculos = await Veiculo.find().sort({ placa: 1 });

    const movimentosAtivos = await Movimento.find({ status: 'ativo' }).populate('motorista');

    const veiculosComMotorista = veiculos.map((v) => {
      const mov = movimentosAtivos.find((m) => m.veiculo.toString() === v._id.toString());
      return {
        ...v.toObject(),
        motoristaAtual: mov?.motorista?.nome || null,
      };
    });

    res.json(veiculosComMotorista);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const dados = { ...req.body };
    if (req.file) dados.img = `/uploads/${req.file.filename}`;

    const veiculo = new Veiculo(dados);
    await veiculo.save();
    res.status(201).json(veiculo);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Placa já cadastrada' });
    }
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const validos = ['Disponível', 'Em uso', 'Manutenção', 'Indisponível'];
    if (!validos.includes(status)) {
      return res.status(400).json({ message: 'Status inválido' });
    }

    const movimentoAtivo = await Movimento.findOne({ veiculo: req.params.id, status: 'ativo' });
    if (movimentoAtivo) {
      return res.status(400).json({ message: 'Veículo possui movimentação ativa' });
    }

    const veiculo = await Veiculo.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(veiculo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const movimentoAtivo = await Movimento.findOne({ veiculo: req.params.id, status: 'ativo' });
    if (movimentoAtivo) {
      return res.status(400).json({ message: 'Veículo possui movimentação ativa e não pode ser removido' });
    }

    const veiculo = await Veiculo.findByIdAndDelete(req.params.id);
    if (veiculo?.img) {
      const imgPath = path.join(__dirname, '..', veiculo.img);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    res.json({ message: 'Veículo removido com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
