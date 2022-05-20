const router = require('express').Router();
const discussaoService = require('../service/discussaoService');

router.get('/',
  async (req, res) => {
    try {
      const discussaoCreated = await discussaoService.getAllDisciplinas();
      res.status(200).json(discussaoCreated);
    } catch (error) {
      console.log("erro na criação");
      console.log(error);
    }
  });

  module.exports = router;