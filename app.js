let noms = ["Susu", "Sisi", "Marcko", "Polo"];
let objets = ["bois", "pierre", "pain", "couteau"];
let temperatures = ["2°", "10°", "25°", "0°"];
let lieux = ["forêts", "plage", "maison", "dehors"];
let verbes = ["manger", "boire", "promener", "courir"];

let creationStory = document.getElementById("creation");
let utilisateurName = document.getElementById('utilisateurName');
let textGenerator = document.getElementById('text');

creationStory.addEventListener('click', function story(){
    let randomNoms = Math.floor(Math.random()* 4);
    let randomObjets = Math.floor(Math.random()* 4);
    let randomTemperatures = Math.floor(Math.random()* 4);
    let randomLieux = Math.floor(Math.random()* 4);
    let randomVerbes = Math.floor(Math.random()* 4);

    textGenerator.innerHTML = noms[randomNoms] + " " + objets[randomObjets] + " " +
        temperatures[randomTemperatures] + " " + lieux[randomLieux] + " " + verbes[randomVerbes];

})