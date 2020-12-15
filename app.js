let noms = ["Susu", "Sisi", "Marcko", "Polo", "Duldul", "Bidule"];
let objets = ["bois", "pains", "sable", "bonbons", "gâteaux", "couteau"];
let temperatures = ["2°", "10°", "25°", "35°", "100°"];
let lieux = ["forêts", "plage", "maison", "dehors"];
let verbes = ["manger", "boire", "promener", "courir"];

let creationStory = document.getElementById("creation");
let textGenerator = document.getElementById('text');

creationStory.addEventListener('click', function story(){
    let utilisateurName = document.getElementById('utilisateurName').value;
    let randomNoms = Math.floor(Math.random()* 6);
    let randomObjets = Math.floor(Math.random()* 6);
    let randomTemperatures = Math.floor(Math.random()* 4);
    let randomLieux = Math.floor(Math.random()* 4);
    let randomVerbes = Math.floor(Math.random()* 4);

    textGenerator.innerHTML += utilisateurName + " et " + noms[randomNoms] + " prennent ";

        if (randomObjets === 3 || randomObjets === 4 ) {
            textGenerator.innerHTML += "des " + objets[randomObjets] + ". ";
        }
        else if (randomObjets === 5) {
            textGenerator.innerHTML += "un " + objets[randomObjets] + ". ";
        }
        else {
            textGenerator.innerHTML += "du " + objets[randomObjets] + ". ";
        }

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