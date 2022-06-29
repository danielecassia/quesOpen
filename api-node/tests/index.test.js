const test = require('tape');
const usuario = require('../usuario/service/usuarioService.js');
const usuarioRepositoryMockup = require('../usuario/repository/usuarioRepositoryMockup.js');
const discussao = require('../discussao/service/discussaoService');
const discussaoRepositoryMockup = require('../discussao/repository/discussaoRepositoryMockup');

test('Retornar todos usuários', async (t) => {
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal(typeof (await usuario.getAllUsuarios()), 'object', "tipo do usuario ok")
    t.equal((await usuario.getAllUsuarios()).length, 2, "tamanho de usuarios ok")
    t.end()  
});

test('Retornar usuário pelo ID', async (t) => {
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal((await usuario.getUsuarioById(1)).nome_usuario, "Arthur", "Usuario por id OK")
    t.equal((await usuario.getUsuarioById(2)).nome_usuario, "Henrique", "Usuario por id OK")
    t.end()  
});

test('Criar usuário', async (t) => {
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

test('Retornar todas as discussões', async(t)=> {
    discussao.discussaoRepository = discussaoRepositoryMockup;

    t.equal(typeof (await discussao.getAllDiscussoes()), 'object', "tipo da discussao ok")
    t.equal((await discussao.getAllDiscussoes()).length, 5, "discussoes tamanho ok")
    t.end() 
})

test('Retornar discussão pelo ID', async (t) => {
    discussao.discussaoRepository = discussaoRepositoryMockup;

    t.equal((await discussao.getDiscussaoById(1)).titulo, "discussao mat1", "Discussao por id(1) OK")
    t.equal((await discussao.getDiscussaoById(3)).titulo, "discussao port1", "Discussao por id(3) OK")
    t.end()  
});

test('Retornar discussões de um usuário', async(t) => {
    discussao.discussaoRepository = discussaoRepositoryMockup;
    t.equal((await discussao.getDiscussoesByUsuario(1)).length, 2, "Discussoes por usuario(1) OK")
    t.equal((await discussao.getDiscussoesByUsuario(2)).length, 3, "Discussoes por usuario(2) OK")
    t.equal((await discussao.getDiscussoesByUsuario(8)).length, 0, "Discussoes por usuario(null) OK")
    t.end()  
});

test('Retornar discussões de uma disciplina', async(t) => {
    discussao.discussaoRepository = discussaoRepositoryMockup;
    t.equal((await discussao.getDiscussoesByDisciplina(1)).length, 2, "Discussoes por disciplina(1) OK")
    t.equal((await discussao.getDiscussoesByDisciplina(3)).length, 1, "Discussoes por disciplina(3) OK")
    t.equal((await discussao.getDiscussoesByDisciplina(4)).length, 0, "Discussoes por disciplina(null) OK")
    t.end()  
});

test('Criar discussão', async (t) => {
    discussao.discussaoRepository = discussaoRepositoryMockup;
    newDiscussao = {
        titulo: "discussao dos testes",
        descricao: "descricao nos testes realizados",
        data_discussao: "2022-06-29",
        usuarioIdUsuario: 1,
        disciplinaIdDisciplina: 1,
        nome_usuario: "Arthur",
        nome_disciplina: "Matematica"
    };

    t.equals((await discussao.createDiscussao(newDiscussao)), 6, "retorno correto")
    t.equals((await discussao.getDiscussaoById(6)).titulo, "discussao dos testes", "discussao criada")
    discussao.deletarDiscussao(6);
    t.end()  
});