const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const usuarioService = require('../usuario/service/usuarioService');

module.exports = function(passport){
  //exportando o modulo do passport
  passport.serializeUser(async(user, done) => {
    done(null, user.id_usuario);
  });
  //criando sessão do usuário utilizando seu id
 
  passport.deserializeUser(async(id_usuario, done) => {
    try {
      // const userEmId = await usuarioService.getUsuariobyId(id_usuario);
      // console.log('PRIMEIRO ISSO: \n\n');
      // console.log(userEmId.dataValues);
      const userEmId = await usuarioService.getUsuarioById(id_usuario);
      // console.log('SEGUNDO ISSO: \n\n');
      // console.log(userEmId2[0]);
      done(null, userEmId[0]);
    } catch (error) {
      done(error, null);
    }
  });
  //encerrando sessão do usuário buscando suas infos pelo id

  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'senha'
      //campos de login que estão no form
    },
    async(emailUsuario, senha, done) => {
      try {
        const user = await usuarioService.userbyEmail(emailUsuario);
        if (!user) { return done(null, false) } // confirmo se retornou informações

        const isValid = bcrypt.compareSync(senha, user[0].senha); //confiro se a senha informada está correta
        if (!isValid) return done(null, false)

        return done(null, user[0])
      } catch (error) {
        done(error, false);
      }
    }
  ));
}