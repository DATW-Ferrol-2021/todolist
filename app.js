const elemTarefas = document.getElementById("tarefas");
const formulario = document.getElementById("formulario");

var tarefas = [
    "Unha de proba"
];


function mostrarTarefas() {
    elemTarefas.innerHTML = "";
    tarefas.forEach((t,i) => {
        let checkId = "chk"+i;
        let item = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        //checkbox.setAttribute("name", checkId);
        checkbox.setAttribute("id", checkId);
        let label = document.createElement("label");
        label.innerText = t;
        label.setAttribute("for", checkId);
        item.appendChild(checkbox);
        item.appendChild(label);
        elemTarefas.appendChild(item);
    })
}

function engadirTarefa(event) {
    tarefas.push(formulario.tarefa.value);
    mostrarTarefas();
    formulario.reset();
    return false;
}

mostrarTarefas();
