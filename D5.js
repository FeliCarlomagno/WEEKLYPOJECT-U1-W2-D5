"use strict";

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

cars[0].licensePlate = "AU7547CI";
cars[1].licensePlate = "AX78542XX";
cars[2].licensePlate = "WE55489II";

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let newCar = {
  brand: "BMW",
  model: " Serie 1",
  color: "Red",
  trims: [" Advantage", "MSport", "Base"],
};

cars.push(newCar);

console.log(cars);

/*for (let index = 0; index < cars.length; index++) {
  delete cars[index].trims;
}

console.log(cars);*/

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
/*const justTrims = [];

for (let index = 0; index < cars.length; index++) {
  cars[index].trims[1].push(justTrims);
}

console.log(cars);*/

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let index = 0; index < cars.length; index++) {
  if (cars.color === "b") {
    console.log("FRIZZ", cars[index]);
  } else {
    console.log("BUZZ");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

while (numericArray) {
  console.log(numericArray);
  numericArray++;
  if (numericArray === 32) break;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const charactersArray2 = [];

for (let index = 0; index < charactersArray.length; index++) {
  switch (charactersArray[index]) {
    case "a":
      charactersArray2.push("1");
      break;
    case "b":
      charactersArray2.push("2");
      break;
    case "c":
      charactersArray2.push("3");
      break;
    case "d":
      charactersArray2.push("4");
      break;
    case "e":
      charactersArray2.push("5");
      break;
    case "f":
      charactersArray2.push("6");
      break;
    case "g":
      charactersArray2.push("7");
      break;
    case "h":
      charactersArray2.push("8");
      break;
    case "i":
      charactersArray2.push("9");
      break;
    case "j":
      charactersArray2.push("10");
      break;
    case "k":
      charactersArray2.push("11");
      break;
    case "l":
      charactersArray2.push("12");
      break;
    case "m":
      charactersArray2.push("13");
      break;
    case "n":
      charactersArray2.push("14");
      break;
    case "o":
      charactersArray2.push("15");
      break;
    case "p":
      charactersArray2.push("16");
      break;
    case "q":
      charactersArray2.push("17");
      break;
    case "r":
      charactersArray2.push("18");
      break;
    case "s":
      charactersArray2.push("19");
      break;
    case "t":
      charactersArray2.push("20");
      break;
    case "u":
      charactersArray2.push("21");
      break;
    case "v":
      charactersArray2.push("22");
      break;
    case "w":
      charactersArray2.push("23");
      break;
    case charactersArray === "x":
      charactersArray2.push("24");
      break;
    case "y":
      charactersArray2.push("25");
      break;
    case "z":
      charactersArray2.push("26");
      break;
    default:
      break;
  }
}

console.log(charactersArray2);
