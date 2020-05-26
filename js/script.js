// Lista cognomi
var listaCognomi = ['Rossi', 'Bianchi', 'Verdi', 'Neri', 'Bologna', 'Roma', 'Forte'];
console.log('Lista cognomi iniziali: '+ listaCognomi);

// Chiedo il cognome all'utente
var cognomeUtente = prompt("Inserisci il tuo cognome");
console.log('Cognome inserito dall utente: '+cognomeUtente);

// Inserisco il suo cognome all'interno del database
nuovoUtente = listaCognomi.push(cognomeUtente);
console.log('Nuova lista con cognome dell utente: '+listaCognomi);

// Stampo la lista ordinata alfabeticamente
var ordineAlfabetico = listaCognomi.sort();

console.log('Lista cognomi ordinati alfabeticamente: '+ordineAlfabetico);


// Scrivo la posizione del cognome del nuovo utente

var verifica = false;

var i = 0;

while ((verifica == false) && (i < listaCognomi.length)) {

  // nuovoUtente == cognomeUtente


  if (nuovoUtente == cognomeUtente) {
    verifica = true;

  }


  i++;


}


if (verifica == true) {
  console.log(listaCognomi[i]);
}
