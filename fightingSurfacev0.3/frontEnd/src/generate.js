/**
 * * Gestion de la generation est mises en DOM
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
 * TODO: Fetch sur le backend pour récuperer l'ensemble des monstre et ainsis faire un tirage aléatoire dessus
 * 
 */
async function getData(){
  const response = await fetch("http://localhost/fightingSurfaceBack/monsters",{
    method: 'GET',
    mode: 'cors'
  });
  if(response.ok){
    
    return await Promise.resolve(response.json());
  }else{
    Promise.reject("Erreur");
  }
}
/**
 * TODO: Generation instanciation 
 * * 1 - Désormais nous allons travaillez avec un json 
 * * 2 - Récuperer un élément aléatoire à l'interieur
 * * 3 - Appel de la fonction display en lui passant Enemy
 * * 4 - Retournez Enemy
 * @param {Array} enemiesList 
 * @returns {Enemy}
 */
function generateEnemy(enemiesList){
    //1
    let randEnemy = randomEnemy(enemiesList);

    console.log(randEnemy.name, randEnemy.life, randEnemy.att, randEnemy.def, randEnemy.url, randEnemy.score);
    //2
    let newEnemy = new Enemy(randEnemy.name, randEnemy.life, randEnemy.att, randEnemy.def, randEnemy.url, randEnemy.score);
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

/**
 * TODO: fonction qui change la fleche de direction
 * *   Prend une direction en argument
 * *   La fleche tourne lentement vers l'ennemis
 * @param { STRING }
 * @return { VOID }
 */
 function changeArrowDirection(arrow,direction = "") {
    if (direction === "allies") {
      console.log("Dans change Arrow Direction: Tour du héro");
      if(arrow.classList.contains("quick-allies-turn")){
      arrow.classList.add("allies-turn");
      arrow.classList.remove("quick-allies-turn");
  
      }else{
        arrow.classList.add("allies-turn");
  
        arrow.classList.remove("quick-allies-turn");
      }
      arrow.classList.remove("quick-enemy-turn");
      arrow.classList.remove("enemy-turn");
  
    } else {
      console.log("Dans change Arrow Direction: Tour de l'ennemie");
      arrow.classList.add("enemy-turn");
      arrow.classList.remove("quick-allies-turn");
      arrow.classList.remove("allies-turn");
  
      arrow.classList.remove("quick-enemy-turn");
    }
  }

  /**
 * TODO: Permet de mettre ou retirer la possibilité d'attaquer
 * @param {String} action
 */
function removeOrAddAttack(attackBtn, specialBtn, count, action = "") {
    if (action === "add") {
      console.log("add attack");
      attackBtn.classList.add("is-error");
      attackBtn.classList.remove("is-disabled");
    } else {
      console.log("remove attack");
      attackBtn.classList.remove("is-error");
      attackBtn.classList.add("is-disabled");
    }
    if (count >= 3) {
      console.log("add special");
      specialBtn.classList.add("is-primary");
      specialBtn.classList.remove("is-disabled");
    } else {
      console.log("remove special");
      specialBtn.classList.remove("is-primary");
      specialBtn.classList.add("is-disabled");
    }
  }
export {randomNumber, generateEnemy, changeMessageStatus, switcherDisplay,isItNullOrUndefined, addMonsterInDeadZone,changeArrowDirection,removeOrAddAttack,getData};