//Target
let buttonTeste = document.getElementById('button');

buttonTeste?.addEventListener('click', () => {
    console.log('funcionou')
})

// Se copilar esse código, ele ira ser transformado em um código que qualquer browser ira funcionar,
//mesmo os mais antigos
 /*
 tsconfig.json:
 target: transforma código typescript em códigos que podem ser lidos até em browsers antigos.
 lib [] : Permite especificar as bibliotecas do projeto em especifico.
 outDir: demonstra para qual pasta os arquivos do tipo JS irão, tem que tomar cuidado com o endereço do scritp no html.
 rooDir: especifica o código que o dev deseja copilar, "rooDir": "src", direciona o comando para onde deve estar a pasta source.
 strictNullChecks: validação que levanta erros casso tenha valores nulos no código, caso seja true, ele funciona, caso seja false ele para de funcionar.
 noInplicityAny: validação que levanta erros todas as vezes que houverem valores any nos códigos, true, ele funciona, caso seja false ele para de funcionar.


 
 
 */