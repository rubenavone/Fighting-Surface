

/**
 * TODO: Fetch sur le backend pour récuperer l'ensemble des monstre et ainsis faire un tirage aléatoire dessus
 * 
 */

let urlMonster ="http://localhost/fighting_surface_V0.2/monsters";
let urlGetScore = "http://localhost/fighting_surface_V0.2/scores";
let urlSetScore = "http://localhost/fighting_surface_V0.2/add";

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

  async function setScore(data){
    const response = await fetch(urlSetScore, {
      //Change the method
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      "Content-type": "application/json; charset=UTF-8",
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      /**
            * here is the body of the request, you send an Object in args
            * this object is like that 
            * {
            *  title: "foo",
            *  body: "bar",
            *  userId: 1,
            *      }
            * it will be transform with the JSON method stringify (transform text/json into plain/text); 
            * the results will be like that
            */
      body: JSON.stringify(data), // body data type must match "Content-Type" header);
    })
    return response.json();
  }
export { getMonsters, getScores, setScore }