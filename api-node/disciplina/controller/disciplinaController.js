const router = require('express').Router();
const disciplinaService = require('../service/disciplinaService');
const disciplinaRepository = require('../repository/disciplinaRepository');
disciplinaService.disciplinaRepository = disciplinaRepository;

router.get('/',
  async (req, res) => {
    try {
      const disciplinasCreated = await disciplinaService.getDisciplinas();
      res.status(200).json(disciplinasCreated);
    } catch (error) {
      console.log("erro na criação");
      console.log(error);
    }
  });

  module.exports = router;