

/**
 * TODO: Fetch sur le backend pour récuperer l'ensemble des monstre et ainsis faire un tirage aléatoire dessus
 * 
 */

let urlMonster ="http://localhost/fighting_surface_V0.2/monsters";
let urlGetScore = "http://localhost/fighting_surface_V0.2/scores";
 async function getMonsters(){
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

  async function getScores(){
    const response = await fetch(urlGetScore,{
      method: 'GET',
      mode: 'cors'
    });
    if(response.ok){
      
      return await Promise.resolve(response.json());
    }else{
      Promise.reject("Erreur");
    }
  }  

export { getMonsters, getScores }