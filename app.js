const elemTarefas = document.getElementById("tarefas");
const formulario = document.getElementById("formulario");

var tarefas = [
    "Unha de proba"
];

var feitas = [];

function mostrarTarefas() {
    elemTarefas.innerHTML = "";
    tarefas.forEach((t,i) => {
        let checkId = "chk"+i;
        let item = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        //checkbox.setAttribute("name", checkId);
        checkbox.setAttribute("id", checkId);
        checkbox.dataset.index = i;
        if (feitas[i]) {
            checkbox.setAttribute("checked", "checked");
        }
        checkbox.onchange = cambiarEstadoTarefa;
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
    gardarDatos();
    return false;
}


function cambiarEstadoTarefa(event) {
    let check = event.target;
    let i = check.dataset.index;
    feitas[i] = !feitas[i];
    mostrarTarefas();
    gardarDatos();
}

function gardarDatos() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    localStorage.setItem("feitas", JSON.stringify(feitas));
}

function cargarDatos() {
    tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    feitas = JSON.parse(localStorage.getItem("feitas")) || [];
}

cargarDatos();
mostrarTarefas();
