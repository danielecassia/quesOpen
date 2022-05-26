const router = require('express').Router();
const comentarioService = require('../service/comentarioService');

router.get('/',
  async (req, res) => {
    try {
      const commentsCreated = await comentarioService.getComentarios();
      res.status(200).json(commentsCreated);
    } catch (error) {
      console.log("erro na criação");
      console.log(error);
    }
  });

router.get('/discussao/:id', async (req,res) => {
  try {
    const idDiscussao = req.params.id;
    const commentsCreated = await comentarioService.getComentariosByDiscussao(idDiscussao);
    res.status(200).json(commentsCreated);
  } catch (error) {
    console.log(error);
  }
});

router.post('/',
  async (req, res) => {
    try {
      let now = new Date();
      const comentario = {
        descricao_comentario: req.body.descricao,
        createdAt: now,
        updatedAt: now,
        data_comentario: now,
        usuarioIdUsuario: req.body.usuarioIdUsuario,
        discussaoIdDiscussao: req.body.discussaoIdDiscussao,
      };
      const comentarioCreated = await comentarioService.createComentario(comentario);
      res.status(200).json(comentarioCreated);
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;