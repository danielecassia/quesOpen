const test = require('tape');
const usuario = require('./usuario/service/usuarioService.js');
const usuarioRepositoryMockup = require('./usuario/repository/usuarioRepositoryMockup.js');
const discussao = require('./discussao/service/discussaoService');
const discussaoRepositoryMockup = require('./discussao/repository/discussaoRepositoryMockup');
const disciplina = require('./disciplina/service/disciplinaService');
const disciplinaRepositoryMockup = require('./disciplina/repository/disciplinaRepositoryMockup');
const comentario = require('./comentario/service/comentarioService');
const comentarioModelMockup = require('./comentario/model/comentarioModelMockup');


/* 

    Testes Usuário

*/

test('getAllUsuarios', async (t) => {
    oldRepository = usuario.usuarioRepository
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal(typeof (await usuario.getAllUsuarios()), typeof [])
    t.equal((await usuario.getAllUsuarios()).length, 2)
    
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

test('userbyEmail', async (t) => {
    oldRepository = usuario.usuarioRepository
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal((await usuario.userbyEmail("arthur@gmail.com")).id_usuario, 1)
    t.equal((await usuario.userbyEmail("rick@c")).id_usuario, 2)

    usuario.usuarioRepository = oldRepository
    t.end()  
});

test('getCurrentUser', async (t) => {
    oldRepository = usuario.usuarioRepository
    usuario.usuarioRepository = usuarioRepositoryMockup;

    t.equal((await usuario.getCurrentUser(2)).nome_usuario, "Henrique")
    t.equal((await usuario.getCurrentUser(1)).nome_usuario, "Arthur")

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


    t.same((await usuario.createUser(newUser)), [3, 1])

    newUser.email = "art4@email.com"
    newUser.email_confirm = "art4@email.com"

    t.same((await usuario.createUser(newUser)), [4, 1])


    usuario.usuarioRepository = oldRepository
    t.end()  
});

test('deletarUsuario', async (t) => {
    oldRepository = usuario.usuarioRepository
    usuario.usuarioRepository = usuarioRepositoryMockup;

    
    t.equals((await usuario.deletarUsuario(2)), 1)
    t.equals((await usuario.deletarUsuario(1)), 1)

    usuario.usuarioRepository = oldRepository
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

/* 

    Testes Disciplina

*/

test('getDisciplinas', async (t) => {
    oldRepository = disciplina.disciplinaRepository
    disciplina.disciplinaRepository = disciplinaRepositoryMockup;

    t.equal(typeof (await disciplina.getDisciplinas()), typeof [])
    t.equal((await disciplina.getDisciplinas()).length, 5)
    
    disciplina.disciplinaRepository = oldRepository
    t.end()
});

/* 

    Testes Comentário

*/

test('getComentarios', async (t) => {
    oldModel = comentario.comentarioModel
    comentario.comentarioModel = comentarioModelMockup;

    t.equal(typeof (await comentario.getComentarios()), typeof [])
    t.equal((await comentario.getComentarios()).length, 6)
    
    usuario.comentarioModel = oldModel
    t.end()  
});

test('getComentariosByDiscussao', async (t) => {
    oldModel = comentario.comentarioModel
    comentario.comentarioModel = comentarioModelMockup;

    t.equal(typeof (await comentario.getComentariosByDiscussao(1)), typeof [])
    t.equal((await comentario.getComentariosByDiscussao(1)).length, 3)
    t.equal((await comentario.getComentariosByDiscussao(2)).length, 2)
    t.equal((await comentario.getComentariosByDiscussao(3)).length, 1)
    
    usuario.comentarioModel = oldModel
    t.end()   
});

test('createComentario', async (t) => {
    let now = new Date();

    oldModel = comentario.comentarioModel
    comentario.comentarioModel = comentarioModelMockup;
    newComentario = {
        descricao_comentario: "Comentário 7 - Discussão 3",
        createdAt: now,
        updatedAt: now,
        data_comentario: now,
        usuarioIdUsuario: 3,
        discussaoIdDiscussao: 3,
    };


    t.same((await comentario.createComentario(newComentario)), [7, 1])

    newComentario.descricao_comentario = "Comentário 8 - Discussão 3"
    newComentario.usuarioIdUsuario = 2

    t.same((await comentario.createComentario(newComentario)), [8, 1])


    comentario.comentarioModel = oldModel
    t.end()  
});