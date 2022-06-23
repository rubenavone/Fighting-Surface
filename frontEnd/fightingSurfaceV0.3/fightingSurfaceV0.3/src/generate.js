/**
 * * Gestion de la generation est mises en DOM
 * 
 */
 import { Enemy } from "./class.js";

 //Visual Element
 let gameVisual = document.querySelector(".game");
 let menuVisual = document.querySelector(".menu");
 let highscoreVisual = document.querySelector(".highscore");
 let creditVisual = document.querySelector(".credit");
 
/**
 * TODO: Piochez aléatoirement un nombre dans un tableau et retourner l'élement
 * @param {Array} array 
 * @returns 
 */
function randomEnemy(array){
    let rand = Math.floor(Math.random() * array.length);

    return array[rand];
}

/**
 * TODO: Generation instanciation
 * * 1 - destructuring sur un élément du tableau tirer au hasard
 * * 2 - Instanciation a partir de celui ci
 * * 3 - Appel de la fonction display en passant le nouvel objet
 * * 4 - Avec un propriété Hue rotate generer des ennemis au couleur différente
 */

function generateEnemy(enemiesList){
    //1
    let name, life, att, def, url;
    ([name, life, att, def, url] = randomEnemy(enemiesList));

    console.log(name, life, att, def, url);
    //2
    let newEnemy = new Enemy(name, life, att, def, url);
    //3
    newEnemy.displayEnemy();
    return newEnemy;
}

/**
 * TODO: fonction qui genere un nombre aleatoire entre 0 et 100
 * @returns
 */
function randomNumber(){
    return Math.round(Math.random()*100) 
}

/**
 * TODO: Méthode qui change le message dans le panneau status
 * @param {STRING} message 
 */
function changeMessageStatus(message = "Bienvenue dans ce jeux de fou"){
    let statusBar = document.querySelector(".status-bar");
    statusBar.textContent =  message; 
}

/**
 * TODO: fonction qui verifie si une variable est null ou undefined
 */
function isItNullOrUndefined(toCheck){
    if(toCheck === null){
     return false;   
    }
    if(toCheck === undefined){
        return false; 
       }
}

/**
 * TODO: Fonction qui ajoute un monstre dans la liste des morts
 */
function addMonsterInDeadZone(monster){
   let deadZone = document.querySelector(".history");
   let newImg = document.createElement("img");
   newImg.src = monster.imgPath;
   newImg.classList.add("dead-enemy");
   deadZone.append(newImg); 
}
/**
 * TODO: Fonction qui switch l'etat entre 0 = Menu, 1 = Jeux, 2 = Highscore sinon c'est le credit
 * 
 */
 function switcherDisplay(actualDisplay){
    if(actualDisplay === 0){
        gameVisual.classList.add("disable");
        menuVisual.classList.remove("disable");
        highscoreVisual.classList.add("disable");
        creditVisual.classList.add("disable");
    }else if(actualDisplay === 1){
        gameVisual.classList.remove("disable");
        menuVisual.classList.add("disable");
        highscoreVisual.classList.add("disable");
        creditVisual.classList.add("disable");
    }else if(actualDisplay === 2){
        gameVisual.classList.add("disable");
        menuVisual.classList.add("disable");
        highscoreVisual.classList.remove("disable");
        creditVisual.classList.add("disable");
    }else{
        gameVisual.classList.add("disable");
        menuVisual.classList.add("disable");
        highscoreVisual.classList.add("disable");
        creditVisual.classList.remove("disable");
    };
};

export {randomNumber, generateEnemy, changeMessageStatus, switcherDisplay,isItNullOrUndefined, addMonsterInDeadZone};