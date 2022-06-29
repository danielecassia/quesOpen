const test = require('tape')
const supertest = require('supertest')

test('GET /usuarios/usuario/id', (t) => {
  supertest('http://localhost:3001')
  .get('/usuarios/usuario/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err,res) => {
    var resultado = res.body;
    t.error(err, "Sem erros");
    t.assert(resultado[0].nome_usuario == "henrique", "Usuario(1) correto");
    t.end();
  })
});

test('GET /discussoes/discussoes-disciplina', (t) => {
  supertest('http://localhost:3001')
  .get('/discussoes/discussoes-disciplina/3')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err,res) => {
    var resultado = res.body;
    t.error(err, "Sem erros");
    t.assert(resultado.length === 3, "Discussoes da disciplina(3) correto");
    t.end();
  })
});

