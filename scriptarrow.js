// cap 1 Arrow function

//function calcolaPrezzo(prezzo) {
//    return prezzo * 1.2;
//}


//const calcolaPrezzoArrow = prezzo => prezzo * 1.2; // arrow function

//console.log(calcolaPrezzo(50));
//console.log(calcolaPrezzoArrow(50));


// cap 2 forEach e foreach con arrow function

const listaSpesa = ["latte", "pane", "uova"];

listaSpesa.forEach(function (prodotto) {
    console.log(`articolo presente: ${prodotto}`);

})

//listaSpesa.forEach(prodotto => console.log(`articolo presente: ${prodotto}`));



// cap 3 map

//const prezzi = [15, 25, 35]

//const prezziScontati = prezzi.map(prezzo => prezzo * 0.9);
//console.log(prezziScontati);



// cap 4 find

//const prodotti = ["latte", "pane", "uova"]

//const prodottoTrovato = prodotti.find(prodotto => prodotto.includes("e"));
//console.log(prodottoTrovato);



// cap 5 filter

//const numeri = [4, 9, 12, 3]
//const numeriValidi = numeri.filter(numeri => numeri >= 5);
//console.log(numeriValidi);



// cap 6 some

//const numeri = [2, 4, 7]
//const numeriDispari = numeri.some(numeri => numeri % 2 !== 0);

//console.log(numeriDispari);


// cap 7 every

const numeri = [20, 15, 18]
const importi = numeri.every(importo => importo >= 10);
console.log(importi)

