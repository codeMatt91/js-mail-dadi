/* 

# Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.

1- creare array
2- chiedi all'utente di inserire la sua mail
3- recupero dove scrivere il risultato 
4- verificare che la mail sia nell'array
5- stampa l'esito 

*/

console.log('JS ok!');

//! # 1
const emailList = ['matteo.imbimbo@yahoo.it', 'marina.92@gmail.com', 'valentina91@libero.it', 'giulioleo@hotmail.com', 'giulia89@gmail.com'];

//! # 2
const userEmail = prompt('inserisci la tua mail:');

// ! # 3
const writeOutcome = document.getElementById('email');

//! # 4
if (emailList.includes(userEmail)) {
   writeOutcome.innerText = `La mail ${userEmail} esiste nel sistema`;
} else {
   writeOutcome.innerText = `La mail ${userEmail} non esiste nel sistema`;
}