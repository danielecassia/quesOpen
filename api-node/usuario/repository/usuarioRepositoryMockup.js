class usuarioRepositoryMockup{
    constructor(){
        this.repository = [
            {
                id_usuario: 1,
                nome_usuario: "Arthur",
                email: "arthur@gmail.com",
                senha: "123",
                data_nasc: new Date("2000-01-01")
            },
            {
                id_usuario: 2,
                nome_usuario: "Henrique",
                email: "rick@c",
                senha: "123",
                data_nasc: new Date("2002-04-07")
            }
        ];
    }

    async findAll(){
        return this.repository;
    }

    async findById(id){
        let res = this.repository.filter((user) => user.id_usuario == id)
        return res[0];
    }

    async findByEmail(email){
        let res = this.repository.filter((user) => user.email == email)
        return res[0];
    }

    currentUser = this.findById;

    async deleteUser(id){
        // let deletedUser = this.repository.filter((user) => user.id_usuario == id);

        this.repository = this.repository.filter((user) => user.id_usuario != id);

        // TODO: checar tipo retorno
        // return id;
        return 1;
    }

    async create(user){
        let id = this.repository.length + 1;
        user.id_usuario = id;

        this.repository.push(user);

        // ID do usuário criado e número de usuários criados
        return [id, 1];
    }
};

module.exports = new usuarioRepositoryMockup();