class Comentario {
  constructor(idComentario, idUsuario, idDiscussao, dataComentario, descricaoComentario) {
    this.idComentario = idComentario;
    this.idUsuario = idUsuario;
    this.idDiscussao = idDiscussao;
    this.dataComentario = dataComentario;
    this.descricaoComentario = descricaoComentario;
  }
}

module.exports = Comentario; 