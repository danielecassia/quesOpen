const express = require('express');
const router = express.Router();
const passport = require('passport');
 
/* GET login page. */
router.get('/', (req, res, next) => {
    if (req.query.fail)
        res.status(403).send('Usuário e/ou senha incorretos!');
    else
        res.status(200).send('certinho');
});
 
/* POST login page */
router.post('/',
    passport.authenticate('local', { 
        successRedirect: '/disciplinas', 
        failureRedirect: '/?fail=true' 
    })
);
 
module.exports = router;