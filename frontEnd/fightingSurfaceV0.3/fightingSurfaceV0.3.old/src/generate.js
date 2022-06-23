/**
 * * Gestion de la generation est mises en DOM
 * 
 */
 import { Enemy } from "./class.js";

 //SELECTEUR DOM
 //Visual Element
let gameVisual = document.querySelector(".game");
let menuVisual = document.querySelector(".menu");
let highscoreVisual = document.querySelector(".highscore");
let creditVisual = document.querySelector(".credit");

/**
 * TODO: Genere un nombre aléatoire pour tirer un ennemis dans le tableau
 */

function randomEnemy(array){
    let rand = Math.floor(Math.random() * array.length);
    return array[rand];
};

/**
 * TODO: Destructuring / Instanciation
 * * 1 - destructuring sur un élément du tableau tirer au hasard
 * * 2 - Instanciation a partir de celui ci
 * * 3 - Appel de la fonction display en passant le nouvel objet
 */

function generateEnemy(enemiesList){
    //Destructuring
    let name, life, att, def, url;
    ([name, life, att, def, url] = randomEnemy(enemiesList));

    //DEBUG
    console.log(name, life, att, def, url);

    let newEnemy = new Enemy(name, life, att, def, url);

    newEnemy.displayEnemy();
    return newEnemy;
};

/**
 * TODO: Genere un nombre aléatoire entre 0 et 100 et le retourne
 *  
 */
function randomNumber(){
    return Math.round(Math.random()*100) 
};

/**
 * TODO: Change le message dans le cadre status
 */
function messageStatusUpdate(message = "Bienvenue dans ce jeux de fou"){
    let statusBar = document.querySelector(".status-bar");
    statusBar.textContent =  message; 
};

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

export {randomNumber, generateEnemy, messageStatusUpdate, switcherDisplay};