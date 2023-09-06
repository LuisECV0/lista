const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
           
            <span class="task-text">${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Eliminar</button>
         
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}
function deleteTask(button) {
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}