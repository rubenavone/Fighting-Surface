class Entity {
  constructor(name, role, health, strength, lvl = 1) {
    this.name = name;
    this.role = role;
    this.health = health;
    this.strength = strength;
    this.lvl = lvl;
  }
  levelUp() {
    console.log("Félicitation vous venez de passer un niveau");
    this.lvl++;
    console.log(`Vous etes désormais niveau ${this.lvl}`);
  }
  checkHealth() {
    if (this.health <= 0) {
      this.health = 0;
      console.log(`${this.name} est mort !`);
      return true;
    }
  }
  get informations() {
    return `Vous etes ${this.name}.\n Votre roles est ${this.role}.\n Vous etes actuellement niveau ${this.lvl}. \n Il vous reste actuellement ${this.health} point de vie`;
  }
}
/**
 * Class Magician extension d'entity
 */
class Magician extends Entity {
  constructor(name, role, health, strength, lvl) {
    super(name, "Magicien", 170, 90);
  }
  attack(ennemi) {
    console.log(
      `${this.name} envoie un sort puissant et touche l'adversaire il reçois ${this.strength}`
    );

    ennemi.health -= this.strength;
    this.levelUp();
    this.checkHealth();
  }
  specialAttack(ennemi) {
    console.log(
      `${this.name} envoie une attaque spécial à ${
        ennemi.name
      } et touche l'adversaire il reçois ${this.strength * 5}`
    );

    ennemi.health -= this.strength * 5;
    this.levelUp();
    this.checkHealth();
  }
}
/**
 * Class Warrior extension d'entity
 */
class Warrior extends Entity {
  constructor(name, role, health, strength, lvl) {
    super(name, "Guerrier", 350, 50);
  }
  attack(ennemi) {
    console.log(
      `${this.name} envoie une attaque à ${ennemi.name} et touche l'adversaire il reçois ${this.strength}`
    );

    ennemi.health -= this.strength;
    this.levelUp();
    ennemi.checkHealth();
  }
  specialAttack(ennemi) {
    console.log(
      `${this.name} envoie une attaque spécial à ${
        ennemi.name
      } et touche l'adversaire il reçois ${this.strength * 5}`
    );

    ennemi.health -= this.strength * 5;
    this.levelUp();
    ennemi.checkHealth();
  }
}

//instanciation
let magician = new Magician("Elrick");
let warrior = new Warrior("Guts");

main = () => {
  console.log(`Bienvenue Héros `);

  console.log(magician.informations);

  console.log(warrior.informations);

  warrior.attack(magician);

  console.log(magician.informations);

  magician.attack(warrior);

  console.log(warrior.informations);

  warrior.specialAttack(magician);
};

main();
