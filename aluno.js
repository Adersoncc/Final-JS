class Aluno {
  constructor(nome, faltas, notas) {
    this.nome = nome
    this.faltas = faltas
    this.notas = notas
    this.media = () => {
      let total = 0
      for (let numero of this.notas) {
        total += numero
      }
      return total / this.notas.length
    }

    this.faltas1 = () => (this.totalFaltas = this.faltas += 1)
  }
}

//....
let a1 = new Aluno('Abigail', 3, [9, 8, 5])
let a2 = new Aluno('Jonatham', 1, [9, 7, 5])
let a3 = new Aluno('Franco', 4, [7, 7, 9])
let a4 = new Aluno('Donova', 3, [9, 8, 6])
let a5 = new Aluno('Brasil', 2, [6, 8, 8])
let a6 = new Aluno('Deborha', 1, [9, 8, 7])
let a7 = new Aluno('Renata', 4, [6, 8, 8])
let a8 = new Aluno('Rita', 4, [9, 8, 9])
let a9 = new Aluno('Paramonte', 3, [8, 8, 8])
let a10 = new Aluno('Disney', 3, [9, 7, 5])

let listaAlunos = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10]

//....
//conseguir adcionar por aqui!
listaAlunos.push(new Aluno('Roberval', 1, [8, 7, 6]))
listaAlunos.push(new Aluno('Rulious', 1, [8, 7, 6]))
listaAlunos.push(new Aluno('Pitagors', 1, [8, 9, 6]))

//....
module.exports = {
  listaAlunos: listaAlunos,
  Aluno: Aluno
}

//....
console.log(listaAlunos)
