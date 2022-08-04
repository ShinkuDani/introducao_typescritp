let button = document.getElementById('button')
let input = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumero (numero1: number, numero2: number, devePrintar: boolean, frase: string){
    let resultado = numero1 + numero2;
    if(devePrintar){
        console.log(frase + resultado);        
    }else{
        return numero1 + numero2;
    }
    
}

let devePrintar = true;
let frase: string;
frase = 'O valor é: '

if(button){
    button.addEventListener('click', () => {
        if(input && input2){
            console.log(adicionarNumero(Number(input.value), Number(input2.value), devePrintar, frase))
        }
    })
}
