import { Allies } from "./class.js";
import {
  // getData, //Import for static enemy list
  randomNumber,
  generateEnemy,
  changeMessageStatus,
  isItNullOrUndefined,
  addMonsterInDeadZone,
  switcherDisplay,
  changeArrowDirection,
  removeOrAddAttack,


} from "./generate.js";
//Données static
// import { enemiesList } from "./staticData/data.js";

//Données dynamic
import { getMonsters, getScores, setScore, updateScore } from "./dynamicData/data.js";

//TEST PUT

// updateScore({
//   name: "ruben",
//   score: 232
// })

updateScore().then(response=>response.json()).then(data=>console.log(data));
//SELECTEUR
//Menu
const menuPlaySelector = document.querySelector(".menu-play-js");
const menuHighscoreSelector = document.querySelector(".menu-highscore-js");
const menuCreditSelector = document.querySelector(".menu-credit-js");
const menuReturn = document.querySelectorAll(".menu-return-js");
//highscore 
const highscoreSelector = document.querySelector(".highscore .nes-table-responsive tbody");
const highscoreValidationSelector = document.querySelector(".highscore-input .nes-container .nes-field .valid-score");
const highscoreLeaveSelector = document.querySelector(".highscore-input .nes-container .nes-field .leave-score");

const highscoreInputSelector = document.querySelector(".highscore-input .nes-container .nes-field input");
const scoreAtEnd = document.querySelector(".score-at-end");
//Bouton de generation d'ennemis et gestion apararition DOM enemy
const generateButton = document.querySelector(".enemies-generator");
const enemyDisableSelector = document.querySelector(".enemy");
const lifeBarEnemySelector = document.querySelectorAll(".life-bar");
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
let actualEnemy = null;
var enemiesList = []
//Score
let score = 0;


/**
 * TODO: Fonction qui fait un fetch pour récuperer les monstres
 * * Elle foit contenir un callback vers la création du bouton de génération de monstre.
 * * Pourquoi ? Fetch est une requete async si on ne fait pas ce callback le bouton est créée avant 
 * * du coup on ce retrouve avec un tableau vide.
 */
function fillEnemyArray() {
  getMonsters().then(function (data) {
    //Pour chaque objet on le pousse dans notre tableau
    for (const key in data) {
      const element = data[key];
      enemiesList.push(element)
    }
    waitingForEnemies(); //CallBack obligatoire
  })

}
//Appel de la fonction dès le lancement de l'application
fillEnemyArray();

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
  actualEnemy = null;
  //Lancement du jeux
  beginTheGame();
  generateButton.classList.toggle("disable");
  // enemyDisableSelector.classList.toggle("disable");
  // lifeBarEnemySelector.classList.toggle("disable");
});

/**
 * TODO: Evenement pour gerer le bouton highscore du menu
 * * 1 - Fait disparaitre le menu et apparaitre le tableau
 * * 2 - Permet de récuperer les score dans la bases de données
 * * 3 - doit effacer les ancien score pour afficher les nouveaux (meme si il n'y en a pas)
 */
menuHighscoreSelector.addEventListener("click", function () {
  displayScore()

});

/**
 * TODO: Evenement pour gerer le bouton crédit du menu
 * * 1 - Fait disparaitre le menu et apparaitre le crédit
 */
menuCreditSelector.addEventListener("click", function () {
  switcherDisplay();
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

function waitingForEnemies() {
  newEnemy.addEventListener("click", function () {
    console.log(enemiesList)
    score = 0;
    //1
    actualEnemy = generateEnemy(enemiesList);

    //2
    newRound();

    //Retrait du bouton
    generateButton.classList.toggle("disable");

  });
}


function beginTheGame() {
  //*Le bug ce trouve ici, il manquais un argument, le chemin vers l'image
  //*Le code pourrait être améliorer, il y a des soucis dans l'organisation selon moi

  hero = new Allies("Jeanjean", 80, 60, 3, "");
  hero.statusInit();


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
      console.log(typeof actualEnemy.score)
      console.log(actualEnemy.score)

      score += parseInt(actualEnemy.score);
      hero.healByVictory();
      newRound();
    }
    if (hero.isDead()) {
      let history = document.querySelectorAll(".dead-enemy");
      removeOrAddAttack(attackBtnSelector, specialBtnSelector, 0);
      setTimeout(function () {
        enemyDisableSelector.classList.add("disable");
        lifeBarEnemySelector[1].classList.add("disable");

      }, 1400)
      history.forEach(function (enemy) {
        setTimeout(function () {
          enemy.remove();
        }, 800)
      })
      animArcade("out");
      setTimeout(function () {
        scoreAtEnd.textContent = score;
        switcherDisplay(3);

      }, 1800)
    }
    canAttack = true;
  }, 2000);
}

/**
 * TODO: BOUTON pour valider le score et l'envoyer
 */
highscoreValidationSelector.addEventListener("click", function () {
  console.log("Vous voulez ajouter un score verif en cours");
  if (highcoreInputIsOk()) {
    let highscoreEntry = {};
    highscoreEntry.name = highscoreInputSelector.value;
    highscoreEntry.score = score;
    console.log(JSON.stringify(highscoreEntry));
    //On ajoute le score en bases de données
    updateScore(highscoreEntry)
    //On affiche ensuite le tableau des scores
    displayScore()

  } else {

  }
})
/**
 * TODO: Fonction qui verifie l'input xss etc
 */
function highcoreInputIsOk(value) {

  return true;
}
/**
 * TODO: fonction qui change la fleche de direction démarrage du jeux ou d'un round
 * *    Selon un nombre aléatoire définis qui commence
 * *
 */
function newRound() {
  if (score !== 0) {
    addMonsterInDeadZone(actualEnemy);
  }
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
    enemyAttack()
  }
}

/**
 * TODO: Fonction qui gère l'animation de la borne arcade
 */
function animArcade(inOrOut = "out") {
  if (inOrOut === "out") {
    setTimeout(function () {
      beginTheGame();
      changeMessageStatus("Cliquez sur le bouton pour lancer le combat");

    }, 1400);
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

function displayScore() {
  let allTr = document.querySelectorAll(".highscore .nes-table-responsive tbody tr");

  console.log(allTr);
  if (allTr.length !== 0) {
    allTr.forEach(function (oneTr) {
      oneTr.remove();
    })
  }

  getScores().then(function (scores) {
    let count = 0;
    for (const key in scores) {
      if (count < 5) {
        const element = scores[key];

        let tr = document.createElement("tr")
        let tdName = document.createElement("td");
        let tdScore = document.createElement("td");

        tdName.textContent = element.name;
        tdScore.textContent = element.score;

        highscoreSelector.append(tr);
        tr.append(tdName);
        tr.append(tdScore);

        count++;
      }
    }

    switcherDisplay(2);
  })
}