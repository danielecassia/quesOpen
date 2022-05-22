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

  module.exports = router;