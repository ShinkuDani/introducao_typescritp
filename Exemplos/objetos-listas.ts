const pessoa = { 
    nome: 'Felipe',
    idade: 19,
    profissao: 'Jogador Profissional'

}

pessoa.idade = 21 ;

const guilherme: {nome: string, idade: number, profissao: string} = {
nome: 'Guilherme',
idade: 21,
profissao: "desenhista"
    
}

const Kharina : {nome: string, idade: number, profissao: string} = {
    nome: 'Kharina',
    idade: 23,
    profissao: "jogador Profissional"
        
}

enum Profissao {
    Professor,
    Atriz,
    Ator,
    Desenvolvedora,
    Desenvolvedor,
    JogadoraDeLol,
    JogadorDeLol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao // torna opcional
}

interface Estudante extends Pessoa {
    materias: string[]
}

const leticia: Pessoa = {
    nome: 'Leticia',
    idade: 24,
    profissao: Profissao.JogadoraDeLol
}

const carlos: Pessoa = {
    nome: 'Carlos',
    idade: 30,
    profissao: Profissao.JogadorDeLol
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica Discreta', 'Programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matematica Discreta', 'Programação']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item)
    }
}

listar(monica.materias)