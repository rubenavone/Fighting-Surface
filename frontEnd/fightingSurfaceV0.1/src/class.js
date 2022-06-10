class Human {
    constructor(name, life, att, def, imgPath, nameSelector) {
        this.name = name;
        this.life = life;
        this.att = att;
        this.def = def;
        this.imgPath = imgPath;
        this.nameSelector = nameSelector;
    }
    //Permet de changer le nom dans le DOM
    setName() {
        let title = document.querySelector(this.nameSelector);
        title.textContent = this.name;
    }


    /**
     * TODO Méthode pour attaquer un adversaire
     * * 1 - Tirer un nombre entre 0 et 100
     *          * si 90 100 attaque * 1.5
     *          * sinon si 0 10 attaque raté
     *          * sinon attaque normale 
     * * 2 - Vérification du status de l'ennemis 
     * * 3 - Si vivant tour de l'ennemis sinon remettre le bouton
     * @param {obj} enemy 
     */
    attack(enemy) {
        enemy.life -= this.att - enemy.def;
    }

    changeLifeStatus() {
        if (this.life < 40) {
            this.lifeBar.classList.add("is-error")
            this.lifeBar.classList.remove("is-success")
            this.lifeBar.classList.remove("is-warning")

        } else if (this.life < 70) {
            this.lifeBar.classList.add("is-warning")
            this.lifeBar.classList.remove("is-success")
            this.lifeBar.classList.remove("is-error")
        } else {
            this.lifeBar.classList.add("is-success")
            this.lifeBar.classList.remove("is-error")
            this.lifeBar.classList.remove("is-warning")
        }
        this.lifeBar.setAttribute("value", this.life);
    }
    //Permet de changer la profile pic dans le DOM
    setPp() {
        let pp = document.querySelector(".enemy-pp");
        pp.src = this.imgPath;
    }

    statusInit() {
        this.lifeBar.setAttribute("max", this.life);
        this.changeLifeStatus();
        this.setName();
        this.setPp();
    }

    /**
     * ! TESTING PURPOSE
     */
    looseLife() {
        this.life -= 10;
        this.changeLifeStatus();
    }
    instantDeath() {
        this.life -= this.life;
    }

        /**
     * TODO: Méthode qui vérifie si spécial est ON return true || false
     * * 1 - Check le nombre d'attaque
     * * 2 - retourne true ou false
     */
}

class Enemy extends Human {
    constructor(name = "le clone", life = 80, att = 10, def = 2, imgPath = "img/barzork_clone.png", nameSelector) {
        super(name, life, att, def, imgPath, nameSelector);
        this.lifeBar = document.querySelector("#enemy-bar");
        this.status = 0;
        this.nameSelector = ".enemy-title"
    }
    setName() {
        let title = document.querySelector(this.nameSelector);
        title.textContent = `Barzork ${this.name}`;
    }

    /**
     * TODO: Methode qui créée un ennemis dans le DOM
     * * 1 - ajout class disable sur le bouton générer
     * * 2 - initialisation du status (methode status init)
     * * 3 - Retrait de toutes les classe disable
     */
    displayEnemy() {
        //Selecteur
        let generateButton = document.querySelector(".enemies-generator");
        let allArticles = document.querySelectorAll("article");
        //1
        generateButton.classList.toggle("disable");

        //2
        try {
            this.statusInit();

        } catch (e) {
            console.log(e);
        }
        //3
        allArticles.forEach(function (article){
            article.classList.remove("disable");
        });
    }

    /**
     * TODO: Gestion du tour de l'adversaire
     * * 1 - Bloquer les controle de l'utilisateur
     * * 2 - Verification si spécial ok
     * * 3 - Lancement d'une attaque || spécial méthode qui vérifie
     */

    /**
     * TODO: Méthode qui vérifie le status actuel  mort - vivant
     * * 1 - Check la santé
     * * 2 - Si >= 0 alors appel de la méthode Remove ennemie
     */
    
    /**
     * TODO: Méthode qui retire l'ennemie du DOM et le place en bas 
     * * 1 - Retire l'ennemis de l'arène 
     * * 2 - Crée une image dans la zone d'historique 
     */
     deadHistoGeneration() {

    }

}
class Allies extends Human {
    constructor(name, life, att, def, nameSelector) {
        super(name, life, att, def, nameSelector)
        this.lifeBar = document.querySelector("#allies-bar");
        this.status = 0;
        this.nameSelector = ".allies-pp"
    }

    /**
     * TODO: Méthode qui vérifie le status actuel  mort - vivant
     * * 1 - Check la santé
     * * 2 - Si >= 0 alors le jeux est terminer 
     */
}

export { Enemy, Allies };