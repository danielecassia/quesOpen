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

const usuariosRouter = require('./usuario/controller/usuarioController');

app.use('/usuarios', usuariosRouter);

const comentariosRouter = require('./comentario/controller/comentarioController');

app.use('/comentarios', comentariosRouter);

const disciplinasRouter = require('./disciplina/controller/disciplinaController');

app.use('/disciplinas', disciplinasRouter);

const discussaoRouter = require('./discussao/controller/discussaoController');

app.use('/discussoes', discussaoRouter);