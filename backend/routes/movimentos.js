const express = require('express');
const Movimento = require('../models/Movimento');
const Veiculo = require('../models/Veiculo');
const auth = require('../middleware/authMiddleware');
const { verificarAgendamentos } = require('../services/agendamentoService');

const router = express.Router();
router.use(auth);

router.post('/', async (req, res) => {
  try {
    const { veiculo: veiculoId, motorista, motivo, destino, saida, retornoEstimado, agendado } = req.body;

    const veiculo = await Veiculo.findById(veiculoId);
    if (!veiculo) return res.status(404).json({ message: 'Veículo não encontrado' });
    if (veiculo.status !== 'Disponível') {
      return res.status(400).json({ message: `Veículo não disponível (status: ${veiculo.status})` });
    }

    const movimento = new Movimento({
      motorista,
      veiculo: veiculoId,
      motivo,
      destino,
      saida: new Date(saida),
      retornoEstimado: new Date(retornoEstimado),
      odometroSaida: veiculo.odometro,
      status: agendado ? 'agendado' : 'ativo',
    });

    await movimento.save();

    if (!agendado) {
      veiculo.status = 'Em uso';
      await veiculo.save();
    }

    const populado = await Movimento.findById(movimento._id).populate('motorista veiculo motivo');
    res.status(201).json(populado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/ativos', async (req, res) => {
  try {
    const movimentos = await Movimento.find({ status: 'ativo' })
      .populate('motorista veiculo motivo')
      .sort({ saida: -1 });
    res.json(movimentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/historico', async (req, res) => {
  try {
    const { periodo, dataInicio, dataFim } = req.query;

    const query = { status: 'concluido' };

    if (periodo) {
      const dias = { semana: 7, quinzena: 15, mes: 30 };
      if (dias[periodo]) {
        const desde = new Date();
        desde.setDate(desde.getDate() - dias[periodo]);
        query.saida = { $gte: desde };
      }
    } else if (dataInicio) {
      const inicio = new Date(dataInicio);
      const fim = dataFim ? new Date(dataFim) : new Date();
      fim.setHours(23, 59, 59, 999);
      query.saida = { $gte: inicio, $lte: fim };
    }

    const movimentos = await Movimento.find(query)
      .populate('motorista veiculo motivo')
      .sort({ saida: -1 });

    res.json(movimentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/:id/chegada', async (req, res) => {
  try {
    const { dataChegada, odometroChegada, observacoes } = req.body;

    const movimento = await Movimento.findById(req.params.id).populate('veiculo');
    if (!movimento) return res.status(404).json({ message: 'Movimentação não encontrada' });
    if (movimento.status === 'concluido') {
      return res.status(400).json({ message: 'Movimentação já concluída' });
    }

    movimento.chegada = new Date(dataChegada);
    movimento.odometroChegada = Number(odometroChegada);
    movimento.observacoes = observacoes || '';
    movimento.status = 'concluido';
    await movimento.save();

    const veiculo = movimento.veiculo;
    veiculo.odometro = Number(odometroChegada);
    veiculo.status = 'Disponível';
    await veiculo.save();

    const populado = await Movimento.findById(movimento._id).populate('motorista veiculo motivo');
    res.json(populado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id/cancelar-agendamento', async (req, res) => {
  try {
    const movimento = await Movimento.findById(req.params.id);

    if (!movimento) {
      return res.status(404).json({
        message: 'Movimentação não encontrada'
      });
    }

    await movimento.deleteOne();

    res.json({
      message: 'Agendamento cancelado'
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.post('/:id/confirmar-agendamento', async (req, res) => {
  try {
    const movimento = await Movimento.findById(req.params.id)
      .populate('veiculo');

    if (!movimento) {
      return res.status(404).json({
        message: 'Movimentação não encontrada'
      });
    }

    movimento.status = 'ativo';
    await movimento.save();

    movimento.veiculo.status = 'Em uso';
    await movimento.veiculo.save();

    res.json({
      message: 'Agendamento confirmado'
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get('/agendamentos-pendentes', async (req, res) => {
    try {
        const movimentos = await verificarAgendamentos();

        res.json(movimentos);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Erro ao verificar agendamentos'
        });
    }
});

module.exports = router;
