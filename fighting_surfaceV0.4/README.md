# Fighting Surface

Après deux semaine de vacance, vous voila de retour dans votre entreprise.
Vos collegues ont avancer sur le projet fighting surface, ils ont même terminer la version 0.2.
Vous allez devoir faire la version 0.3.
Vos collègues sont partie à leur tour en vacances, vous devrez donc vous adaptez pour comprendre le code présent et faire sans eux.
Vous n'allez pas gacher les vacance de Georges tout de même ...
En suivant les instruction, et en regardant les screenshot fournis réaliser le projet ci dessous.

Installation:

N'oubliez pas de faire un npm install coté front pour avoir toutes les librairie. 
Il vous faudra également si vous contribuer faire un ignore sur node_modules.  

Le back end est en php 
Il faudra installer WAMP ou XAMPP
Installer tout les fichiers, dans backEnd php installez la bdd à partir du back up game.sql Des données existe dans addMonster.sql

Ayant mit des import/export dans le JavaScript il vous faudra utiliser l'extension live server, autrement des erreurs risques de ce présenter à vous.

Modifier le mot de passe de la base de données dans le pdo et eventuellement le nom du dossier ou ce trouve la base de données

---

Organisation:
Mettez en place un repository Git hub,
Faite des commit régulier avant de faire des modification importante sur le code.
Ainsi en cas de grosse erreur vous pourrez revenir en arrière.

Prenez le temp de regarder le fonctionnement du code, faite le fonctionner dans l'état actuel (V 0.2)

---

Back End:
Dans la deuxième partie du back end, Guilhaume à mit des action supplémentaire pour rendre l'API en mode REST, et pouvoir faire un CRUD.
Pour cette version, il faudra épurer celle-ci pour coller au besoin du projet.
Le retrait de certaine fonctionnalité, la refactorisation des nom nottament permettra de rendre l'ensemble plus homogène.
En typant fortement les noms dans nos table en SQL, nous suivront ainsi un peu mieux les enseignement de Rodolphe avec qui les étudiant on fait SQL.
La mises en commentaire de la suppression des score est également nécéssaire tant que nous n'avons pas d'interface d'administration.
Si il y a un quatrieme version alors, nous envisageront de remettre cette option.
Ici nous travaillons sur application Full Stack l'objectif de cette exercice/evaluation et de vous faire parcourir l'ensemble de vos connaissance.
N'hésiter pas à regarder le projet, du contenus pour vous accompagner est présent.
Un pas après l'autre, faite des petite modification.
Ne partez pas à l'aveugle au risque de tout faire planter et de vous perdre

---

Front End:

La mises en place d'un menu, qui contien Jouer, Score et Crédit.
Nous allons pouvoir ainsi naviguer et mettre en place le reste de l'application.
Il faut également faire de la refactorisation et cela va nous permettre d'aborder un des fondement de la programmation le débogage.
Pour faire du débug nous utiliseront la console de développement du navigateur.
Ainsi cela ouvre un découverte sur les break point, cela permet également d'observer le fonctionement du programme et les étapes par lesquelles il passe.
le mot clé debugger permet de mettre un breakpoints en dur dans le code.

Jusqu'à présent nous avons travaillez sur un tableau à deux dimension pour générer les monstre (Démonstration du destructuring sur tableau).
désormais nous transformeront celui-ci en tableau d'objet, ou JSON.

Cela change légèrement le programme, il faut également faire en sorte que tout ce déroule comme convenus avec les nouveau prérequis (Menu etc).

Il est demander au étudiant, d'observer attentivement la version que je leur ai fournis, et de voir si il est possible de l'optimiser.

Le fait de prendre en compte le menu change également pas mal le fonctionnement.
Précedement le site devait être rafraichis pour recommencer une partie.
Maintenant lorsque le joueur meurt il devra pouvoir entrer son pseudonyme et son score qui seront ainsi enregistrer dans le tableau des score (en bases de données).
Une fois cette action réaliser, le menu devra de nouveau s'afficher.
l'utilisateur doit pouvoir recommencer comme si il venais de lancer le site.

Lorsque l'utilisateur clique sur le bouton du menu score, les 5 dernier score doivent alors s'afficher dans un tableau.
l'utilsation de la framework nes.css rend la démarche plus simple et me permet de les initier à npm (Bootstrap est normalement déjà vus).

Le crédit lui affichera l'ensemble des participants proche ou lointain du projet.

Je profite également de cette partie pour leur parler des lien symbolique (simlink)
Il permettent de faire entrer un projet dans Xampp ou Wampp sans avoir à les placer dans le www.
