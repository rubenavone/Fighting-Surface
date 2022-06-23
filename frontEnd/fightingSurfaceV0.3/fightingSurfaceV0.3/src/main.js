import { Allies } from "./class.js";
import {
  randomNumber,
  generateEnemy,
  changeMessageStatus,
  isItNullOrUndefined,
  addMonsterInDeadZone,
  switcherDisplay
} from "./generate.js";
import { enemiesList } from "./data.js";

let roundLaunched = false; //Utiliser pour s'avoir si la fleche doit etre lancer
//Menu
let menuPlaySelector = document.querySelector(".menu-play-js");
let menuHighscoreSelector = document.querySelector(".menu-highscore-js");
let menuCreditSelector = document.querySelector(".menu-credit-js");
let menuReturn = document.querySelectorAll(".menu-return-js");
//Gere le tour true = joueur, false = enemy
let actualTurn = true;
//Permet de gerer l'appuie sur le bouton attack
let canAttack = true;
//Bouton de generation d'ennemis et gestion apararition DOM enemy
let generateButton = document.querySelector(".enemies-generator");
let enemyDisableSelector = document.querySelector(".enemy");
let lifeBarEnemySelector = document.querySelector(".life-bar");
//Gestion special
let howMuchAttack = 0;
let special = false;
//Les entités
let hero = null;
let actualEnemy;
/***************/
let whoBegin;
/**
 * SELECTEUR DE BASES
 */
let newEnemy = document.querySelector(".enemies-generator");
let arrowSelector = document.querySelector(".turn-arrow > img");
let attackBtn = document.querySelector(".attack-js");
let specialBtn = document.querySelector(".special-js");



/**
 * ! SUITE
 * TODO: Crée un menu en HTML/CSS contenant Jouer - Scores - Crédit et faite les TODO
 */

/**
 * ! SUITE
 * TODO: Evenement pour gerer le bouton play du menu
 * * 1 - Fait disparaitre le menu et apparaitre le jeux
 */

/**
 * ! SUITE
 * TODO: Evenement pour gerer le bouton highscore du menu
 * * 1 - Fait disparaitre le menu et apparaitre le tableau
 */

/**
 * ! SUITE
 * TODO: Evenement pour gerer le bouton crédit du menu
 * * 1 - Fait disparaitre le menu et apparaitre le crédit
 */

/**
 * TODO: Evenement pour gerer le bouton play du menu
 * * 1 - Fait disparaitre le menu et apparaitre le jeux
 */
