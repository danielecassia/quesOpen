require('dotenv').config();

const passport = require('passport');
const session = require('express-session');
require('./config/auth')(passport);

function authenticationMiddleware(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/?fail=true');
}

const usuariosRouter = require('./usuario/controller/usuarioController');
const comentariosRouter = require('./comentario/controller/comentarioController');
const disciplinasRouter = require('./disciplina/controller/disciplinaController');
const discussaoRouter = require('./discussao/controller/discussaoController');
const loginRouter = require('./login/login');

// chamando o modulo das configuracoes do express
const app = require('./config/config-express');

//rodando o servidor na porta 3001
app.listen(3001, 'localhost', () => console.log('servidor rodando!'));

//rota get de teste
// app.get('/', (req,res) => {
//   res.send('tudo certo');
// })

// //rota post de teste
// app.post('/', (req,res) => {
//   res.send(req.body.text);
// })

app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 2 * 60 * 1000}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', loginRouter);
app.use('/usuarios', authenticationMiddleware, usuariosRouter);
app.use('/comentarios', comentariosRouter);
app.use('/disciplinas', disciplinasRouter);
app.use('/discussoes', discussaoRouter);