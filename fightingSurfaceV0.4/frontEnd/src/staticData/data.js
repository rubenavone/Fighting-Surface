/**
 * TODO: Tableau avec cinq ennemis
 * * Il devra contenir le nécéssaire pour instancier
 * * un ennemis et aura en supplément une image
 */
let enemiesListOld = [
  ["le baveu", 140, 15, 6, "img/barzork_brave.png"],
  ["le chetif", 70, 25, 3, "img/barzork_chetif.png"],
  ["le bourrin", 140, 14, 0, "img/barzork_bourrin.png"],
  ["l'invisible", 40, 35, 0, "img/barzork_invisible.png"],
  ["le tenebreux", 110, 35, 20, "img/barzork_tenebreux.png"],
  ["la guerrierre", 130, 37, 20, "img/barzork_guerriere.png"],
  ["souricier", 80, 25, 20, "img/barzork_souricier.png"],
  ["graine folle", 30, 10, 5, "img/barzork_plante.png"],
  ["vielle Branche", 50, 4, 2, "img/barzork_vielle_branche.png"],
  [],
  ["l'admin", 180, 45, 50, "img/barzork_admin.png"],
  ["la Mort", 6000, 6000, 6000, "img/barzork_mort.png"]

];

let enemiesList = [
  {
    "name": "le baveu",
    "life": 140,
    "att": 15, "def": 6,
    "url": "img/barzork_brave.png",
    "score": 15
  },
  {
    "name": "le chetif",
    "life": 70,
    "att": 25,
    "def": 3,
    "url": "img/barzork_chetif.png",
    "score": 15
  },
  {
    "name": "le bourrin",
    "life": 140,
    "att": 14,
    "def": 0,
    "url": "img/barzork_bourrin.png",
    "score": 15
  },
  {
    "name": "l'invisible",
    "life": 40,
    "att": 35,
    "def": 0,
    "url": "img/barzork_invisible.png",
    "score": 15
  },
  {
    "name": "le tenebreux",
    "life": 110,
    "att": 35,
    "def": 20,
    "url": "img/barzork_tenebreux.png",
    "score": 15
  },
  {
    "name": "la guerrierre",
    "life": 130,
    "att": 37,
    "def": 20,
    "url": "img/barzork_guerriere.png",
    "score": 15
  },
  {
    "name": "souricier",
    "life": 80,
    "att": 25,
    "def": 20,
    "url": "img/barzork_souricier.png",
    "score": 15
  },
  {
    "name": "graine folle",
    "life": 30,
    "att": 10,
    "def": 5,
    "url": "img/barzork_plante.png",
    "score": 15
  },
  {
    "name": "vielle Branche",
    "life": 50,
    "att": 4,
    "def": 2,
    "url": "img/barzork_vielle_branche.png",
    "score": 15
  },
  {},
  {
    "name": "l'admin",
    "life": 180,
    "att": 45,
    "def": 50,
    "url": "img/barzork_admin.png",
    "score": 15
  },
  {
    "name": "la Mort",
    "life": 6000,
    "att": 6000,
    "def": 6000,
    "url": "img/barzork_mort.png",
    "score": 15
  }
]

/**
* TODO: HighScore
* * JSON/Tableaussociatif avec pseudo/score
* * Données fictive pour le fetch à venir
*/

export { enemiesList }