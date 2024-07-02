const plus = document.querySelector(".add");
let ul = document.getElementById("contents");

let listaOs = [];
let novaLi = "";
pegarLs();
renderizarLs();
function renderizarLs() {
  novaLi = "";
  for (let i = 0; i < listaOs.length; i++) {
    ul.innerHTML = `<span>${listaOs[i]}</span>`;
  }
}

function mostrarTarefas() {
  novaLi = "";
  listaOs.forEach((tarefa, index) => {
    novaLi += `
    
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
      <svg class="remove" onclick="dell(${index})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
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
      <p id="camp"> Total de serviços:</p>
      <input type="text" name="" id="txt">
      <p id="camp" >Total Geral:</p>
      <input type="text" name="" id="txt">
    
   </div>`;
  });

  listaOs.push(novaLi);
  ul.innerHTML = novaLi;
  //console.log(listaOs);

  setarLs();
  // renderizarLs();
}

function setarLs() {
  localStorage.setItem("key", JSON.stringify(listaOs));
}

function pegarLs() {
  const TarefasLocal = localStorage.getItem("key");
  if (TarefasLocal) {
    listaOs = JSON.parse(TarefasLocal);
  }
}
plus.addEventListener("click", mostrarTarefas);
function dell(index) {
  listaOs.splice(index, 1);

  console.log(index);
  setarLs();
}
