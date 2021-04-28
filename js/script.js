// 1 mail
// chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull'esito del controllo.

// 2 Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio piu alto.

// ESERCIZIO 1
// dichiaro l'array con un numero random di email
var emailList = ["ciao@luca.it", "ciao@jessica.it" , "ciao@pino.it", "ciao@ciccio.it", "ciao@paolo.it", "ciao@andrea.it"];
var email = prompt("Scrivi la tua email");
var controllo = 0;

for (var i=0; i<emailList.length; i++) {

    if (emailList[i] === (email)) {
        controllo = 1;
    }
}
if (controllo) {
    document.getElementById("email").innerHTML = "la tua email è presente!"
} else {
    document.getElementById("email").innerHTML = "la tua email non è presente!" 
}
console.log(controllo);


//  esercizio 2
 var numeroUtente = Math.floor(Math.random() * 6) + 1;
 document.getElementById("numero_utente").innerHTML = numeroUtente;

 var numeroAI = Math.floor(Math.random() * 6) + 1;
 document.getElementById("numero_ai").innerHTML = numeroAI;

 if (numeroUtente > numeroAI) {
     document.getElementById("risultato").innerHTML = "Complimenti! Hai vinto!";
 } else if (numeroUtente < numeroAI) {
     document.getElementById("risultato").innerHTML = "Peccato! Hai perso!";
 } else {
     document.getElementById("risultato").innerHTML = "Pareggio!";
}