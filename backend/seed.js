require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Motorista = require('./models/Motorista');
const Veiculo = require('./models/Veiculo');
const Motivo = require('./models/Motivo');

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/web_projeto');
  console.log('Conectado ao banco de dados');

  await User.deleteMany({});
  await User.create({
    username: 'Severino Manoel da Silva Neto',
    email: 'severinomsn@gmail.com',
    password: '1234',
    nome: 'Severino Manoel da Silva Neto',
  });

  await User.create({
    username: 'Recar',
    email: 'renanbcatarin@gmail.com',
    password: 'segredo',
    nome: 'Renan',
    role: 'adm',
  })

  console.log('Usuário criado: Severino Manoel da Silva Neto / 1234');

  const motoristasExist = await Motorista.countDocuments();
  if (motoristasExist === 0) {
    await Motorista.insertMany([
      { nome: 'Adriano Silva', cpf: '111.111.111-11', cargo: 'Motorista', contato1: '(11) 91111-1111' },
      { nome: 'Beto Santos', cpf: '222.222.222-22', cargo: 'Motorista', contato1: '(11) 92222-2222' },
      { nome: 'Carlos Pereira', cpf: '333.333.333-33', cargo: 'Motorista', contato1: '(11) 93333-3333' },
    ]);
    console.log('Motoristas de exemplo criados');
  }

  const veiculosExist = await Veiculo.countDocuments();
  if (veiculosExist === 0) {
    await Veiculo.insertMany([
      { placa: 'BRA2E19', modelo: 'Caminhão', ano: 2018, odometro: 110710, status: 'Disponível' },
      { placa: 'FBJ4E12', modelo: 'Caminhonete', ano: 2021, odometro: 45200, status: 'Disponível' },
      { placa: 'NEGOI50', modelo: 'Moto', ano: 2020, odometro: 28900, status: 'Disponível' },
    ]);
    console.log('Veículos de exemplo criados');
  }

  const motivosExist = await Motivo.countDocuments();
  if (motivosExist === 0) {
    await Motivo.insertMany([
      { motivo: 'Entrega de mercadoria' },
      { motivo: 'Visita a cliente' },
      { motivo: 'Coleta de material' },
      { motivo: 'Serviço externo' },
    ]);
    console.log('Motivos de exemplo criados');
  }

  console.log('Seed concluído!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Erro no seed:', err);
  process.exit(1);
});
