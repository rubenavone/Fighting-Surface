

/**
 * TODO: Fetch sur le backend pour récuperer l'ensemble des monstre et ainsis faire un tirage aléatoire dessus
 * 
 */

let urlMonster = "http://localhost/fighting_surface_api/monsters";
let urlGetScore = "http://localhost/fighting_surface_api/scores";
let urlSetScore = "http://localhost/fighting_surface_api/add";
let urlUpdateScore = "http://localhost/fighting_surface_api/modifScore";
let urlPutJSONPlaceholder = "http://jsonplaceholder.typicode.com/posts/1";

async function getMonsters() {
  const response = await fetch(urlMonster, {
    method: 'GET',
    mode: 'cors'
  });
  if (response.ok) {

    return await Promise.resolve(response.json());
  } else {
    Promise.reject("Erreur");
  }
}

async function getScores() {
  const response = await fetch(urlGetScore, {
    method: 'GET',
    mode: 'cors'
  });
  if (response.ok) {

    return await Promise.resolve(response.json());
  } else {
    Promise.reject("Erreur");
  }
}

async function setScore(data) {
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
    body: JSON.stringify(data), // body data type must match "Content-Type" header);
  })
  return response.json();
}

async function updateScore(data) {      // Awaiting fetch which contains method,
  // headers and content-type and body
  const response = await fetch(urlUpdateScore, {
    method: 'POST',
    mode: "no-cors",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'mode': 'cors',
    },
    body: JSON.stringify(data)
  });
  if(response.ok){
    return response.json();

  }else{
    console.log("error");
    console.log(response);
  }
}


export { getMonsters, getScores, setScore, updateScore }