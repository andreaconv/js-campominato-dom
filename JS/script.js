//BOTTONI
const btnGenera = document.querySelector("button");
const select = document.querySelector("select");

//MAIN
const main = document.querySelector("main");

let blackList = [];

let points = 0;


//EVENTO bottone START cliccato
btnGenera.addEventListener("click", function () {

  reset();

  //creo il container
  const container = document.createElement("div");
  container.className = "container";
  main.appendChild(container);

  //ciclo per generare i box all'interno del container
  for (let i = 1; i <= select.value; i++) {
    //console.log("ciclonum", i, select.value)
    const box = document.createElement("div");
    box.className = "box";

    if (select.value == 100) {
      box.style = "width: var(--easy)";
    } else if (select.value == 81) {
      box.style = "width: var(--medium)";
    } else {
      box.style = "width: var(--hard)";
    }

    //creo un numero random
    const numeroRandom = generateUniqueRandomNumber(blackList, 1, select.value);
    blackList.push(numeroRandom);
    box.innerText = numeroRandom;

    //EVENTO click sul BOX
    box.addEventListener("click", function () {

      //coloro la casella aggiungendo una classe
      if (numeroRandom < 17){
        box.classList.add("bomb");
      }else {
        box.classList.add("clicked");
      }
      console.log("hai cliccato sulla cella numero", box.innerText);
    })

    
    container.appendChild(box);
  }
  
})




//-------------------------FUNCTIONS-----------------------------------


/**
* genera un numero random non presente nella blacklist
* 
* @param {Array} arrayBlackList 
* @param {number} min 
* @param {number} max 
* @returns unique random generated
*/

function generateUniqueRandomNumber(arrBlackList, min, max) {
  /*
  1. estraggo un numero random
  2. se non è presente nella blacklist lo restituisco
  3. se è presente ne genero un'altro fino a trovarne uno valido
  */
  let randomNumber;
  let isValidNumber = false;

  while (!isValidNumber) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (!arrBlackList.includes(randomNumber)) {
      //se il numero non è incluso nella blacklist isValidNumber diventatrue e interrompe il ciclo
      isValidNumber = true;
    }
  }
  return randomNumber;
}


//RESET
function reset() {
  main.innerHTML = "";
  blackList = [];
}

