function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;

    if (text.length === 0) {
        alert('Tarefa precisa ser digitada');
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElement = document.createTextNode(text); // Corrigi o 'Text' para 'text'
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}
