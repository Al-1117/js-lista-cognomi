// Lista cognomi
var listaCognomi = ['Rossi', 'Bianchi', 'Verdi', 'Neri', 'Bologna', 'Roma', 'Forte'];
console.log('Lista cognomi iniziali: '+ listaCognomi);

// Chiedo il cognome all'utente

var cognomeUtente = prompt("Inserisci il tuo cognome");
console.log('Cognome inserito dall utente: '+cognomeUtente);

while ((cognomeUtente.length == 0) || (!isNaN(parseInt(cognomeUtente) ))){
  cognomeUtente = prompt("Cognome inserito non valido. Per favore, Inserisci il tuo cognome");

}

// Controllo se il cognome è già inserito nel database

var verifica = false;

for (var i = 0; i < listaCognomi.length; i++) {
  if ( cognomeUtente == listaCognomi[i] ){
    verifica = true
  }
}
// ESITO VERIFICA E COMUNICA ALL'UTENTE SE IL NUMERO DI POSIZIONAMENTO DEL COGNOME
var messaggio

if (verifica == false) {
  // Inserisco il suo cognome all'interno del database
  listaCognomi.push(cognomeUtente);
  console.log('Nuova lista con cognome dell utente: '+listaCognomi);

  // Stampo la lista ordinata alfabeticamente e comunico posizione cognome utente
  var ordineAlfabetico = listaCognomi.sort();
  console.log('Lista cognomi ordinati alfabeticamente: '+ordineAlfabetico);

  var numeroCognomeUtente = parseInt(listaCognomi.indexOf(cognomeUtente))
  messaggio = "La posizione nella lista del tuo cognome è nr. " + (numeroCognomeUtente + 1);
  console.log(messaggio);

// Se già presente, non lo inserisco nel database

} else {
  messaggio = "il tuo cognome è già nel database";
  console.log(messaggio);

}



//
//
// var i = 0;
//
// while (i < listaCognomi.length) {
//   if ( cognomeUtente == listaCognomi[i] ) {
//     verifica = true;
//
//
//   }
//
//   i++;
// }
//
//
//
