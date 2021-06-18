/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Svilupparlo in ES6.*/

let teamsArray = [{
        nome: "inter",
        punti_fatti: 0,
        falli: 0
    },
    {
        nome: "milan",
        punti_fatti: 0,
        falli: 0
    },
    {
        nome: "juventus",
        punti_fatti: 0,
        falli: 0
    }
];
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let y = 0; y < teamsArray.length; y++) {
    teamsArray[y].punti_fatti = getRandomNumber(0, 100);
    teamsArray[y].falli = getRandomNumber(0, 50);
}

console.log(teamsArray);

const falliArray = [];

for (let x = 0; x < teamsArray.length; x++) {
    const { nome, falli } = teamsArray[x];
    falliArray.push({
            nome,
            falli
        })
        //falliArray[x] = {
        //  nome,
        // falli_subiti
        // };
};



console.log(falliArray);