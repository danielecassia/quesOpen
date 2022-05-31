const express = require('express');
const router = express.Router();
const passport = require('passport');
const MetodoLogout = require('../login/metodologout');
 
/* GET login page. */
router.get('/login', (req, res, next) => {
    if (req.query.fail)
        res.status(403).send('Usuário e/ou senha incorretos!');
    else
        res.status(200).send('certinho');
});
 
/* POST login page */
router.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/login',
        failureRedirect: '/login?fail=true'
    })
);

router.post('/logout', async(req, res) => {
    try {
        const encerrar = await MetodoLogout.getLogout();
        res.status(200).json(encerrar);
    } catch (error) {
        console.log(error);
    }
  });
 
module.exports = router;