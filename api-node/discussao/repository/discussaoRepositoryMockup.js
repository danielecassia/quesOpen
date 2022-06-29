class discussaoRepositoryMockup{
  constructor(){
      this.counter = 4;
      this.repository = [
          {
              id_discussao: 1,
              titulo: "discussao mat1",
              descricao: "matematica duvidas",
              data_discussao: new Date("2022-06-28"),
              usuarioIdUsuario: 1,
              disciplinaIdDisciplina: 1,
              nome_usuario: "Arthur",
              nome_disciplina: "Matematica"
          },
          {
            id_discussao: 2,
            titulo: "discussao mat2",
            descricao: "matematica respostas",
            data_discussao: new Date("2022-06-28"),
            usuarioIdUsuario: 2,
            disciplinaIdDisciplina: 1,
            nome_usuario: "Henrique",
            nome_disciplina: "Matemática"
          },
          {
            id_discussao: 3,
            titulo: "discussao port1",
            descricao: "portugues duvidas",
            data_discussao: new Date("2022-06-28"),
            usuarioIdUsuario: 1,
            disciplinaIdDisciplina: 2,
            nome_usuario: "Arthur",
            nome_disciplina: "Portugues"
          },
          {
            id_discussao: 4,
            titulo: "discussao port2",
            descricao: "portugues respostas",
            data_discussao: new Date("2022-06-28"),
            usuarioIdUsuario: 2,
            disciplinaIdDisciplina: 2,
            nome_usuario: "Henrique",
            nome_disciplina: "Portugues"
          },
          {
            id_discussao: 5,
            titulo: "discussao geo",
            descricao: "geografia respostas",
            data_discussao: new Date("2022-06-28"),
            usuarioIdUsuario: 2,
            disciplinaIdDisciplina: 3,
            nome_usuario: "Henrique",
            nome_disciplina: "Geografia"
          }
      ];
  }

  async findAll(){
      return this.repository; 
  }

  async findById(id){
    let res = this.repository.filter((discussao) => discussao.id_discussao == id);
    return res[0];
  }

  async findByUsuario(userId){
    let res = this.repository.filter((discussao) => discussao.usuarioIdUsuario == userId);
    return res;
  }

  async findByDisciplina(disciplinaId){
    let res = this.repository.filter((discussao) => discussao.disciplinaIdDisciplina == disciplinaId);
    return res;
  }

  async create(discussao){
    discussao.id_discussao = this.repository.length+1;
    let res = this.repository.push(discussao);
    return res;
}

  async deleteDiscussao(id){
    let res = this.repository.filter((discussao) => discussao.id_discussao == id)
    return res[0];
}
};

module.exports = new discussaoRepositoryMockup();