const test = require('tape');
const usuario = require('../usuario/service/usuarioService.js');
const usuarioRepositoryMockup = require('../usuario/repository/usuarioRepositoryMockup.js');
const discussao = require('../discussao/service/discussaoService');
const discussaoRepositoryMockup = require('../discussao/repository/discussaoRepositoryMockup');
const disciplina = require('../disciplina/service/disciplinaService');
const disciplinaRepositoryMockup = require('../disciplina/repository/disciplinaRepositoryMockup');
const comentario = require('../comentario/service/comentarioService');
const comentarioRepositoryMockup = require('../comentario/repository/comentarioRepositoryMockup');

/* 

    Testes Usuário

*/

test('getAllUsuarios', async (t) => {
    // oldRepository = usuario.usuarioRepository;
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal(typeof (await usuario.getAllUsuarios()), typeof [])
    t.equal((await usuario.getAllUsuarios()).length, 2)
    
    // usuario.usuarioRepository = oldRepository;
    t.end()  
});

test('getUsuarioById', async (t) => {
    // oldRepository = usuario.usuarioRepository;
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal((await usuario.getUsuarioById(1)).nome_usuario, "Arthur")
    t.equal((await usuario.getUsuarioById(2)).nome_usuario, "Henrique")

    // usuario.usuarioRepository = oldRepository;
    t.end()  
});

test('userbyEmail', async (t) => {
    // oldRepository = usuario.usuarioRepository;
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal((await usuario.userbyEmail("arthur@gmail.com")).id_usuario, 1);
    t.equal((await usuario.userbyEmail("rick@c")).id_usuario, 2);

    // usuario.usuarioRepository = oldRepository;
    t.end()  
});

test('getCurrentUser', async (t) => {
    // oldRepository = usuario.usuarioRepository;
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal((await usuario.getCurrentUser(2)).nome_usuario, "Henrique")
    t.equal((await usuario.getCurrentUser(1)).nome_usuario, "Arthur")

    // usuario.usuarioRepository = oldRepository
    t.end()  
});

test('createUser', async (t) => {
    // oldRepository = usuario.usuarioRepository;
    usuario.usuarioRepository = usuarioRepositoryMockup;
    newUser = {
        nome: "Arthur3",
        email: "art3@email.com",
        email_confirm: "art3@email.com",
        data_nasc: "2000-01-01",
        senha: "coxinha123",
        senha_confirm: "coxinha123"
    };


    t.same((await usuario.createUser(newUser)), [3, 1])

    newUser.email = "art4@email.com"
    newUser.email_confirm = "art4@email.com"

    t.same((await usuario.createUser(newUser)), [4, 1])


    // usuario.usuarioRepository = oldRepository
    t.end()  
});

test('deletarUsuario', async (t) => {
    // oldRepository = usuario.usuarioRepository
    usuario.usuarioRepository = usuarioRepositoryMockup;

    
    t.equals((await usuario.deletarUsuario(2)), 1)
    t.equals((await usuario.deletarUsuario(1)), 1)

    // usuario.usuarioRepository = oldRepository
    t.end()  
});

/* 

    Testes Discussão

*/

test('getAllDiscussoes', async(t)=> {
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

/* 

    Testes Disciplina

*/

test('getDisciplinas', async (t) => {
    // oldRepository = disciplina.disciplinaRepository
    disciplina.disciplinaRepository = disciplinaRepositoryMockup;

    t.equal(typeof (await disciplina.getDisciplinas()), typeof [], "Formato correto")
    t.equal((await disciplina.getDisciplinas()).length, 5, "Número de disciplinas correto")
    
    // disciplina.disciplinaRepository = oldRepository
    t.end()
});

/* 

    Testes Comentário

*/

test('getComentarios', async (t) => {
    comentario.comentarioRepository = comentarioRepositoryMockup;

    t.equal(typeof (await comentario.getComentarios()), typeof [], "Tipo correto")
    t.equal((await comentario.getComentarios()).length, 4, "Número de comentários ok")
    
    t.end()  
});

test('getComentariosByDiscussao', async (t) => {
    // oldModel = comentario.comentarioModel
    comentario.comentarioRepository = comentarioRepositoryMockup;

    t.equal(typeof (await comentario.getComentariosByDiscussao(1)), typeof [], "Tipo correto")
    t.equal((await comentario.getComentariosByDiscussao(1)).length, 1, "Comentarios da discussao(1) ok")
    t.equal((await comentario.getComentariosByDiscussao(2)).length, 1, "Comentarios da discussao(2) ok")
    t.equal((await comentario.getComentariosByDiscussao(3)).length, 1, "Comentarios da discussao(3) ok")
    
    // usuario.comentarioModel = oldModel
    t.end()   
});

test('createComentario', async (t) => {
    let now = new Date();

    // oldModel = comentario.comentarioModel
    comentario.comentarioRepository = comentarioRepositoryMockup;
    newComentario = {
        descricao_comentario: "Comentário 7 - Discussão 3",
        createdAt: now,
        updatedAt: now,
        data_comentario: now,
        usuarioIdUsuario: 3,
        discussaoIdDiscussao: 3,
    };


    t.same((await comentario.createComentario(newComentario)), 5, "Comentário criado com id 5")

    newComentario.descricao_comentario = "Comentário 8 - Discussão 3"
    newComentario.usuarioIdUsuario = 2

    t.same((await comentario.createComentario(newComentario)), 6, "Comentário criado com id 6")


    // comentario.comentarioModel = oldModel
    t.end()
});