# Sistema de Gerenciamento de Frota

Trabalho desenvolvido por alunos do ICMC-USP na disciplina de Introdução à Web.
O site gerencia o acesso a veículos disponíveis na empresa (saídas, chegadas, motoristas, etc.).

## Integrantes

- Glauco Fleury Corrêa de Moraes (1545630)
- Renan Banci Catarin (14658181)
- João Pedro Daleffe Dias (15463342)

---

## Tecnologias

| Camada | Stack |
|--------|-------|
| Frontend | React 19, React Router, Styled Components, Embla Carousel |
| Backend | Node.js, Express.js |
| Banco de dados | MongoDB com Mongoose |
| Auth | JWT (JSON Web Token) |
| Containerização | Docker + Docker Compose |

---

## Estrutura do Projeto

```
Web_projeto/
├── src/                  # Código-fonte do frontend (React)
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   └── services/api.js   # Cliente HTTP (Axios)
├── backend/              # Servidor Express
│   ├── models/           # Modelos Mongoose
│   ├── routes/           # Rotas da API REST
│   ├── middleware/       # Autenticação JWT
│   └── seed.js           # Script de dados iniciais
├── Dockerfile            # Build do frontend (nginx)
├── nginx.conf            # Configuração do nginx
└── docker-compose.yml    # Orquestração dos serviços
```

---

## Executando com Docker (recomendado)

### Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) instalado

### 1. Suba os serviços

```bash
docker compose up --build
```

### 2. Popule o banco de dados (apenas na primeira execução)

```bash
docker compose exec backend node seed.js
```

### 3. Acesse a aplicação

| Serviço | Endereço |
|---------|----------|
| Frontend | http://localhost:3000 |
| API | http://localhost:5000/api |

### Login inicial

| Campo | Valor |
|-------|-------|
| Usuário | `Severino Manoel da Silva Neto` |
| Senha | `1234` |

### Parar os serviços

```bash
docker compose down        # mantém os dados
docker compose down -v     # apaga os dados do banco
```

---

## Executando localmente (sem Docker)

### Pré-requisitos

- Node.js 18+
- MongoDB rodando localmente

### 1. Clone o repositório

```bash
git clone https://github.com/GlaucoFleuryCM/Web_projeto.git
cd Web_projeto
```

### 2. Instale as dependências

```bash
# Frontend
npm install

# Backend
cd backend && npm install && cd ..
```

### 3. Configure o ambiente do backend

```bash
cp backend/.env.example backend/.env
```

Edite `backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/web_projeto
JWT_SECRET=uma_chave_secreta_longa_e_aleatoria
FRONTEND_URL=http://localhost:3000
```

### 4. Popule o banco de dados

```bash
cd backend && node seed.js && cd ..
```

### 5. Inicie o backend e o frontend (em terminais separados)

```bash
# Terminal 1 — backend
cd backend && npm run dev

# Terminal 2 — frontend
npm start
```

A aplicação estará disponível em http://localhost:3000.