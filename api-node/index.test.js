const test = require('tape');
const usuario = require('./usuario/service/usuarioService.js');
const usuarioRepositoryMockup = require('./usuario/repository/usuarioRepositoryMockup.js');

test('getAllUsuarios', async (t) => {
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal(typeof (await usuario.getAllUsuarios()), Array, "tipo ok")
    t.equal((await usuario.getAllUsuarios()).length, 2, "tamanho ok")
    t.end()  
});

test('getUsuarioById', async (t) => {
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal((await usuario.getUsuarioById(1)).nome_usuario, "Arthur")
    t.equal((await usuario.getUsuarioById(2)).nome_usuario, "Henrique")
    t.end()  
});

test('createUser', async (t) => {
    usuario.usuarioRepository = usuarioRepositoryMockup;
    newUser = {
        nome: "Arthur2",
        email: "art2@email.com",
        email_confirm: "art2@email.com",
        data_nasc: "2000-01-01",
        senha: "coxinha123",
        senha_confirm: "coxinha123"
    };


    t.equals((await usuario.createUser(newUser)), [3, 1], "retorno correto")
    t.equals((await usuario.getUsuarioById(3)).email, "art2@email.com", "usuario adicionado")
    usuario.deletarUsuario(3);
    t.end()  
});

// createUser = async (user) => {
//     return usuarioRepository.create(user);
// };

// userbyEmail = async(emailUsuario) => {
//     return usuarioRepository.findByEmail(emailUsuario);
// }

// getCurrentUser = async(id) => {
//     return usuarioRepository.currentUser(id);
// }

// deletarUsuario = async(id) => {
//     return usuarioRepository.deleteUser(id);
// }