const test = require('tape');
const usuario = require('./usuario/service/usuarioService.js');
const usuarioRepositoryMockup = require('./usuario/repository/usuarioRepositoryMockup.js');

test('getAllUsuarios', async (t) => {
    oldRepository = usuario.usuarioRepository
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal(typeof (await usuario.getAllUsuarios()), Array, "tipo ok")
    t.equal((await usuario.getAllUsuarios()).length, 2, "tamanho ok")
    
    usuario.usuarioRepository = oldRepository
    t.end()  
});

test('getUsuarioById', async (t) => {
    oldRepository = usuario.usuarioRepository
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal((await usuario.getUsuarioById(1)).nome_usuario, "Arthur")
    t.equal((await usuario.getUsuarioById(2)).nome_usuario, "Henrique")

    usuario.usuarioRepository = oldRepository
    t.end()  
});

test('createUser', async (t) => {
    oldRepository = usuario.usuarioRepository
    usuario.usuarioRepository = usuarioRepositoryMockup;
    newUser = {
        nome: "Arthur3",
        email: "art3@email.com",
        email_confirm: "art3@email.com",
        data_nasc: "2000-01-01",
        senha: "coxinha123",
        senha_confirm: "coxinha123"
    };


    t.equals((await usuario.createUser(newUser)), [3, 1], "retorno correto")
    t.equals((await usuario.getUsuarioById(3)).email, "art3@email.com", "usuario adicionado")
    usuario.deletarUsuario(3);

    usuario.usuarioRepository = oldRepository
    t.end()  
});

// userbyEmail = async(emailUsuario) => {
//     return usuarioRepository.findByEmail(emailUsuario);
// }

// getCurrentUser = async(id) => {
//     return usuarioRepository.currentUser(id);
// }

// deletarUsuario = async(id) => {
//     return usuarioRepository.deleteUser(id);
// }