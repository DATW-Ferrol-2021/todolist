const elemTarefas = document.getElementById("tarefas");
var tarefas = [
    "Unha de proba"
];


function mostrarTarefas() {
    tarefas.forEach(t => {
        let nodo = document.createElement("li");
        nodo.innerText = t;
        elemTarefas.appendChild(nodo);
    })
}


mostrarTarefas();
