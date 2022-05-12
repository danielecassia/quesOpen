const router = require('express').Router();
const UserService = require('../service/UserService');

router.post('/',
  async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        data_nasc: req.body.data_nasc,
        senha: req.body.senha,
      };
      const userCreated = await UserService.createUser(user);
      res.status(200).json(userCreated);
    } catch (error) {
      console.log("erro na criação");
    }
  });

  module.exports = router;