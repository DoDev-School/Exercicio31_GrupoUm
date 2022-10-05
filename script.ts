console.log("Olá Mundo!")

// 1. Faça um algoritmo que receba 10 números inteiros e armazene-os em um array.
// Depois armazene em um array PAR todos os números que forem pares, e em um
// array ÍMPAR os que forem ímpares, no final exiba os três vetores

arrayPrincipal :Number
arrayPar :Number
arrayImpar :Number

// let arrayPrincipal = [2,3,1,5,7,4,8,9,0,10]
// let arrayPar = arrayPrincipal.filter(x => x%2 == 0)
// let arrayImpar = arrayPrincipal.filter(x => x%2 == 1)

// console.log(arrayPrincipal)
// console.log(arrayPar)
// console.log(arrayImpar)

// 2. Faça um algoritmo com dois arrays A e B e preencha ambos com 10 elementos
// cada. Depois salve em um terceiro array somente os números que estiverem nos
// dois primeiros e forem maiores que 5. Exiba o último array no final.
// Ex.: arrayA[5,6,2,4,8,7,3,6,7,1]
// arrayB[8,5,3,1,4,7,8,2,3,6]
// Deve ser exibido no último array apenas os números arrayC[6,8,8,7,6,7]

// arrayA : Number
// arrayB : Number
// arrayC : Number

// let arrayA = [5,6,2,4,8,7,3,6,7,1]
// let arrayB = [8,5,3,1,4,7,8,2,3,6]
// let arrayC = []

// arrayA.forEach(x => {
//     arrayB.forEach(y => {
//         if(x == y && x > 5){
//             arrayC.push(x)
//         }
//     })    
// })
// console.log(arrayC)

// 3. Crie uma classe Aluno com as propriedades: nome: string
// idade: number
// altura: number
// sexo: string
// Depois crie um array e preencha-o com alguns objetos da classe Aluno, e crie as
// seguintes funções:
// ● Que exibe quantos alunos com mais de 13 anos tem uma altura menor do
// que a média da altura de todos os alunos;
// ● Que retorne a maior altura entre as mulheres;
// ● Que retorne o nome do aluno mais novo entre os homens;
// ● Que retorne o primeiro Aluno que tiver a idade par ou tiver mais que 1,90 de
// altura.

class Aluno{
    Nome : String
    Idade : Number
    Altura : Number
    Sexo : String

    constructor(nome, idade, altura, sexo){
        this.Nome = nome
        this.Idade = idade
        this.Altura = altura
        this.Sexo = sexo
    }
}

arrayAluno : String
let arrayAluno = []




