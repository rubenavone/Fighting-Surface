# Troisième partie du projet

Back End:
Dans la deuxième partie du back end, Guilhaume à mit des action supplémentaire pour rendre l'API en mode REST, et pouvoir faire un CRUD.
Pour cette version, il faudra épurer celle-ci pour coller au besoin du projet.
Le retrait de certaine fonctionnalité, la refactorisation des nom nottament permettra de rendre l'ensemble plus homogène.
En typant fortement les noms dans nos table en SQL, nous suivront ainsi un peu mieux les enseignement de Rodolphe avec qui les étudiant on fait SQL.
La mises en commentaire de la suppression des score est également nécéssaire tant que nous n'avons pas d'interface d'administration.
Si il y a un quatrieme version alors, nous envisageront de remettre cette option.


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
