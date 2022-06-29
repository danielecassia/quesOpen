class disciplinaRepositoryMockup{
  async findAll() {
    return [
      {
        id_disciplina: 1,
        nome_disciplina: "Matemática"
      },
      {
        id_disciplina: 2,
        nome_disciplina: "Português"
      },
      {
        id_disciplina: 3,
        nome_disciplina: "História"
      },
      {
        id_disciplina: 4,
        nome_disciplina: "Ed. Física"
      },
      {
        id_disciplina: 5,
        nome_disciplina: "Inglês"
      }
    ];
  }
}

module.exports = new disciplinaRepositoryMockup();