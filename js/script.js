// Lista cognomi
var listaCognomi = ['Rossi', 'Bianchi', 'Verdi', 'Neri', 'Bologna', 'Roma', 'Forte'];
console.log('Lista cognomi iniziali: '+ listaCognomi);

// Chiedo il cognome all'utente
var cognomeUtente = prompt("Inserisci il tuo cognome");
console.log('Cognome inserito dall utente: '+cognomeUtente);

// Inserisco il suo cognome all'interno del database
listaCognomi.push(cognomeUtente);
console.log('Nuova lista con cognome dell utente: '+listaCognomi);

// Stampo la lista ordinata alfabeticamente
var ordineAlfabetico = listaCognomi.sort();

console.log('Lista cognomi ordinati alfabeticamente: '+ordineAlfabetico);

var messaggio


// Controllo se il cognome è già inserito nel database

var verifica = false;
var i = 0;

while ((verifica) && (i < listaCognomi.length))  {
  if ( cognomeUtente == listaCognomi[i] ) {
    verifica = true;


  }

  i++;
}

// Stampo l'esito e comunico il numero di posizionamento all'utente

if (verifica) {
  messaggio = "il tuo cognome è già nel database";
  console.log(messaggio);

} else {
  var numeroCognomeUtente = parseInt(listaCognomi.indexOf(cognomeUtente))
  messaggio = "La posizione nella lista del tuo cognome è nr. " + (numeroCognomeUtente + 1);
  console.log(messaggio);
}
