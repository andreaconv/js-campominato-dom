//BOTTONI
const btnGenera = document.querySelector("button");
const select = document.querySelector("select");

//MAIN
const main = document.querySelector("main");

let blackList = [];

let points = 0;


btnGenera.addEventListener("click", function () {

  reset();

  //creo il container
  const container = document.createElement("div");
  container.className = "container";
  main.appendChild(container);


  console.log(select.value);
})


//-------------------------FUNCTIONS-----------------------------------

//RESET
function reset() {
  main.innerHTML = "";
  blackList = [];
}