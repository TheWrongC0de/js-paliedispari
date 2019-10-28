//L’utente sceglie pari o dispari e un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer.
//Sommiamo i due numeri e dichiariamo chi ha vinto.

//indico le variabili esterne alla funzione
var sceltapc, sommaesterna,totale;

//Chiedo le 2 scelte
var scelta1 = prompt("Pari o dispari?");
console.log(scelta1);
var scelta2 = prompt("scegli un numero da 1 a 5")
console.log(scelta2);

sceltapc = NPC();

console.log(sceltapc);

sommanumeri = addizione(scelta2,sceltapc);
console.log(sommanumeri)

vincitore = pardisp(sommanumeri,scelta1);
console.log(vincitore);

//BLOCCO FUNZIONI

function NPC (){
    var numeropc = Math.floor(Math.random() * 5) + 1;
    return numeropc;
}


function addizione(num1,num2){
    var somma = num1 + num2;
    console.log(somma);
    return somma;

}

function pardisp(somma,scelta2){
    if (somma % 2 == 0 && scelta2 == "pari") {
        return "ha vinto il giocatore";
    } else if (somma % 2 == 0 && scelta2 == "dispari") {
        return "ha vinto il pc";
    } else if (somma % 2 !== 0 && scelta2 == "dispari") {
        return "ha vinto il giocatore";
    } else if (somma % 2 !== 0 && scelta2 == "pari") {
        return "ha vinto il pc";
    }
}
