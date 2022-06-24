import { Allies } from "./class.js";
import { randomNumber, generateEnemy, changeMessageStatus } from "./generate.js";
let roundLaunched = false; //Pas utilisé
let actualEnemy;
/**
 * SELECTEUR DE BASES
 */
let newEnemy = document.querySelector(".enemies-generator");
let arrowSelector = document.querySelector(".turn-arrow > img");
let attackBtn = document.querySelector(".attack-js")

/**
 * TODO: Tableau avec cinq ennemis
 * * 1 - Il devra contenir le nécéssaire pour instancier
 * * 2 - Un ennemis et une image
 * * 3 - Déplacer le tableau dans un fichier data.js
 */
let enemiesList = [
    ["le baveu", 140, 15, 6, "img/barzork_brave.png"],
    ["le chetif", 70, 25, 3, "img/barzork_chetif.png"],
    ["le bourrin", 140, 14, 0, "img/barzork_bourrin.png"],
    ["l'invisible", 40, 35, 0, "img/barzork_invisible.png"],
    ["l'admin", 180, 80, 50, "img/barzork_admin.png"],
    [],
]


/**
 * TODO: Evenement qui lance un combat
 * * 1 - Generer un adversaire - change le message barre status
 * * 2 - Changer le status en round lancer
 * * 3 - Tirer aléatoirement le tour (joueur ou adv)
 */
newEnemy.addEventListener("click", function () {

    try {
        //1
        actualEnemy = generateEnemy(enemiesList);
        //2
        roundLaunched = true;
        //3
        if (randomNumber() < 50) {
            arrowSelector.classList.toggle("allies-turn");
        } else {
            arrowSelector.classList.toggle("enemy-turn");
        }
    } catch (error) {
        console.error(`Une erreur est survenue ${error}`);
        console.log(error);
    }

})

/**
 * TODO: Fonction qui explique/révision try catch
 * @param {Number} number 
 */
function verifyIfIsNumber(number) {
    console.log(typeof number);
    try {
        if (isNaN(number)) {
            throw new Error("ce n'est pas un nombre");
        } else {
            console.log("ceci est bien un nombre")
        }
    } catch (error) {
        console.error("une erreur est survenue" + error);
        console.log(console);
    }
}

/**
 * TODO: Fonction qui gère l'ensemble d'un combat
 * * 1 - Verification vie des protagoniste
 * *        Si le joueur est mort alors le jeux s'arrette
 * *        Si l'adversaire est mort un nouvel adversaire est generer
 * * 2 - Selon qui est choisis (fleche aléatoire) faite attaquer la bonne personnes
 * * 3 - 
 */


function beginTheGame() {
    let hero = new Allies("Jeanjean", 100, 30, 3);
    hero.statusInit();

}
beginTheGame();



/**
 * TODO: Fonction/méthode qui vérifie si le joueur à un special
 *
 */

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
 * TODO: Fonction/méthode qui vérifie l'etat de santé 
 *
 */
