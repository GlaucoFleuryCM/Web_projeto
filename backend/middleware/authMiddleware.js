const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Não autorizado' });
  }
  try {
    req.user = jwt.verify(auth.slice(7), process.env.JWT_SECRET || 'secret');
    next();
  } catch {
    res.status(401).json({ message: 'Token inválido ou expirado' });
  }
};
