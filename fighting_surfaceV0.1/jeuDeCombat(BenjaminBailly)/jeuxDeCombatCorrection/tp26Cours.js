//Programmation objet – Classe
// class Animal {
//     constructor(race, poids, regime) { //Création du constructeur
//         this.race = race;
//         this.poids = poids;
//         this.regime = regime;
//     }
//     description() { //Ajout d'une méthode
//         console.log("Cet animal est un " + this.race + " il pèse " + this.poids + "kg et son régime alimentaire est : " + this.regime)
//     }
// }
//let boa = new Serpent("boa", 50, "carnivor", "1 fois tout les 5 ans"); //Cela va crée une erreur
/*  
    On ne peut pas tenter d'instancier un nouvel objet a partir d'une classe 
    Avant d'avoir déclarer la classe.
    Pour les variable c'est pareil, on ne peut pas appeler une variable avant de l'avoir déclaré.
    Seul les fonction peuvent être appelé, peut importe ou elles sont déclaré.
    */

// class Serpent extends Animal { //Extension de la classe Animal en ajoutant des élément 
//     constructor(race, poids, regime, frequenceDeMue) {
//         super(race, poids, regime); //On appel super pour obtenir 
//         this.frequenceDeMue = frequenceDeMue;
//     }
//     mue() {
//         console.log(`Le ${this.race} est en train de mué`);
//     }
// }
// let coki = new Animal("berger belge", "50", "carnivore");
// let python = new Serpent("python", "10", "carnivore", "2 fois par an")

// coki.description();
// python.description();

//coki.mue(); On ne peut pas acceder à cette methode
// python.mue();

//Programmation objet – Les getters et setters

class Directeur {
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    get nomPrenom() {
        return this.nom + " " + this.prenom;
    }
    set nomPrenom(newValue){
        [this.nom, this.prenom] = newValue.split(" ");
    }
}
class Animal{
    constructor(type, race, couleur){
        this.type = type;
        this.race = race;
        this.couleur = couleur;
    }
        get getType(){
            return this.type;
        }
        set setType(newValue){
            this.type = newValue;
        }
        // affichage(){
        //     console.log(`Je suis un ${this.getType}`)
        // }
    }

let python = new Animal("serpent", "python", "verte");

console.log(python.getType);

python.setType = "dragon";

console.log(python.getType);
// python.affichage();

let directeurMontpellier = new Directeur("Albert", "Jean", 32);

//console.log(directeurMontpellier.nomPrenom);

//setters

directeurMontpellier.nomPrenom = "Valgean Jean"

//console.log(directeurMontpellier.nomPrenom);

//les cas d'utilisation, par exemple si vous faite un logiciel/web app todo list.
// Si vous souhaitez modifiez un nouvel objet précedement instancié sur la classe TodoCard il faudra mettre en place des setters