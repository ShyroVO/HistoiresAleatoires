let noms = ["Susu", "Sisi", "Marcko", "Quebec", "Bob", "Bidule"];
let objets = ["bois", "pains", "sable", "bonbons", "gâteaux", "couteau"];
let temperatures = ["2°", "10°", "25°", "35°", "100°"];
let lieux = ["forêts", "plage", "maison", "dehors"];
let verbes = ["manger", "boire", "promener", "courir"];

let creationStory = document.getElementById("creation");
let textGenerator = document.getElementById('text');

function getRandom(tab){
    return Math.floor(Math.random() * tab.length);
}

creationStory.addEventListener('click', function story(){
    let utilisateurName = document.getElementById('utilisateurName').value;
    let randomObjets = getRandom(objets);
    let randomTemperatures = getRandom(temperatures);
    let randomLieux = getRandom(lieux);
    let randomVerbes = getRandom(verbes);

    textGenerator.innerHTML += utilisateurName + " et " + noms[getRandom(noms)] + " prennent ";

        // Objects:
        if (randomObjets === 3 || randomObjets === 4 ) {
            textGenerator.innerHTML += "des " + objets[randomObjets] + ". ";
        }
        else if (randomObjets === 5) {
            textGenerator.innerHTML += "un " + objets[randomObjets] + ". ";
        }
        else {
            textGenerator.innerHTML += "du " + objets[randomObjets] + ". ";
        }

        // Temperatures:
        if (randomTemperatures === 0 || randomTemperatures === 1) {
            textGenerator.innerHTML += "Il fait froid avec ses " + temperatures[randomTemperatures] + ". ";
        }
        else {
            textGenerator.innerHTML += "Il fait chaud avec ses " + temperatures[randomTemperatures] + ". ";
        }

    textGenerator.innerHTML += "Ils vont donc ";

        if ( randomLieux === 1 || randomLieux === 2 ) {
            textGenerator.innerHTML += "à la " + lieux[randomLieux] + " pour ";
        }
        else {
            textGenerator.innerHTML += "en " + lieux[randomLieux] + " pour ";
        }

        if (randomVerbes === 2 ) {
            textGenerator.innerHTML += "se " + verbes[randomVerbes] + ". " + "<br>" ;
        }
        else {
            textGenerator.innerHTML += verbes[randomVerbes] + ". " + "<br>";
        }
})