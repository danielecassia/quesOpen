class comentarioRepositoryMockup{
  constructor(){
      this.repository = [
          {
              id_comentario: 1,
              descricao_comentario: "comentarioo vamo la",
              data_comentario: new Date("2022-06-28"),
              usuarioIdUsuario: 1,
              discussaoIdDiscussao: 1,
              nome_usuario: "Arthur",
          },
          {
            id_comentario: 2,
            descricao_comentario: "comentario sobre discussao de geografia",
            data_comentario: new Date("2022-06-28"),
            usuarioIdUsuario: 1,
            discussaoIdDiscussao: 5,
            nome_usuario: "Arthur",
          },
          {
            id_comentario: 3,
            descricao_comentario: "comentario sobre discussao de portugues",
            data_comentario: new Date("2022-06-28"),
            usuarioIdUsuario: 2,
            discussaoIdDiscussao: 3,
            nome_usuario: "Henrique",
          },
          {
            id_comentario: 4,
            descricao_comentario: "comentario sobre discussao de matematica",
            data_comentario: new Date("2022-06-28"),
            usuarioIdUsuario: 2,
            discussaoIdDiscussao: 2,
            nome_usuario: "Henrique",
          },
      ];
  }

  async findAll(){
      return this.repository; 
  }

  async comentariosByDiscussao(id){
    let res = this.repository.filter((comentario) => comentario.discussaoIdDiscussao == id);
    return res;
  }

  async create(dadosComentario){
    dadosComentario.id_comentario = this.repository.length+1;
    let res = this.repository.push(dadosComentario);
    return res;
}

};

module.exports = new comentarioRepositoryMockup();