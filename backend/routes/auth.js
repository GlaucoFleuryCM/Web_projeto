const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Usuário e senha são obrigatórios' });
    }

    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Usuário ou senha incorretos' });
    }

    const token = jwt.sign(
      { id: user._id, nome: user.nome },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '8h' }
    );

    res.json({ token, nome: user.nome });
  } catch (err) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
