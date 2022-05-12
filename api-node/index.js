require('dotenv').config();

// chamando o modulo das configuracoes do express
const app = require('./config/config-express');

//rodando o servidor na porta 3001
app.listen(3001, 'localhost', () => console.log('servidor rodando!'));

//rota get de teste
app.get('/', (req,res) => {
  res.send('tudo certo');
})

//rota post de teste
app.post('/', (req,res) => {
  res.send(req.body.text);
})

const usersRouter = require('./usuario/controller/user-controller');

app.use('/users', usersRouter);