const router = require('express').Router();
const usuarioService = require('../service/usuarioService');
const passport = require('../../config/auth');

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
      // console.log(user);
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
      const userWanted = await usuarioService.getUsuariobyId(userId);
      res.status(200).json(userWanted);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/me', async (req, res, next) => {
    try {
      const user = await usuarioService.getCurrentUser(req.user.id_usuario);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  });

  router.delete('/:id', async (req, res, next) => {
    try {
      const userId = req.params.id;
      await usuarioService.deletarUsuario(userId);
      res.status(204).end();
    } catch (error) {
      console.log(error);
    }
  });
  // router.post('/teste',
  // async (req, res) => {
  //   try {
  //     const emailUsuario = req.body.email;
  //     const userCreated = await usuarioService.getUsuariobyEmail(emailUsuario);
  //     res.status(200).json(userCreated);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  // router.post('/login', async(req,res)=>{
  //   try {
  //     const user = {
  //       email: req.body.email,
  //       senha: req.body.senha,
  //     }
  //     res.status(200).json(user);
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  module.exports = router;