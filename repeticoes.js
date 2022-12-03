let opçao ="";
let numero= 0;

do{
    numero =parseInt(prompt("digite um numero"));
    numero *=2;
    console.log(` o dobro deste numero é: ${numero}`);
    opçao = prompt("deseja sair?/digite 'S' para SIM e 'N' para NÃO");

}while(opçao=="S" || opçao=="s"));
console.log("FIM");
