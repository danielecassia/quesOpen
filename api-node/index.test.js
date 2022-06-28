const test = require('tape')
const usuario = require('./usuario/service/usuarioServiceTest');
const usuarioRepositoryMockup = require('./usuario/repository/usuarioRepositoryMockup');

usuario.usuarioRepositoryMockup = usuarioRepositoryMockup;

test('getAllUsuarios', async(t) => {
    t.assert((await usuario.getAllUsuarios()).length == 2, "Passou");
    t.end();
});

test('getUsuarioById', async(t) => {
    t.assert((await usuario.getUsuarioById(2)).nome_usuario === "Arthur", "Passou");
    t.assert((await usuario.getUsuarioById(1)).nome_usuario === "Henrique", "Passou");
    t.end();
});

// test('create', async(t) => {
//     user = {
        
//     }
//     t.assert((await usuario.getUsuarioById(2)).nome_usuario === "Arthur", "Passou");
//     t.end();
// });