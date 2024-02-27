// ELEMENTI  HTML
const header = document.querySelector("header");
const btnGenera = document.querySelector("button");
const select = document.querySelector("select");
const score = document.querySelector(".score");
let points = document.getElementById("points");
const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');

// DATA
const totalBombs = 16;
let countPoints = 0;
let bombsList = [];

//EVENTO bottone START cliccato
btnGenera.addEventListener("click", play);


//-------------------------FUNCTIONS-----------------------------------

// PLAY
function play(){

  reset();

//mostro il punteggio e il container
  showTags(score, container);

// genero le bombe
  generateBombs();

  //genero i quadratini
  generateGrid();


}

// * funzione che mi toglie la classe 'hidden' e di conseguenza mi mostra gli elementi
function showTags(...items) {
  items.forEach(item => item.classList.remove('hidden'));
}

// * funzione che mi genera le BOMBE con numeri random fino al luvello selezionato
function generateBombs (){
  // Generare TOT bombe casuali
  while (bombsList.length < totalBombs) {
    const number = Math.floor(Math.random() * select.value) + 1;
    if (!bombsList.includes(number)) bombsList.push(number);
  }
  
  // metto in ordine crescente la lista delle bombe
  function confrontoCrescente(a, b) {
    return a - b;
  }
  bombsList.sort(confrontoCrescente);
  console.log("BOMBE ->", JSON.stringify(bombsList));
}

//  * funzione che mi genera i box all'interno della griglia
function generateGrid(){

  //ciclo per generare i box all'interno del container
  for (let i = 1; i <= select.value; i++) {
    // creo il box con una funzione specifica
    const square = createSquare(select.value, i);
    //inseriesco il box nella griglia 
    grid.appendChild(square);
  }

}

// * funzione richiamata da generateGrid() per creare un BOX
function createSquare(numBoxTot, id){

  const box = document.createElement("div");
  box.className = "box";
  box.setAttribute("title", id);

  //attribuisco la larghezza in base al livello scelto
  if (numBoxTot == 100) {
    box.style = "width: var(--easy)";
  } else if (numBoxTot == 81) {
    box.style = "width: var(--medium)";
  } else {
    box.style = "width: var(--hard)";
  }

  // # attribuisco un ID ad ogni box passando la varianile "i" del ciclo di generazione
  box._boxId = id;

  //EVENTO click sul BOX
  box.addEventListener("click", clickBoxEvent);

  return box;
}

// * funzione che viene richiamata al click del BOX
function clickBoxEvent(){

  // console.log("Hai cliccato la casella numero:", this._boxId);

  // # se il BOX continene già la classe 'clicked' blocca l'evento
  if(this.classList.contains('clicked')) return;
  // ^ ALTERNATIVA per torgliere l'evento del click al BOX
  // this.removeEventListener('click', clickBoxEvent);
  
  if(bombsList.includes(this._boxId)){
    this.classList.add("bomb");
    endgame(false);
  } else {

    // ? mi calcolo il numero di bombe limitrofe e lo aggiungo nel box
    const numBombs = getNearBombs(this._boxId);
    this.innerHTML = `<span>${numBombs}</span>`;

    updateScore();
    this.classList.add("clicked");
  }
} 

//  * funzione che ottiene le BOMBE vicine al box cliccato
function getNearBombs(idBox){
  const nearBoxs = getNearBox(idBox);
  let numBombs = 0;
  nearBoxs.forEach(bomb => {
    if(bombsList.includes(bomb)) numBombs++;
  });
  return numBombs;
}

//  * funzione che ottiene i BOX vicini a quello cliccato
function getNearBox(idBox){

  // # calcolo il quadrato del numero totale di box per sapere quanti box ci sono per gogni riga
  const boxPerRow = Math.sqrt(document.getElementsByClassName('box').length);

  // array che contiene i box limitrofi
  let nearBox = [];

  // il modulo mi serve per capire quale colonna è stata cliccata
  if(idBox % boxPerRow === 1){
    nearBox = [
      idBox - boxPerRow,
      idBox - boxPerRow + 1,
      idBox + 1,
      idBox + boxPerRow,
      idBox + boxPerRow + 1
    ];
  }else if(idBox % boxPerRow === 0){
    nearBox = [
      idBox - boxPerRow - 1,
      idBox - boxPerRow,
      idBox - 1,
      idBox + boxPerRow - 1,
      idBox + boxPerRow
    ];
  }else{
    nearBox = [
      idBox - boxPerRow - 1,
      idBox - boxPerRow,
      idBox - boxPerRow + 1,
      idBox - 1,
      idBox + 1,
      idBox + boxPerRow - 1,
      idBox + boxPerRow,
      idBox + boxPerRow + 1
    ];
  }
  return nearBox;
}

//  * funzione che aggiorna il punteggio
function updateScore(){
  countPoints++;
  points.innerText = String(countPoints).padStart(5, 0);

  if(countPoints === (select.value - totalBombs)) endgame(true);
}

//  * funzione di fine gioco
function endgame(isWinner){
  if(isWinner){
   // Coloriamo di verde e cambiamo il messaggio
    endGameScreen.classList.add('win');
    endGameText.innerHTML = 'You<br>Win';
  } else {
    endGameScreen.classList.remove('win');
    endGameText.innerHTML = 'Game<br>Over';
  }
  revealAllBombs();

  // Mostriamo la schermata rimuovendo la classe
  showTags(endGameScreen);
}

//  * funzione che rivela tutte le bombe
function revealAllBombs() {
  // Recupero tutti i box
  const boxs = document.querySelectorAll('.box');
  for (let i = 1; i <= boxs.length; i++) {
    // controllo se il box è una bomba
    if (bombsList.includes(i)) {
      const boxToReveal = boxs[i - 1];
      boxToReveal.classList.add('bomb');
    }
  }
}

//  * funzione che ricarica la pagina
function playAgain() {
  location.reload();
}

//  * funzione che RESETTA il contenuto del main
function reset() {
  grid.innerHTML = "";
  bombsList = [];
  countPoints = 0;
  points.innerText = String(countPoints).padStart(5, 0);
  endGameScreen.classList.add('hidden');
}
