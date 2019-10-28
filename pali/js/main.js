//Una funzione per capire se la parola è palindroma


//Chiedo la parola
var parola = prompt("Inserisci una parola")

// Divido la parola lettera per lettera
console.log(parola.split(""));

// Divido la parola lettera per lettera reversando il tutto

console.log(parola.split("").reverse(""));//Problema : le lettere vengono divise
//in questo modo non mi riconosce la parola per intero


// Ho trovato ''join'' che da quel che ho capito rincolla il tutto
console.log(parola.split("").reverse("").join(""));

//Output
document.getElementById("parola").innerHTML= pali(parola);

//funzione

function pali(ilap) {

  var pali = ilap.split("").reverse("").join("");

  if (pali === ilap ) {
        return "parola palindroma";
        }
        else {
        return "parola non palindroma";
        }
}

//Primo esercizio che riesco a fare senza aiuto , sembra tutto così irreale.
