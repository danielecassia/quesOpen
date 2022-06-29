class ComentarioMockup{
  constructor(){
    this.repository = [
      {
        id_comentario: 1,
        data_comentario: new Date("2022-01-06"),
        descricao_comentario: "Comentário 1 - Discussão 1",
        usuarioIdUsuario: 1,
        discussaoIdDiscussao: 1
      },
      {
        id_comentario: 2,
        data_comentario: new Date("2022-02-06"),
        descricao_comentario: "Comentário 2 - Discussão 2",
        usuarioIdUsuario: 1,
        discussaoIdDiscussao: 2
      },
      {
        id_comentario: 3,
        data_comentario: new Date("2022-03-06"),
        descricao_comentario: "Comentário 3 - Discussão 3",
        usuarioIdUsuario: 1,
        discussaoIdDiscussao: 3
      },
      {
        id_comentario: 4,
        data_comentario: new Date("2022-04-06"),
        descricao_comentario: "Comentário 4 - Discussão 1",
        usuarioIdUsuario: 2,
        discussaoIdDiscussao: 1
      },
      {
        id_comentario: 5,
        data_comentario: new Date("2022-05-06"),
        descricao_comentario: "Comentário 5 - Discussão 2",
        usuarioIdUsuario: 2,
        discussaoIdDiscussao: 2
      },
      {
        id_comentario: 6,
        data_comentario: new Date("2022-06-06"),
        descricao_comentario: "Comentário 6 - Discussão 1",
        usuarioIdUsuario: 3,
        discussaoIdDiscussao: 1
      }
    ];
  }
  
  async create(comentario){
    let id = this.repository.length + 1;
    comentario.id_comentario = id;

    this.repository.push(comentario);

    // ID do comentário criado e número de comentários criados
    return [id, 1];
  }

  async findAll(options = null){
    if (!options)
      return this.repository;
    else {
      return this.repository.filter(
        (comentario) => {
          let res = true;
          Object.keys(options.where).forEach(
            key => {
              if(comentario[key] != options.where[key])
                res = false;
            }
          );

          return res;
        }
      );
    }
  }
};

module.exports = new ComentarioMockup();