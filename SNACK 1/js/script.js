/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. 
Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6 */

/*var biciArray = [{
        nome: "Bici ultra leggera",
        peso: 3
    },
    {
        nome: "Bici ultra resistente",
        peso: 5
    }
]

var bicipiuLeggera;
var pesoPiuLeggero;

for (var b = 0; b < biciArray.length; b++) {
    var thisPeso = biciArray[b].peso;
    if (typeof pesoPiuLeggero === `undefined` ||thisPeso < pesoPiuLeggero) {
        bicipiuLeggera = biciArray[b];
        pesoPiuLeggero = thisPeso;
    }

};

console.log(bicipiuLeggera)*/


const biciArray = [{
        nome: "Bici ultra leggera",
        peso: 3
    },
    {
        nome: "Bici ultra resistente",
        peso: 5
    }
]

let bicipiuLeggera;
let pesoPiuLeggero;

for (let b = 0; b < biciArray.length; b++) {
    const { peso } = biciArray[b];
    if (typeof pesoPiuLeggero === `undefined` || peso < pesoPiuLeggero) {
        bicipiuLeggera = biciArray[b];
        pesoPiuLeggero = peso;
    }

};

const { nome } = bicipiuLeggera;

console.log(`la bici più leggera è ${nome}`)