menuPlaySelector.addEventListener("click", function () {
  animArcade("in");

  whoBegin = randomNumber();
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
 * TODO: Evenement qui lance un combat
 * * 1 - Generer un adversaire - change le message barre status
 * * 2 - Changer le status en round lancer
 * * 3 - Tirer aléatoirement le tour (joueur ou adv)
 */

/**
 * 
 *  TODO: Ce code à un soucis - fait en sorte d'attaquer dans le if (verification null undefined)
 *  TODO: Evenement qui gère l'attaque
 */
attackBtn.addEventListener("click", function () {

  if (actualTurn === true && hero.isDead() === false && canAttack === true) {
    canAttack = false;

    changeColorSpecial();
    if (actualEnemy === null || actualEnemy === undefined) {
    } else {
      hero.attack(actualEnemy);
      //Changin color of btn
      removeOrAddAttack();
      changeArrowDirection()
      howMuchAttack++;
      special = checkSpecial(howMuchAttack);
    }

    setTimeout(function () {
      actualEnemy.attack(hero);
      if (actualEnemy.isDead() === false && hero.isDead() === false) {
        changeArrowDirection("allies");
        changeColorSpecial();
      } else if (actualEnemy.isDead() === true) {
        hero.healByVictory();
        addMonsterInDeadZone(actualEnemy);
        actualEnemy = generateEnemy(enemiesList);
        newRound();

      }
      canAttack = true;

    }, 2000);

  } else {
    console.log("vous ne pouvez pas attaquer")
    animArcade();
  }
});

/**
 * TODO: Evenement qui gère le spécial
 *
 */
specialBtn.addEventListener("click", function () {
  if (special === true) {
    if (actualTurn === true && hero.isDead() === false && canAttack === true) {
      canAttack = false;
      hero.specialAttack(actualEnemy);
      howMuchAttack = 0;
      changeArrowDirection();
      special = false;
    }

    setTimeout(function () {

      if (actualEnemy.isDead() === false && hero.isDead() === false) {
        actualEnemy.attack(hero);
        changeArrowDirection("allies");

      } else if (actualEnemy.isDead() === true) {
        hero.healByVictory();
        addMonsterInDeadZone(actualEnemy);
        actualEnemy = generateEnemy(enemiesList);
        newRound();
      } else {

      }
      canAttack = true;
    }, 2000);

  } else {
    changeMessageStatus("Le spécial n'est pas encore prêt !")
  }

});

newEnemy.addEventListener("click", function () {
  try {
    //1
    actualEnemy = generateEnemy(enemiesList);
    //2
    roundLaunched = true;
    //3
    newRound();
  } catch (error) {
    console.error(`Une erreur est survenue ${error}`);
    console.log(error);
  }
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
 * TODO: Permet de mettre ou retirer la possibilité d'attaquer
 * @param {String} action
 */
function removeOrAddAttack(action = "", special = false) {
  if (action === "add") {
    console.log("add attack");
    attackBtn.classList.add("is-error");
    attackBtn.classList.remove("is-disabled");
  } else {
    console.log("remove attack");
    attackBtn.classList.remove("is-error");
    attackBtn.classList.add("is-disabled");
  }
  if (special === true) {
    console.log("add special");
    specialBtn.classList.add("is-primary");
    specialBtn.classList.remove("is-disabled");
  } else {
    console.log("remove special");
    specialBtn.classList.remove("is-primary");
    specialBtn.classList.add("is-disabled");
  }
}

/**
 * TODO: fonction qui change la fleche de direction
 * *   Prend une direction en argument
 * *   La fleche tourne lentement vers l'ennemis
 * @param { STRING }
 * @return { VOID }
 */

function changeArrowDirection(direction = "") {
  if (direction === "allies") {
    console.log("Dans change Arrow Direction: Tour du héro");
    if (arrowSelector.classList.contains("quick-allies-turn")) {
      arrowSelector.classList.add("allies-turn");
      arrowSelector.classList.remove("quick-allies-turn");

    } else {
      arrowSelector.classList.add("allies-turn");

      arrowSelector.classList.remove("quick-allies-turn");
    }
    arrowSelector.classList.remove("quick-enemy-turn");
    arrowSelector.classList.remove("enemy-turn");

  } else {
    console.log("Dans change Arrow Direction: Tour de l'ennemie");
    arrowSelector.classList.add("enemy-turn");
    arrowSelector.classList.remove("quick-allies-turn");
    arrowSelector.classList.remove("allies-turn");

    arrowSelector.classList.remove("quick-enemy-turn");
  }
}
/**
 * TODO: fonction qui change la fleche de direction démarrage du jeux ou d'un round
 * *    Selon un nombre aléatoire définis qui commence
 * *
 */
function newRound() {

  let rand = randomNumber();
  if (rand <= 50) {
    changeMessageStatus("c'est vous qui commencer");
    changeArrowDirection("allies");
    //Changin color of btn
    changeColorSpecial();

  } else {
    changeMessageStatus("c'est l'ennemis qui commence");
    changeArrowDirection();
    setTimeout(function () {
      actualEnemy.attack(hero);
      changeArrowDirection("allies");
      changeColorSpecial();
    }, 3000);

  }
}

/**
 * TODO: Fonction/méthode qui vérifie si le joueur à un special graçe au compteur d'attaque
 * @param { Number } 
 * @return { Boolean }
 */
function checkSpecial(attackCount) {
  if (attackCount >= 3) {
    return true;
  } else {
    return false;
  }
}

/**
 * TODO: Fonction qui active ou non le btn special
 * @return { VOID }
 */
function changeColorSpecial() {
  if (checkSpecial(howMuchAttack)) {
    removeOrAddAttack("add", true);
  } else {
    removeOrAddAttack("add");
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
/**
 * Mettre en place un pierre feuille sciseaux, 
 */