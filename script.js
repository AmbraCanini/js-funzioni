// Capitolo 1 Che cos'è una funzione ex

//function miaEta() {
//    console.log("ho 31 anni")
//}

//invocazione
//miaEta();


// capitolo 2 Il valore di ritorno: return
//function calcoloEta() {
//    return 2026 - 1994
//}

//const eta = calcoloEta();
//console.log(eta);


////capitolo 3 parametri
//function calcolaArea(base, altezza) {
//    return base * altezza;
//}
//
//const area = calcolaArea(5, 10)
//console.log(calcolaArea(5, 10));


//scope & visibilità
//function convertiInEuro(dollari, tasso) {
//    return dollari / tasso;
//
//}
//
//const euro = convertiInEuro(100, 1.12);
//console.log(euro);


//cap 5 le quattro regole d'oro

function mediaVoti(voto1, voto2, voto3) {
    return (voto1 + voto2 + voto3) / 3;
}

function promozione(media) {
    return media >= 6;
}

const mediaStudente = mediaVoti(8, 9, 10);
const risultato = promozione(mediaStudente);

if (risultato === true) {
    console.log('Promosso con media ' + mediaStudente);
} else {
    console.log('Bocciato con media ' + mediaStudente);
}