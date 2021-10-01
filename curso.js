const { listaAlunos } = require('./aluno')
let Aluno = require('./aluno')

//....
let curso = {
  nomeCurso: 'Lógica',
  notaAprovacao: 7,
  maxFaltas: 3,
  listaDeEstudantes: Aluno,

  //....
  // alunoNovo: new Aluno.constructor('Rulious', 1, [8, 7, 6]),
  // alunoNovo1: new Aluno.constructor('Pitagors', 1, [8, 9, 6]),
  // alunoNovo2: new Aluno.constructor('Roberval', 1, [8, 7, 6]),
  // alunoNovo3: this.listaDeEstudantes.push(new Aluno.listasAlunos('Gomes', 1, [8, 8, 6]))
  //tentei adcionar esses  por aqui mais nao consequir!!
  //....
  //add aluno novo no outro arquivo!
  //Dai eu nao entendi porque mesmo assim não segue ir para o proximo passo!
  //Já que deu para add no arquivo Aluno!
  //Não conseguir identificar o que tem de errado na função abaixo!
  //....
  alunoNovo: function (nome, faltas, array) {
    const alunoNovo1 = new Aluno.push('AAAAAA', 1, [8, 7, 6])
  },
  //....
  //....função do aprovado
  aprovado: function (aluno, nota) {
    if (
      Aluno.media() >= this.notaAprovacao &&
      Aluno.faltas1() < this.maxFaltas
    ) {
      return true
    } else if (
      Aluno.faltas1() === this.maxFaltas &&
      Aluno.media() > this.notaAprovacao * 1.1
    ) {
      return true
    } else {
      return false
    }
  },
  //....
  //....funcao do resultado
  resultados: () => {
    let aprovados = []
    for (let estudante of this.listaDeEstudantes) {
      return aprovados.push(this.aprovado(estudante))
    }
  }
}

//....
let listaDeAprovados = curso.resultados

//....
console.log(listaDeAprovados)
//....
console.log(Aluno.resultado)
