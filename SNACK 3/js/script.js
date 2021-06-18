/* Snack 3
Abbiamo sempre un array di squadre, con:
nome
punti fatti
falli subiti
Stampare in html (in forma tabellare!!! :allegria::allegria:)
i dati relativi alle squadre evidenziando in giallo la riga corrispondente alla squadra con più falli subiti.*/
let tableHTML = document.querySelector('.table-container');
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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



let numeroMaggioreFalli = 0;
let teamMaggiorefalli;
let flag = false;
for (let y = 0; y < teamsArray.length; y++) {
    teamsArray[y].punti_fatti = getRandomNumber(0, 100);
    teamsArray[y].falli = getRandomNumber(0, 50);
    const { nome, punti_fatti, falli } = teamsArray[y];


    tableHTML.innerHTML += `
    <ul>
    <li>${nome}</li>
    <li>${punti_fatti}</li>
    <li>${falli}</li>
    </ul>
    `

    if (falli > numeroMaggioreFalli) {
        numeroMaggioreFalli = falli;
        teamMaggiorefalli = teamsArray[y];
    }

}
console.log(`numero maggiore falli ${numeroMaggioreFalli}`)

tableHTML.innerHTML += `
<ul>
<li style="background-color:yellow">${numeroMaggioreFalli}</li>
</ul>
`



console.log(teamsArray);