class usuarioRepositoryMockup{
  constructor(){
    this.counter = 2;
    this.repository = [
      {
        id_usuario: 1,
        nome_usuario: "Henrique",
        email: "rick@a",
        senha: "123",
        data_nasc: "2002-04-07"
      },
      {
        id_usuario: 2,
        nome_usuario: "Arthur",
        email: "arthur@a",
        senha: "123",
        data_nasc: "2000-01-01"
      }
    ]
  }

  async findAll(){
    return this.repository;
  }

  async findById(id){
    let res = this.repository.filter((user) => user.id_usuario == id);
    console.log(res);
    return res[0];
  }

  // async create(user){
  //   user.id_usuario = this.repository.length + 1;
  //   this.repository.push(user);
  //   return this.repository;
  // }
}

module.exports = new usuarioRepositoryMockup();

