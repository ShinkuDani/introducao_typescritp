let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar';
stringTeste = anyEstaDeVolta;

let unknownValor: unknown; // A diferenca do unknown, é que é necessario colocar uma validação para validar que essa variavel unknown é do tipo da variavel que o dev deseja colocar.
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';

//stringTeste2 = unknownValor;

if (typeof unknownValor === 'string') { // Verificação necessaria para passar um unknown
    stringTeste2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never { //tipo Never é um tipo que siguinifica que o codigo nunca é finalizado, depois do throw ele para.
    throw {error: erro, code: codigo} // codigo interronpido

}

jogaErro('Deu Erro', 500);