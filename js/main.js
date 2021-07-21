//SNACK 1------------------------------------------------------------------------------------------------------------------------------
//Inserisci un numero
var numero = (parseInt(prompt('Inserisci un numero')));

//se è pari stampa il numero
if((numero % 2) == 0)
{
    var risultato = "pari"; {
        console.log(numero);
    }
}
//se è dispari stampa il numero successivo
else {
    var risultato = "dispari";
    console.log(numero + 1);
}

//SNACK 2------------------------------------------------------------------------------------------------------------------------------
//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi
var lista_nomi = ['Alessio', 'Carlo', 'Franco', 'Carmine'];
var lista_cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi'];



//Gatsby vuole generare una falsa lista di invitati.
var listaRandom = lista_nomi[Math.floor(Math.random()*lista_nomi.length)]+ ' ' + lista_cognomi[Math.floor(Math.random()*lista_cognomi.length)]//Unisco le 2 liste in maniera Random
console.log(listaRandom);


//SNACK 3------------------------------------------------------------------------------------------------------------------------------
//Crea un array di numeri interi 
var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var somma = 0;

//Fai la somma di tutti gli elementi che sono in posizione dispari

for (var i = 0; i < lista.length; i += 2)   
{
    somma += lista[i];
}

console.log(somma)
