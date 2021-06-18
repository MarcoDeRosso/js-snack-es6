let tableHTML = document.querySelector('.table-container');
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


let teamsArray = [{
        nome: "Inter",
        punti_fatti: 10,
        falli: 0
    },
    {
        nome: "Milan",
        punti_fatti: 20,
        falli: 0
    },
    {
        nome: "Juventus",
        punti_fatti: 80,
        falli: 0
    }
];



let numeroMaggioreFalli = 0;
let teamMaggioreFalli;

for (let y = 0; y < teamsArray.length; y++) {
    teamsArray[y].falli = getRandomNumber(0, 50);

    const { falli } = teamsArray[y];

    if (falli > numeroMaggioreFalli) {
        numeroMaggioreFalli = falli;
        teamMaggioreFalli = teamsArray[y];
    }

}

console.log(numeroMaggioreFalli)

for (let y = 0; y < teamsArray.length; y++) {

    const { nome, punti_fatti, falli } = teamsArray[y];

    tableHTML.innerHTML += `
<ul>
<li>${nome}</li>
<li>${punti_fatti}</li>
<li>${falli}</li>
</ul>
`
}

for (let y = 0; y < teamsArray.length; y++) {

    if (teamsArray[y] === teamMaggioreFalli) {
        document.getElementsByTagName("ul")[y + 1].style.backgroundColor = "yellow";
    }
}