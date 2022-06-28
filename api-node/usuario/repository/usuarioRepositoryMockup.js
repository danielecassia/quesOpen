class usuarioRepositoryMockup{
    constructor(){
        this.counter = 2;
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

    async deleteUser(id){
        let res = this.repository.filter((user) => user.id_usuario != id)
        return res[0];
    }

    async create(user){
        user.id_usuario = this.repository.length+1;
        let res = this.repository.push(user);
        return res;
    }
};

module.exports = new usuarioRepositoryMockup();