import { Allies } from "./class.js";
import { enemiesList } from "./data.js";
import {
  randomNumber,
  generateEnemy,
  messageStatusUpdate,
  switcherDisplay,
} from "./generate.js";

//GLOBAL VAR
let roundLaunched = false;

let actualDisplay = 0;
/***************/
let actualEnemy;
let whoBegin;
/**
 * SELECTEUR DE BASES
 */
///Button
//Menu
let menuPlaySelector = document.querySelector(".menu-play-js");
let menuHighscoreSelector = document.querySelector(".menu-highscore-js");
let menuCreditSelector = document.querySelector(".menu-credit-js");
let newEnemy = document.querySelector(".enemies-generator");
let attackBtn = document.querySelector(".attack-js");
let menuReturn = document.querySelectorAll(".menu-return-js");

let arrowSelector = document.querySelector(".turn-arrow > img");

/**
 * TODO: Evenement pour gerer le bouton play du menu
 * * 1 - Fait disparaitre le menu et apparaitre le jeux
 */
menuPlaySelector.addEventListener("click", function () {
  switcherDisplay(1);
  beginTheGame();
  whoBegin = randomNumber();
  messageStatusUpdate("Cliquez sur le bouton pour lancer le combat");
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
    switcherDisplay(0);
  });
});

/**
 * TODO: Evenement qui lance un combat
 * * 1 - Generer un adversaire - change le message barre status
 * * 2 - Changer le status en round lancer
 * * 3 - Tirer aléatoirement le tour (joueur ou adv)
 */
newEnemy.addEventListener("click", function () {
  //C'est quoi ce machin try catch ? RECHERCHE
  try {
    //1
    actualEnemy = generateEnemy(enemiesList);
    //2
    roundLaunched = true;
    //3
    if (whoBegin < 50) {
      arrowSelector.classList.toggle("allies-turn");
      //A quoi sa sert setTimeout ?
      setTimeout(function () {
        messageStatusUpdate("Le combat commence c'est à vous !");
      }, 1000);
    } else {
      arrowSelector.classList.toggle("enemy-turn");
      setTimeout(function () {
        messageStatusUpdate("Le combat commence L'ennemis vous attaque  !");
      }, 1000);
    }
  } catch (error) {
    console.log(`Une erreur est survenue ${error}`);
  }
});

/**
 * TODO: Fonction qui gère l'ensemble d'un combat
 * * 1 - Verification vie des protagoniste
 * * 2 - Verification spécial
 *
 */
function beginTheGame() {
  //Explique ce qu'il ce passe si dessous
  let hero = new Allies("Jeanjean", 100, 30, 3);
  hero.statusInit();
}

/**
 * TODO: Fonction qui vérifie si le joueur à un special
 *  * 1 - on passe une entité (ennemis ou joueur)
 *  * 2 - Si la méthode specialFull retourn true alors on leve le drapeaux
 *  * 3 - Si c'est le joueur on rend special disponible sinon si c'est l'ennemis on lance le
 *  *       spécial
 */
function specialOn(entity) {
  if (entity.specialFull()) {
  }
}
/**
 * TODO: Evenement qui gère l'attaque
 *
 */

/**
 * TODO: Evenement qui gère la defense
 *
 */

/**
 * TODO: Evenement qui gère le spécial
 *
 */

/**
 * *        Possible Evolution
 * *
 * *[]Etendre verticalement le fond
 * *    *lorsque le joueur perd de
 * *    *la vie alors le sol monte
 * *
 * *    *On fait une bande en bas de la derniere couleur (ligne la plus basse du background)
 * *    *et on trouve une soluce pour pour multiplier la bande par dessus
 * *
 * *    *On agrandis l'image, on retire le scroll
 * *    *et on deplace verticalement en js le decor
 * !    ATTENTION AU RESPONSIVE
 * *
 * *
 * *[]Définir si lorsque la vie
 * *     *est à zéro alors mort ou
 * *     *Multiple vie pour le héros
 * *
 * *
 * *
 * *[]Ajouter la borne d'arcade, pour le menu, la faire disparaitre vers le
 * *  lorsque l'utilisateur fait un choix
 * *  si cela revient au menus elle doit alors remonter le menu s'affiche
 */
