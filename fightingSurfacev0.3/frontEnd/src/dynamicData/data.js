
let enemiesList = [];

/**
 * TODO: Fetch sur le backend pour récuperer l'ensemble des monstre et ainsis faire un tirage aléatoire dessus
 * 
 */
let urlTest = "https://api.themoviedb.org/3/movie/550?api_key=bf26301d9698c1061427652e6ea2f518";

let urlMonster ="http://localhost/fighting_surface_V0.2/monsters";

 async function getData(){
    const response = await fetch(urlMonster,{
      method: 'GET',
      mode: 'cors'
    });
    if(response.ok){
      
      return await Promise.resolve(response.json());
    }else{
      Promise.reject("Erreur");
    }
  }
  
// function fillEnemyArray(){
//     getData().then(function (data){
//         var enemiesList = []

//         for (const key in data) {    
//                 const element = data[key];
//                 console.log(element)
//                 enemiesList.push(element)
//                 console.log(enemiesList)
//         }
//         console.log("Data is loaded" , data);
//         console.log("Final Array" , enemiesList);
        
//         return enemiesList
//     })
    
// }

// enemiesList = fillEnemyArray();

export { getData }