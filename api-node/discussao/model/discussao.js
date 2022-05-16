class Discussao {
    constructor(idDiscussao, idDisciplina, idUsuario, titulo, descricaoDiscussao, dataDiscussao) {
      this.idDiscussao = idDiscussao;
      this.idDisciplina = idDisciplina;
      this.idUsuario = idUsuario;
      this.titulo = titulo;
      this.descricaoDiscussao = descricaoDiscussao;
      this.dataDiscussao = dataDiscussao;
    }
}

module.exports = Discussao;