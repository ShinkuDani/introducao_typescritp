let valorAny: any; //any é um tipo que recebe qualque tipo, e não é pra usar ou evitar o maximo que der.
valorAny = 3;
valorAny='ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;

let valorString2: string = 'teste2';
valorString2 = valorAny;

function somarString (string1: string, string2: string){
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('Ola', 'Belezinha');
