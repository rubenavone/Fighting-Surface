import { Allies } from "./class.js";
import {
  randomNumber,
  generateEnemy,
  changeMessageStatus,
  isItNullOrUndefined,
  addMonsterInDeadZone,
  switcherDisplay,
  changeArrowDirection,
  removeOrAddAttack,
  getData
} from "./generate.js";
//Données static
import { enemiesList } from "./staticData/data.js";

//Données dynamic

//SELECTEUR
//Menu
const menuPlaySelector = document.querySelector(".menu-play-js");
const menuHighscoreSelector = document.querySelector(".menu-highscore-js");
const menuCreditSelector = document.querySelector(".menu-credit-js");
const menuReturn = document.querySelectorAll(".menu-return-js");
//Bouton de generation d'ennemis et gestion apararition DOM enemy
const generateButton = document.querySelector(".enemies-generator");
const enemyDisableSelector = document.querySelector(".enemy");
const lifeBarEnemySelector = document.querySelector(".life-bar");
//Gestion des tours et de l'attaque
const newEnemy = document.querySelector(".enemies-generator");
const arrowSelector = document.querySelector(".turn-arrow > img");
const attackBtnSelector = document.querySelector(".attack-js");
const specialBtnSelector = document.querySelector(".special-js");

//Gere le tour true = joueur, false = enemy
let actualTurn = true;
//Permet de gerer l'appuie sur le bouton attack
let canAttack = true;
//Gestion special
let howMuchAttack = 3;
//Les entités
let hero = null;
let actualEnemy;
//Score
let score = 0;
/**
 * ! SUITE
 * TODO: Crée un menu en HTML/CSS contenant Jouer - Scores - Crédit 
 */


/**
 * TODO: Evenement pour gerer le bouton play du menu
 * * 1 - Fait disparaitre le menu et apparaitre le jeux
 */
menuPlaySelector.addEventListener("click", function () {
  animArcade("in");

  //Lancement du jeux
  beginTheGame();
  generateButton.classList.toggle("disable");
  enemyDisableSelector.classList.toggle("disable");
  lifeBarEnemySelector.classList.toggle("disable");
});

/**
 * TODO: Evenement pour gerer le bouton highscore du menu
 * * 1 - Fait disparaitre le menu et apparaitre le tableau
 */
menuHighscoreSelector.addEventListener("click", function () {
  switcherDisplay(2);
});

/**
 * TODO: Evenement pour gerer le bouton crédit du menu
 * * 1 - Fait disparaitre le menu et apparaitre le crédit
 */
menuCreditSelector.addEventListener("click", function () {
  switcherDisplay(3);
});

/**
 * TODO: Evenement pour gerer le retour au menu
 * * 1 - Fait disparaitre le highscore ou crédit et apparaitre le menu
 */
menuReturn.forEach((button) => {
  button.addEventListener("click", function () {
    console.log("hello")
    switcherDisplay(0);
  });
});

/**
 *  TODO: Ce code à un soucis - fait en sorte d'attaquer dans le if (verification null undefined)
 *  TODO: Evenement qui gère l'attaque
 */
attackBtnSelector.addEventListener("click", function () {
  if (actualTurn === true && hero.isDead() === false && canAttack === true) {
    canAttack = false;
    if (actualEnemy === null || actualEnemy === undefined) {
    } else {
      hero.attack(actualEnemy);
      //Changin color of btn
      removeOrAddAttack(attackBtnSelector, specialBtnSelector, 0);
      changeArrowDirection(arrowSelector)
      howMuchAttack++;
    }
    enemyAttack();
  } else {
    console.log("vous ne pouvez pas attaquer");
  }
});

/**
 * TODO: Evenement qui gère le spécial
 *
 */
specialBtnSelector.addEventListener("click", function () {
  if (howMuchAttack >= 3) {
    if (actualTurn === true && hero.isDead() === false && canAttack === true) {
      canAttack = false;
      hero.specialAttack(actualEnemy);
      howMuchAttack = 0;
      removeOrAddAttack(attackBtnSelector, specialBtnSelector, 0);
      changeArrowDirection(arrowSelector);
    }

    enemyAttack();

  } else {
    changeMessageStatus("Le spécial n'est pas encore prêt !")
  }

});
async function bla(){
  let data = await getData();
  console.log(data)
}

newEnemy.addEventListener("click", function () {
 
    //1
bla()
    //2
    newRound();
  
  //Retrait du bouton
  generateButton.classList.toggle("disable");

});

function beginTheGame() {
  //*Le bug ce trouve ici, il manquais un argument, le chemin vers l'image
  //*Le code pourrait être améliorer, il y a des soucis dans l'organisation selon moi
  if (!isItNullOrUndefined(hero)) {
    hero = new Allies("Jeanjean", 100, 60, 3, "");
    hero.statusInit();
  }
  if (actualEnemy !== undefined) {
    generateButton.classList.toggle("disable");
  }
}

/**
 * TODO: Fonction qui gère l'attaque d'un enemy
 */
function enemyAttack() {
  setTimeout(function () {
    if (actualEnemy.isDead() === false && hero.isDead() === false) {
      actualEnemy.attack(hero);
      changeArrowDirection(arrowSelector, "allies");
      removeOrAddAttack(attackBtnSelector, specialBtnSelector, howMuchAttack, "add");
    } else if (actualEnemy.isDead() === true) {
      removeOrAddAttack(attackBtnSelector, specialBtnSelector, 0);
      score += actualEnemy.score;
      hero.healByVictory();
      newRound();
    }
    if (hero.isDead()) {
      console.log(score);
      animArcade();
    }
    canAttack = true;
  }, 2000);
}

/**
 * TODO: fonction qui change la fleche de direction démarrage du jeux ou d'un round
 * *    Selon un nombre aléatoire définis qui commence
 * *
 */
function newRound() {
  addMonsterInDeadZone(actualEnemy);
  actualEnemy = generateEnemy(enemiesList);
  removeOrAddAttack(attackBtnSelector, specialBtnSelector, 2);
  let rand = randomNumber();
  if (rand <= 50) {
    changeMessageStatus("c'est vous qui commencer");
    changeArrowDirection(arrowSelector, "allies");
    //Changin color of btn
    removeOrAddAttack(attackBtnSelector, specialBtnSelector, howMuchAttack, "add");


  } else {
    changeMessageStatus("c'est l'ennemis qui commence");
    changeArrowDirection(arrowSelector);
    enemyAttack();

  }
}

/**
 * TODO: Fonction qui geère l'animation de la borne arcade
 */
function animArcade(inOrOut = "out") {
  if (inOrOut === "out") {
    setTimeout(function () {
      switcherDisplay(0);
      beginTheGame();
      changeMessageStatus("Cliquez sur le bouton pour lancer le combat");

    }, 500);
    document.body.classList.add("arcade-zoom-out")
    document.body.classList.remove("arcade-zoom-in")
  } else {
    setTimeout(function () {
      switcherDisplay(1);
      beginTheGame();
      changeMessageStatus("Cliquez sur le bouton pour lancer le combat");

    }, 1800);
    document.body.classList.remove("arcade-normal")
    document.body.classList.add("arcade-zoom-in")
  }

}
