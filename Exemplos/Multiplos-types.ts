type input = number | string; //Crianção de tipos


/**
 * 
 * function somarValores (input1: number| string, input2: number|string){ //De preferencia não utilizar a não ser que seja necessario
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString(); //Boa pratica
    }else{

        return input1 + input2;

    }
}
 */

function somarValores (input1: input, input2: input){ //Utilizando o tipo personalizado
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString(); //Boa pratica
    }else{

        return input1 + input2;

    }
}

console.log(somarValores(1,5));
console.log(somarValores('ola',', tudo de boa ?'));
console.log(somarValores('1',5));

