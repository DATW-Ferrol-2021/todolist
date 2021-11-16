const elemTarefas = document.getElementById("tarefas");
const formulario = document.getElementById("formulario");

var tarefas = [
    "Unha de proba"
];


function mostrarTarefas() {
    elemTarefas.innerHTML = "";
    tarefas.forEach(t => {
        let nodo = document.createElement("li");
        nodo.innerText = t;
        elemTarefas.appendChild(nodo);
    })
}

function engadirTarefa(event) {
    tarefas.push(formulario.tarefa.value);
    mostrarTarefas();
    formulario.reset();
    return false;
}

mostrarTarefas();
