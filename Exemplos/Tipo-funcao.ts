/*
function somarValoreNumericos (numero1: number, numero2: number): number{ //Tem como definir o tipo da função e dos parametros como já visto, utilizar com frequencia.
    return numero1 + numero2;

}

console.log(somarValoreNumericos(1, 3));

function printaValoreNumericos(numero1: number, numero2: number): void{ //Funções que não retornam nada.
    console.log(numero1 + numero2)
}
*/


function somarValoreNumericosETratar (numero1: number, numero2: number, callback:(numero: number) => number): number{ //Callbacks servem para utilizar um passo a mais ou especifico de acordo com a lógica do código.
    let resultado = numero1 + numero2
    return callback(resultado);

}

function aoQuadrado(numero: number): number{
    return numero * numero;
}

function dividirPorEleMesmo(numero:number): number{
    return numero/numero
}

console.log(somarValoreNumericosETratar(1,3,aoQuadrado))
console.log(somarValoreNumericosETratar(1,3,dividirPorEleMesmo));

