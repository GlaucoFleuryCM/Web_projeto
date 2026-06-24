const Movimento = require('../models/Movimento');

async function verificarAgendamentos() {
    const agora = new Date();

    const movimentos = await Movimento.find({
        status: 'agendado',
        saida: {
            $lte: agora
        }
    })
    .populate('motorista')
    .populate('veiculo')
    .populate('motivo');

    return movimentos;
}

module.exports = {
    verificarAgendamentos
};