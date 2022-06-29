const router = require('express').Router();
const usuarioService = require('../service/usuarioService');
const usuarioRepository = require('../repository/usuarioRepository');
const passport = require('../../config/auth');
const metodologout = require('../../login/metodologout');
usuarioService.usuarioRepository = usuarioRepository;

router.post('/',
  async (req, res) => {
    try {
      const user = {
        nome_usuario: req.body.nome,
        email: req.body.email,
        email_confirm: req.body.email_confirm,
        data_nasc: req.body.data_nasc,
        senha: req.body.senha,
        senha_confirm: req.body.senha_confirm,
      };
      const userCreated = await usuarioService.createUser(user);
      res.status(200).json(userCreated);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/',
  async (req, res) => {
    try {
      const usuariosCreated = await usuarioService.getAllUsuarios();
      res.status(200).json(usuariosCreated);
    } catch (error) {
      console.log("erro na criação");
      console.log(error);
    }
  });

  router.get('/usuario/:id', async(req,res) => {
    try {
      const userId = req.params.id;
      const userWanted = await usuarioService.getUsuarioById(userId);
      res.status(200).json(userWanted);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/me', async (req, res, next) => {
    try {
      const user = await usuarioService.getCurrentUser(req.user.id_usuario);
      res.status(200).json(user[0]);
    } catch (error) {
      console.log(error);
    }
  });

  router.delete('/:id', async (req, res, next) => {
    try {
      const userId = req.params.id;
      await usuarioService.deletarUsuario(userId);
      await metodologout.getLogout();
      res.status(204).end();
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;