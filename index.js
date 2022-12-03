let multiplicando = 0; 
let limite = 0;
let produto =0;
let contador = 1;
 
console. log("inicio de programa");

multiplicando = parseInt(prompt("A tabuada de qual número voce deseja montar?"))
limite = parseInt(prompt("atea que o número a tabuada íra?"));

while(contador <= limite){
    produto= multiplicando * contador;
    console. log (`${multiplicando} * ${contador} = ${produtor}`);
    contador++;
}

console. log("fim de programa");
