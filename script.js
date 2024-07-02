/*
const arrow = document.querySelectorAll(".arrows");
const expandir = document.querySelector(".expand");
const plus = document.querySelector(".add");
const box = document.querySelector(".Os-box");
const main = document.querySelector("#mainjs");

const ul = document.getElementById("contents");

let arrayStorage = [];

getLs();

// expandir conteúdo seta

/*arrow.forEach((Expandir) => {
  Expandir.addEventListener("click", exp);
});

function exp() {
  expandir.classList.toggle("active");
}

const addContent = arrayStorage;

function renderLs() {
  ul.innerHTML = "";
  for (let i = 0; i < arrayStorage.length; i++) {
    ul.innerHTML += `<span id='spanid'>${addContent[i]} </span>`;
  }
}

function addTarefa() {
  const content = (ul.innerHTML = `
  <div class="some-input" id="idInputOs"> 
                  
                      <div class="camp-input ">                                         
                        <p id="camp"> Nome do cliente:</p>
                        <input type="text" name="" id="txt">
                        <p id="camp" >Carro:</p>
                        <input type="text" name="" id="txt">
                        <p id="camp" >Placa:</p>
                        <input type="text" name="" id="txt">
                        <p id="camp" >Km:</p>
                        <input type="text" name="" id="txt">
                        <p id="camp"  >Ano:</p>
                        <input type="text" name="" id="txt">
                        <svg class="arrows" xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                        <svg class="remove" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                      </svg>
                      </div>
                    
                    </div>
                    
                    <div class="expand ">
                        <p id="camp" >Descrição:</p>
                        <textarea id="txt"></textarea>
                        <p id="camp" >V. UNIT: </p>
                        <textarea id="txt"></textarea>
                        <p id="camp" >Valor R$: </p>
                        <textarea id="txt"> </textarea>
                        <p id="camp"> Total de peças:</p>
                        <input type="text" name="" id="txt">
                        <p id="camp" >Total de serviços:</p>
                        <input type="text" name="" id="txt">
                        <p id="camp" >Total Geral:</p>
                        <input type="text" name="" id="txt">
                      
                    </div>
  `);

  setItemLs();
  renderLs();
}

plus.addEventListener("click", addTarefa);

function getLs() {
  arrayStorage = JSON.parse(localStorage.getItem("div"));
}

function setItemLs() {
  localStorage.setItem("div", JSON.stringify(arrayStorage));
} */
