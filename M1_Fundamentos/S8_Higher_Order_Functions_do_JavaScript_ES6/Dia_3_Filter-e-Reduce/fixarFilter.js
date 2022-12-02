const notaEstudantes = [
  {
    nome: 'Joyci',
    nota: 100
  },
  {
    nome: 'Ronald',
    nota: 50
  },
  {
    nome: 'Joel',
    nota: 80
  },
  {
    nome: 'Ana',
    nota: 90
  },
  {
    nome: 'Carol',
    nota: 70
  }
];

const alunosComAprovacao = notaEstudantes.filter((pessoa) => pessoa.nota >= 80);
const alunosSemAprovacao = notaEstudantes.filter((pessoa) => pessoa.nota < 80);

console.log(alunosComAprovacao);
console.log(alunosSemAprovacao);