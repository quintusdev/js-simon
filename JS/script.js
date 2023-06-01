let gennum_random = [];
let numArray = document.getElementById('num_random');
let second = 5;

// Funzione per generare 5 numeri casuali da inserire nell'array
function getNumRandom(min, max) {
    for (let i = 0; i < 5; i++) {
        gennum_random[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return gennum_random;
}

// Richiamo la funzione per popolare l'array con numeri casuali compresi tra 1 e 100
getNumRandom(1, 100);

// Visualizza immediatamente l'array nell'elemento HTML con id "num_ramdom"
numArray.innerText = gennum_random;

// Imposta un timeout per far scomparire l'array dopo un certo numero di secondi
setTimeout(function() {
    numArray.innerText = '';
}, second * 1000);

// Creo la funzione setTimeout che fa inserire all'utente i numeri
setTimeout(function() {
    // Creo 5 prompt dove faccio inserire all'utente i numeri che si ricorda
    let num1 = parseInt(prompt('Inserisci il primo numero'));
    let num2 = parseInt(prompt('Inserisci il secondo numero'));
    let num3 = parseInt(prompt('Inserisci il terzo numero'));
    let num4 = parseInt(prompt('Inserisci il quarto numero'));
    let num5 = parseInt(prompt('Inserisci il quinto numero'));
    
    // Confronto i numeri in input con quelli dell'array
    const numutente = [num1, num2, num3, num4, num5];

    console.log(numutente);
    console.log(gennum_random);

    // Creo un array vuoto dove andranno inseriti i numeri indovinati
    const numeriIndovinati = [];

    // Scorro l'array dei numeri utente e verifico se sono inclusi e memorizzo la quantità e i numeri indovinati
    for (let i = 0; i < numutente.length; i++) {
        if (gennum_random.includes(numutente[i]) && !numeriIndovinati.includes(numutente[i])) {
            numeriIndovinati.push(numutente[i]);
        }
    }

    // Visualizzo i numeri indovinati e la quantità
    alert("Numeri indovinati: " + numeriIndovinati + "\nQuantità di numeri indovinati: " + numeriIndovinati.length);

}, (second + 1) * 1000);
