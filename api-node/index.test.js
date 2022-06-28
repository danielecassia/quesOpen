const test = require('tape');
const usuario = require('./usuario/service/usuarioService.js');
const usuarioRepositoryMockup = require('./usuario/repository/usuarioRepositoryMockup.js');
const discussao = require('./discussao/service/discussaoService');
const discussaoRepositoryMockup = require('./discussao/repository/discussaoRepositoryMockup');

test('getAllUsuarios', async (t) => {
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal(typeof (await usuario.getAllUsuarios()), 'object', "tipo do usuario ok")
    t.equal((await usuario.getAllUsuarios()).length, 2, "tamanho de usuarios ok")
    t.end()  
});

test('getUsuarioById', async (t) => {
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal((await usuario.getUsuarioById(1)).nome_usuario, "Arthur", "Usuario por id OK")
    t.equal((await usuario.getUsuarioById(2)).nome_usuario, "Henrique", "Usuario por id OK")
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

    t.equals((await usuario.createUser(newUser)), 3, "retorno correto")
    t.equals((await usuario.getUsuarioById(3)).email, "art2@email.com", "usuario adicionado")
    usuario.deletarUsuario(3);
    t.end()  
});

test('getAllDiscussoes', async(t)=> {
    discussao.discussaoRepository = discussaoRepositoryMockup;

    t.equal(typeof (await discussao.getAllDiscussoes()), 'object', "tipo da discussao ok")
    t.equal((await discussao.getAllDiscussoes()).length, 5, "discussoes tamanho ok")
    t.end() 
})

test('getDiscussaoById', async (t) => {
    discussao.discussaoRepository = discussaoRepositoryMockup;

    t.equal((await discussao.getDiscussaoById(1)).titulo, "discussao mat1", "Discussao por id(1) OK")
    t.equal((await discussao.getDiscussaoById(3)).titulo, "discussao port1", "Discussao por id(3) OK")
    t.end()  
});

test('getDiscussaoByUsuario', async(t) => {
    discussao.discussaoRepository = discussaoRepositoryMockup;
    t.equal((await discussao.getDiscussoesByUsuario(1)).length, 2, "Discussoes por usuario(1) OK")
    t.equal((await discussao.getDiscussoesByUsuario(2)).length, 3, "Discussoes por usuario(2) OK")
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