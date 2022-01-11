/* 

 # Gioco dei dadi
 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 Stabilire il vincitore, in base a chi fa il punteggio più alto.
 Stampare in console i tiri di dado e il risultato.

 1- Generare un numero random per l' utente da 1 a 6
 2- generare un numero random per il PC
 3- confrontare i numeri 
 4- stabilire il vincitore 
 5- stamparlo in pagina
*/

console.log('JS OK!');

//*  # 1
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

//*  # 2
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

//*  # 3-4-5
const writeElement = document.getElementById('dadi');

if (userNumber > pcNumber) {
   writeElement.innerText = `I numeri usciti sono: l'utente =${userNumber}, il Pc =${pcNumber}. Il vincitore sei tu`;
} else if (userNumber < pcNumber){
   writeElement.innerText = `I numeri usciti sono: l'utente =${userNumber}, il Pc =${pcNumber}. Il vincitore è il Pc`;
} else {
   writeElement.innerText = `I numeri usciti sono: l'utente =${userNumber}, il Pc =${pcNumber}. L'esito ha dato un : PAREGGIOOOOOO`;
}